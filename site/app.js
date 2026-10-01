"use strict";

const $ = (selector) => document.querySelector(selector);
const fields = {
  q: $("#search"),
  score: $("#score"),
  simulator: $("#simulator"),
  model: $("#model"),
  year: $("#year"),
};
const defaultSort = "score-desc";
const collator = new Intl.Collator("en", {
  numeric: true,
  sensitivity: "base",
});
let papers = [];
let currentPage = 1;
let activePaper = null;
let searchTimer;
let ready = false;
const dialog = $("#review-dialog");
const normalize = (value) =>
  String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );

function badge(paper) {
  const value = paper.scores.length ? paper.scores.join(" / ") : "Unrated";
  const level = paper.scores.length ? Math.max(...paper.scores) : "Unrated";
  return `<span class="badge" data-level="${level}" aria-label="${paper.scores.length ? "Score " : ""}${escape(value)}">${escape(value)}</span>`;
}

function options(selector, values) {
  const select = $(selector);
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
}

function readURL() {
  const params = new URLSearchParams(location.search);
  for (const [key, field] of Object.entries(fields)) {
    const value = (params.get(key) || "").slice(0, 500);
    field.value =
      field.tagName === "SELECT" &&
      ![...field.options].some((option) => option.value === value)
        ? ""
        : value;
  }
  const sort = params.get("sort") || defaultSort;
  $("#sort").value = [...$("#sort").options].some(
    (option) => option.value === sort,
  )
    ? sort
    : defaultSort;
  const size = params.get("size") || "25";
  $("#page-size").value = ["25", "50", "all"].includes(size) ? size : "25";
  currentPage = Math.max(1, Number.parseInt(params.get("page"), 10) || 1);
}

function writeURL() {
  const url = new URL(location.href);
  url.search = "";
  for (const [key, field] of Object.entries(fields)) {
    if (field.value.trim()) url.searchParams.set(key, field.value.trim());
  }
  if ($("#sort").value !== defaultSort)
    url.searchParams.set("sort", $("#sort").value);
  if ($("#page-size").value !== "25")
    url.searchParams.set("size", $("#page-size").value);
  if (currentPage > 1) url.searchParams.set("page", currentPage);
  if (url.href !== location.href) history.replaceState(null, "", url);
}

function matches(paper) {
  const query = normalize(fields.q.value.trim()).split(/\s+/).filter(Boolean);
  const score = fields.score.value;
  return (
    query.every((part) => paper.searchText.includes(part)) &&
    (!score ||
      (score === "Multiple" || score === "Unrated"
        ? paper.scoreGroup === score
        : paper.scores.includes(Number(score)))) &&
    (!fields.simulator.value ||
      paper.simulatorGroup === fields.simulator.value) &&
    (!fields.model.value || paper.models.includes(fields.model.value)) &&
    (!fields.year.value || String(paper.year) === fields.year.value)
  );
}

function compare(a, b) {
  const [key, direction] = $("#sort").value.split("-");
  const sign = direction === "desc" ? -1 : 1;
  let difference;
  if (key === "score") {
    // Missing comparisons stay separate and last, even in ascending order.
    if (!a.scores.length && b.scores.length) return 1;
    if (a.scores.length && !b.scores.length) return -1;
    difference =
      (a.scores.length ? Math.max(...a.scores) : -1) -
      (b.scores.length ? Math.max(...b.scores) : -1);
  } else if (key === "year") {
    difference = a.year - b.year;
  } else {
    difference = collator.compare(a[key], b[key]);
  }
  return difference * sign || a.order - b.order;
}

function row(paper) {
  const reviewURL = `./reviews.html#${paper.id}`;
  const note = paper.score.split(",").slice(1).join(",").trim();
  return `<tr data-paper="${paper.id}">
    <td class="paper-cell" data-label="Paper & task"><a class="paper-name" data-review="${paper.id}" href="${reviewURL}">${escape(paper.name)}</a><p class="paper-venue">${escape(paper.venue)}</p><p class="paper-task">${escape(paper.task)}</p><div class="paper-actions"><a href="${escape(paper.doi.url)}" target="_blank" rel="noopener noreferrer">DOI ↗</a><a data-review="${paper.id}" href="${reviewURL}">Full review →</a></div></td>
    <td class="score-cell" data-label="Score">${badge(paper)}${note ? `<span class="score-note">${escape(note)}</span>` : ""}</td>
    <td class="sim-cell" data-label="Training simulator"><span class="sim-family">${escape(paper.simulatorGroup)}</span>${paper.simulatorGroup !== paper.simulator ? `<span class="cell-detail">${escape(paper.simulator)}</span>` : ""}</td>
    <td class="method-cell" data-label="Learning method">${escape(paper.method)}</td>
    <td class="hardware-cell" data-label="Hardware"><span class="robot-model">${escape(paper.robot)}</span><span class="cell-detail">${escape(paper.endEffector)}</span></td>
    <td class="resources-cell" data-label="Video & code"><div class="resource-group"><span class="resource-label">Video / visuals</span><div class="resource-links">${paper.visualsHtml}</div></div><div class="resource-group"><span class="resource-label">Code</span><div class="resource-links">${paper.codeHtml}</div></div></td>
  </tr>`;
}

function externalLinks(container) {
  container
    .querySelectorAll('a[href^="https://"], a[href^="http://"]')
    .forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
}

function render(syncURL = true) {
  if (!ready) return;
  const results = papers.filter(matches).sort(compare);
  const perPage =
    $("#page-size").value === "all"
      ? Math.max(1, results.length)
      : Number($("#page-size").value);
  const pages = Math.max(1, Math.ceil(results.length / perPage));
  currentPage = Math.min(currentPage, pages);
  const start = (currentPage - 1) * perPage;
  $("#paper-rows").innerHTML = results
    .slice(start, start + perPage)
    .map(row)
    .join("");
  externalLinks($("#paper-rows"));
  $("#result-count").innerHTML =
    `<strong>${results.length} of ${papers.length}</strong> papers${results.length ? ` <span>· showing ${start + 1}–${Math.min(start + perPage, results.length)}</span>` : ""}`;
  $("#no-results").hidden = results.length > 0;
  $("#table-wrap").hidden = results.length === 0;
  $("#pagination").hidden = results.length === 0;
  $("#previous").disabled = currentPage === 1;
  $("#next").disabled = currentPage === pages;
  $("#page-status").textContent = `${currentPage} / ${pages}`;
  const filterNotes = [];
  if (/^[0-4]$/.test(fields.score.value))
    filterNotes.push(
      "Includes papers with this score in any reviewed setting; multiple scores stay visible.",
    );
  if (fields.model.value === "Panda" || fields.model.value.startsWith("FR3"))
    filterNotes.push(
      "Matches reported arm models. Unreported revisions and conflicting model labels remain separate.",
    );
  if (fields.simulator.value)
    filterNotes.push(
      "Simulator groups follow the reviewed training task; evaluation-only engines and rendering tools are excluded.",
    );
  $("#filter-note").textContent = filterNotes.join(" ");
  $("#filter-note").hidden = !filterNotes.length;
  const [sortKey, direction] = $("#sort").value.split("-");
  document.querySelectorAll("th[data-sort]").forEach((header) => {
    header.removeAttribute("aria-sort");
    header.querySelector("span").textContent = "↕";
    if (header.dataset.sort === sortKey) {
      header.setAttribute(
        "aria-sort",
        direction === "desc" ? "descending" : "ascending",
      );
      header.querySelector("span").textContent =
        direction === "desc" ? "↓" : "↑";
    }
  });
  if (syncURL) writeURL();
}

function syncReview() {
  let id;
  try {
    id = decodeURIComponent(location.hash.slice(1));
  } catch {
    id = "";
  }
  const paper = papers.find((item) => item.id === id);
  if (!paper) {
    activePaper = null;
    if (dialog.open) dialog.close();
    document.title = "real-frankas-only · Paper explorer";
    return;
  }
  if (activePaper === paper.id && dialog.open) return;
  activePaper = paper.id;
  $("#review-title").textContent = paper.title;
  $("#review-summary").textContent = paper.summary;
  $("#review-score").innerHTML = badge(paper);
  $("#review-venue").textContent = paper.venue;
  $("#review-links").innerHTML =
    `<a class="button secondary" href="${escape(paper.doi.url)}">DOI / paper ↗</a>`;
  $("#review-metadata").innerHTML = [
    ["Task", paper.task],
    ["Franka model", paper.robot],
    ["End-effector", paper.endEffector],
    ["Training simulator", paper.simulator],
    ["Learning method", paper.method],
    ["Assessment", paper.score],
    ["Last reviewed", paper.lastReviewed],
  ]
    .map(([label, value]) => `<dt>${label}</dt><dd>${escape(value)}</dd>`)
    .join("");
  $("#review-content").innerHTML = paper.reviewHtml;
  $("#review-permalink").href = `./reviews.html#${paper.id}`;
  $("#copy-status").textContent = "";
  externalLinks(dialog);
  document.title = `${paper.name} · real-frankas-only`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}

function closeReview() {
  const url = new URL(location.href);
  url.hash = "";
  history.replaceState(null, "", url);
  activePaper = null;
  dialog.close();
  document.title = "real-frankas-only · Paper explorer";
}

$("#filters").addEventListener("submit", (event) => event.preventDefault());
fields.q.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    currentPage = 1;
    render();
  }, 120);
});
Object.values(fields)
  .filter((field) => field.tagName === "SELECT")
  .forEach((field) =>
    field.addEventListener("change", () => {
      currentPage = 1;
      render();
    }),
  );
$("#filters").addEventListener("reset", (event) => {
  event.preventDefault();
  clearTimeout(searchTimer);
  Object.values(fields).forEach((field) => {
    field.value = "";
  });
  $("#sort").value = defaultSort;
  currentPage = 1;
  render();
});
$("#empty-reset").addEventListener("click", () => $("#filters").reset());
$("#sort").addEventListener("change", () => {
  currentPage = 1;
  render();
});
$("#page-size").addEventListener("change", () => {
  currentPage = 1;
  render();
});
document.querySelectorAll("th[data-sort] button").forEach((button) =>
  button.addEventListener("click", () => {
    const key = button.parentElement.dataset.sort;
    const [current, direction] = $("#sort").value.split("-");
    $("#sort").value =
      `${key}-${current === key ? (direction === "asc" ? "desc" : "asc") : key === "score" ? "desc" : "asc"}`;
    currentPage = 1;
    render();
  }),
);
for (const [id, change] of [
  ["previous", -1],
  ["next", 1],
]) {
  $(`#${id}`).addEventListener("click", () => {
    currentPage += change;
    render();
    $("#explorer").scrollIntoView({ block: "start" });
  });
}
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-review]");
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
    return;
  event.preventDefault();
  history.pushState(null, "", `#${link.dataset.review}`);
  syncReview();
});
$("#close-review").addEventListener("click", closeReview);
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeReview();
});
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom)
  )
    closeReview();
});
$("#copy-link").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    $("#copy-status").textContent = "Review link copied.";
  } catch {
    $("#copy-status").textContent =
      "Copy the review link from your browser’s address bar.";
  }
});
$("#retry").addEventListener("click", () => location.reload());
window.addEventListener("popstate", () => {
  readURL();
  render(false);
  syncReview();
});
window.addEventListener("hashchange", syncReview);
document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !dialog.open &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    !event.target.matches("input,select,textarea,[contenteditable]")
  ) {
    event.preventDefault();
    fields.q.focus();
  }
});

async function init() {
  try {
    const response = await fetch("./data.json");
    if (!response.ok)
      throw new Error(`Collection request failed: ${response.status}`);
    const data = await response.json();
    papers = data.papers.map((paper) => ({
      ...paper,
      searchText: normalize(
        [
          paper.name,
          paper.title,
          paper.summary,
          paper.venue,
          paper.task,
          paper.simulator,
          paper.method,
          paper.robot,
          paper.endEffector,
          paper.doi.label,
        ].join(" "),
      ),
    }));
    options(
      "#simulator",
      Object.keys(data.simulatorCounts).sort(collator.compare),
    );
    options(
      "#model",
      [...new Set(papers.flatMap((paper) => paper.models))].sort(
        collator.compare,
      ),
    );
    options(
      "#year",
      [...new Set(papers.map((paper) => paper.year))].sort((a, b) => b - a),
    );
    $("#updated").textContent = data.updated;
    $("#updated").dateTime = data.updated;
    $("#total-stat").textContent = papers.length;
    $("#scored-stat").textContent = papers.filter(
      (paper) => paper.scores.length,
    ).length;
    $("#unrated-stat").textContent = data.scoreCounts.Unrated || 0;
    ready = true;
    readURL();
    render();
    syncReview();
  } catch (error) {
    $("#load-error").hidden = false;
    $("#table-wrap").hidden = true;
    $("#result-count").textContent = "Collection unavailable";
    console.error(error);
  }
}
init();
