# real-frankas-only

> Only policies that made it onto a real Franka.

**Last updated: 2026-10-02 (Asia/Seoul)**

[Review criteria and scoring](docs/REVIEW_GUIDELINES.md) · [Search audit and unresolved evidence](docs/SEARCH_AUDIT.md)

**[Open the interactive paper explorer →](https://refracta.github.io/real-frankas-only/)**

Search, sort and filter all **84 papers** by score, simulator, Franka model and year. Open any paper for its full review, DOI, SIM/REAL evidence, end-effector, learning method, video and code links.

## Score key

Scores apply to the selected task and policy setting. Where the evaluations are comparable, **retention = REAL performance / SIM performance × 100**.

| Score | Meaning |
| --- | --- |
| **0** | Physical photos or demonstrations, but no quantitative REAL task results. |
| **1** | Severe transfer gap: REAL performance is clearly below approximately 75% of SIM performance. |
| **2** | REAL retains approximately 75% or more of SIM performance, but less than 90%. |
| **3** | REAL retains at least 90% of SIM performance on a comparable evaluation. |
| **4** | Meets score 3, with documented public task-policy code and well-organized physical photos/videos. |

**Unrated** means REAL results are quantitative, but a comparable SIM result is unavailable. It is not score 0. Scores assess reported evidence, not independent reproduction; a high retention ratio does not necessarily mean high absolute success.

## Score statistics

**As of 2026-10-02 · 84 distinct papers.** Counts reflect the displayed assessments for the reviewed task/settings. Each paper appears once; papers with different scores across settings are grouped separately.

| Score / review status | Papers | Share of 84 papers |
| --- | ---: | ---: |
| **4** | 4 | 4.8% |
| **3** | 5 | 6.0% |
| **2** | 7 | 8.3% |
| **1** | 2 | 2.4% |
| **0** | 4 | 4.8% |
| Multiple scores across settings | 2 | 2.4% |
| Unrated | 60 | 71.4% |
| **Total** | **84** | **100.0%** |

**24 papers (28.6%) have a 0–4 assessment**, including the two multiple-score papers: Action-space study (**3 / 1**) and Context-aware policies (**2 / 1**). Their higher scores determine list order only; the statistics retain them as a separate category. Percentages are rounded; [counting details](docs/SEARCH_AUDIT.md#score-statistics).

## Training simulator statistics

**As of 2026-10-02 · 84 distinct papers.** Each paper is counted once, using the training or training-data-generation simulator for its reviewed physical task. Evaluation-only simulators and rendering tools are excluded. These counts describe this collection, not the entire literature.

| Training simulator / framework | Papers | Share of 84 papers |
| --- | ---: | ---: |
| MuJoCo / MJX | 28 | 33.3% |
| Isaac Gym | 15 | 17.9% |
| PyBullet | 10 | 11.9% |
| Isaac Lab | 8 | 9.5% |
| Isaac Sim — outside the Isaac Lab category | 4 | 4.8% |
| ManiSkill / SAPIEN | 4 | 4.8% |
| Custom task simulator | 2 | 2.4% |
| NVIDIA FleX | 2 | 2.4% |
| AGX Dynamics | 1 | 1.2% |
| CoppeliaSim / RLBench | 1 | 1.2% |
| Drake | 1 | 1.2% |
| FluidEngine / Taichi | 1 | 1.2% |
| Gazebo | 1 | 1.2% |
| Not established for the reviewed task | 6 | 7.1% |
| **Total** | **84** | **100.0%** |

**Isaac family combined: 27 papers (32.1%)** — 15 Gym + 8 Lab + 4 Sim. Isaac Lab entries are not counted again under Isaac Sim. MuJoCo includes robosuite, MuJoCo Playground and other MuJoCo-based task frameworks. Percentages are rounded; [counting rules and ambiguous cases](docs/SEARCH_AUDIT.md#simulator-statistics).
