# Website maintenance

Last updated: 2026-10-02 (Asia/Seoul)

The [paper explorer](https://refracta.github.io/real-frankas-only/) publishes the paper table and every detailed evidence review. The README contains the link, score key, and collection statistics. It no longer contains the paper index or individual reviews.

## Source of truth

- [`data/papers.md`](../data/papers.md) contains the reviewed index and complete review cards. Edit research results here; do not edit generated JSON or HTML. Preserve official resource labels and limitations.
- [`data/filter-overrides.json`](../data/filter-overrides.json) records the exceptional training-simulator and arm-model assignments that cannot safely be inferred from the displayed wording.
- [`README.md`](../README.md) contains the score key and score/simulator statistics. The build checks both statistics tables against the catalog and uses the same score key on the website.
- [`site/`](../site/) contains the HTML, CSS, JavaScript and icon. There is no runtime framework, external font, analytics service or client-side CDN dependency.

When changing papers, update the index and matching review card together, the collection date in `data/papers.md`, and the README date/statistics. Keep individual last-reviewed dates accurate. The build rejects orphan/duplicate papers, missing DOIs, stale overrides, unexpected table columns, unclassified simulators/models and inconsistent README statistics. Keep research procedures in [review guidelines](REVIEW_GUIDELINES.md) and consequential counting decisions in [the audit](SEARCH_AUDIT.md).

## Search, sorting and filters

Search covers short/full titles, one-line summaries, venues, tasks, simulators, learning methods, arm models, end-effectors and DOI. Whitespace-separated terms are combined with AND; case, accents and superscript digits are normalized. The `/` shortcut focuses search.

Score, training simulator, Franka model and year filters combine with AND. Numeric score filters include a paper if any reviewed setting has that score. The Multiple scores filter shows only papers with several scores. Displayed scores remain qualified by setting. Score sorting uses the highest displayed score only to order papers, preserves source order for ties, and keeps Unrated after numeric scores in both directions. Unrated is distinct from score 0.

Training-simulator filters use the same mutually exclusive groups as the README statistics. Evaluation-only engines, rendering tools and unrelated tasks are excluded. See [simulator counting rules](SEARCH_AUDIT.md#simulator-statistics). Arm filters preserve uncertainty: a Panda gripper does not identify a Panda arm, an FR3 gripper does not identify an unreported arm, and conflicting labels stay separate. Papers using both Panda and FR3 match either filter. FR3 2.1 is a separate model if explicitly reported; no revision is inferred.

The URL retains search, filters, sorting and pagination, so filtered views can be shared. Selecting a paper opens its complete review in a keyboard-accessible dialog. Its hash is a shareable permalink. All full reviews also appear at [`reviews.html`](https://refracta.github.io/real-frankas-only/reviews.html), readable without JavaScript. Mobile uses paper cards with the same data and controls. Resource labels retain warnings such as website-only, placeholder, port and broken-link status; link presence is not a claim of usable task code.

## Build and check locally

Use Python 3.10+ and Node.js (for the JavaScript syntax check):

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-site.txt
.venv/bin/python -m unittest discover -s tests -v
node --check site/app.js
.venv/bin/python scripts/build_site.py
.venv/bin/python -m http.server 8765 --directory _site
```

Open `http://localhost:8765`. `_site/` is generated and ignored by Git. Assets and data use relative paths so the site works under the GitHub project path `/real-frankas-only/`.

For UI changes, verify combined search/filters, mixed scores, both sort directions, empty/reset states, pagination, shared URLs, review links, keyboard Escape/focus, and desktop/mobile layouts. Also check browser console/network failures and the no-JavaScript review page. Metadata tests cover the classification and review-integrity cases; the build compares the published catalog with README statistics.

## Deployment

[`.github/workflows/pages.yml`](../.github/workflows/pages.yml) validates and builds on pull requests. Pushes to `main` or a manual workflow run also publish the generated artifact to GitHub Pages. Repository Pages settings use **GitHub Actions** as the source. GitHub provides the official [custom-workflow deployment instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

The workflow uses commit-pinned GitHub actions. Runtime data is regenerated on every deployment, so a reviewed-paper update cannot leave the website on an old manually maintained copy of the table.
