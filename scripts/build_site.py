#!/usr/bin/env python3
"""Build the explorer from the reviewed Markdown; reject incomplete migrations."""

import json
import re
import shutil
from collections import Counter
from html import escape
from html.parser import HTMLParser
from pathlib import Path

from markdown_it import MarkdownIt

ROOT = Path(__file__).resolve().parents[1]
MD = MarkdownIt("commonmark", {"html": False}).enable("table")
REPO = "https://github.com/refracta/real-frankas-only"
HEADERS = ["Paper", "Venue", "Franka model", "End-effector", "Task",
           "Training simulator", "Learning method", "Video / visuals", "Code", "Score"]


class TextOnly(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


def plain(markdown):
    parser = TextOnly()
    parser.feed(MD.renderInline(markdown))
    return "".join(parser.parts)


def links(markdown):
    result = []
    for block in MD.parseInline(markdown):
        current = None
        for token in block.children or []:
            if token.type == "link_open":
                current = {"url": token.attrGet("href"), "label": ""}
            elif token.type == "link_close":
                if current:
                    result.append(current)
                current = None
            elif current and token.type in ("text", "code_inline"):
                current["label"] += token.content
    return result


def slug(heading):
    return re.sub(r"[^\w\- ]", "", heading.lower()).replace(" ", "-")


def simulator_group(paper, overrides):
    if paper["id"] in overrides:
        return overrides[paper["id"]]
    value = paper["simulator"].lower()
    # The ordering intentionally separates Lab from Sim and training from rendering.
    rules = [("mujoco", "MuJoCo / MJX"), ("isaac lab", "Isaac Lab"),
             ("isaac gym", "Isaac Gym"), ("isaac sim", "Isaac Sim"),
             ("pybullet", "PyBullet"), ("maniskill", "ManiSkill / SAPIEN"),
             ("sapien", "ManiSkill / SAPIEN"), ("gazebo", "Gazebo"),
             ("coppeliasim", "CoppeliaSim / RLBench"), ("flex", "NVIDIA FleX"),
             ("agx", "AGX Dynamics"), ("drake", "Drake"),
             ("fluidengine", "FluidEngine / Taichi"), ("custom", "Custom task simulator")]
    for keyword, group in rules:
        if keyword in value:
            return group
    raise ValueError(f"Classify the training simulator for {paper['id']}")


def model_groups(paper, overrides):
    if paper["id"] in overrides:
        return overrides[paper["id"]]
    value = paper["robot"]
    if "not reported" in value.lower():
        return ["Not reported"]
    # A Panda gripper on an FR3 is not a Panda arm.
    arm = value.split(";")[0]
    if value == "Panda; FR3":
        return ["Panda", "FR3"]
    if "FR3 2.1" in arm:
        return ["FR3 2.1"]
    if "FR3" in arm:
        return ["FR3"]
    if "Panda" in arm:
        return ["Panda"]
    raise ValueError(f"Classify the arm model for {paper['id']}")


def parse_catalog(source, overrides):
    updated = re.search(r"Last updated: (\d{4}-\d{2}-\d{2})", source).group(1)
    blocks = re.findall(r"^### ([^\n]+)\n(.*?)(?=^### |\Z)", source, re.M | re.S)
    cards = {slug(title): (title, body.strip()) for title, body in blocks}
    if len(cards) != len(blocks):
        raise ValueError("Duplicate review headings")
    table = source.split("### ", 1)[0]
    lines = [line for line in table.splitlines() if line.startswith("| ")]
    cells = lambda line: [c.strip().replace(r"\|", "|") for c in re.split(r"(?<!\\)\|", line)[1:-1]]
    if cells(lines[0]) != HEADERS:
        raise ValueError("Unexpected paper table columns")
    papers = []
    for index, line in enumerate(lines[2:]):
        row = cells(line)
        if len(row) != len(HEADERS):
            raise ValueError(f"Expected 10 cells: {line}")
        name_link, = links(row[0])
        paper_id = name_link["url"].removeprefix("#")
        heading, body = cards[paper_id]
        paragraphs = body.split("\n\n")
        if not paragraphs[0].startswith("**") or not paragraphs[2].startswith("- "):
            raise ValueError(f"Expected title, summary and evidence bullets: {paper_id}")
        score = plain(row[9])
        numbers = [int(n) for n in re.findall(r"\b[0-4]\b", score.split(",")[0])]
        if not numbers and score != "Unrated":
            raise ValueError(f"Unknown score: {score}")
        doi_links = [link for link in links(body) if link["url"].startswith("https://doi.org/")]
        if not doi_links:
            raise ValueError(f"Missing DOI: {paper_id}")
        paper = dict(zip(["venue", "robot", "endEffector", "task", "simulator", "method"],
                         map(plain, row[1:7])))
        paper.update({"id": paper_id, "order": index, "name": name_link["label"],
                      "heading": heading, "title": plain(paragraphs[0]),
                      "summary": plain(paragraphs[1]),
                      "year": int(re.search(r"\((\d{4})\)", heading).group(1)),
                      "score": score, "scores": numbers,
                      "scoreGroup": "Multiple" if len(numbers) > 1 else str(numbers[0]) if numbers else "Unrated",
                      "visuals": links(row[7]), "code": links(row[8]), "doi": doi_links[0],
                      "visualsHtml": MD.renderInline(row[7]), "codeHtml": MD.renderInline(row[8]),
                      "reviewHtml": MD.render(body),
                      "lastReviewed": re.search(r"\*\*Last reviewed:\*\* (\d{4}-\d{2}-\d{2})", body).group(1)})
        paper["simulatorGroup"] = simulator_group(paper, overrides["simulator"])
        paper["models"] = model_groups(paper, overrides["models"])
        papers.append(paper)
    ids = {p["id"] for p in papers}
    if len(ids) != len(papers) or ids != cards.keys():
        raise ValueError("Paper index and detailed reviews must match one-to-one")
    for values in overrides.values():
        if set(values) - ids:
            raise ValueError("Stale filter override")
    return {"updated": updated, "papers": papers,
            "scoreCounts": dict(Counter(p["scoreGroup"] for p in papers)),
            "simulatorCounts": dict(Counter(p["simulatorGroup"] for p in papers))}


def check_readme_statistics(readme, catalog):
    """Fail deployment instead of publishing a stale README summary."""
    total = len(catalog["papers"])
    for heading, counts in [("Score statistics", catalog["scoreCounts"]),
                            ("Training simulator statistics", catalog["simulatorCounts"])]:
        section = readme.split(f"## {heading}\n", 1)[1].split("\n## ", 1)[0]
        rows = re.findall(r"^\| (.+?) \| (\d+) \| ([\d.]+)% \|$", section, re.M)
        observed = {}
        for label, count, percentage in rows:
            label = plain(label)
            if label.startswith("Multiple scores"):
                label = "Multiple"
            if label.startswith("Isaac Sim"):
                label = "Isaac Sim"
            if label == "Total":
                continue
            observed[label] = int(count)
            if abs(float(percentage) - 100 * int(count) / total) > 0.051:
                raise ValueError(f"Stale README percentage: {label}")
        if observed != counts:
            raise ValueError(f"README {heading} does not match the catalog: {observed} != {counts}")
        if f"{total} distinct papers" not in section:
            raise ValueError(f"Stale README total in {heading}")


def build():
    catalog = parse_catalog((ROOT / "data/papers.md").read_text(),
                            json.loads((ROOT / "data/filter-overrides.json").read_text()))
    readme = (ROOT / "README.md").read_text()
    check_readme_statistics(readme, catalog)
    out = ROOT / "_site"
    out.mkdir(exist_ok=True)
    for asset in (ROOT / "site").iterdir():
        if asset.is_file():
            shutil.copy2(asset, out / asset.name)
    (out / "data.json").write_text(json.dumps(catalog, ensure_ascii=False, separators=(",", ":")) + "\n")
    (out / ".nojekyll").touch()
    articles = []
    for p in catalog["papers"]:
        metadata = "".join(f"<dt>{label}</dt><dd>{escape(p[key])}</dd>" for label, key in
                           [("Task", "task"), ("Franka model", "robot"), ("End-effector", "endEffector"),
                            ("Training simulator", "simulator"), ("Learning method", "method"), ("Score", "score")])
        articles.append(f'<article id="{p["id"]}" class="static-review"><h2>{escape(p["heading"])}</h2>'
                        f'<p><a href="./#{p["id"]}">Open in explorer ↗</a></p>'
                        f'<dl class="review-metadata">{metadata}</dl>{p["reviewHtml"]}</article>')
    review_page = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Full reviews · real-frankas-only</title><link rel="stylesheet" href="./styles.css"><link rel="icon" href="./favicon.svg" type="image/svg+xml"></head>
<body><main class="static-reviews"><a href="./">← Back to the paper explorer</a>
<h1>All paper reviews</h1><p>Last updated: {catalog['updated']} (Asia/Seoul). {len(articles)} papers.</p>
{''.join(articles)}</main></body></html>'''
    (out / "reviews.html").write_text(review_page)
    score_key = readme.split("## Score key\n", 1)[1].split("\n## ", 1)[0]
    html_path = out / "index.html"
    html_path.write_text(html_path.read_text().replace("<!-- SCORE_KEY -->", MD.render(score_key)))
    print(f"Built {len(articles)} papers and full reviews into {out}")


if __name__ == "__main__":
    build()
