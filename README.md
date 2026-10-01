# real-frankas-only

> Only policies that made it onto a real Franka.

**Last updated: 2026-10-01 (Asia/Seoul)**

A reading list of papers that define a concrete robot task, learn a policy for that task in simulation, and deploy that policy on a physical Franka robot. Each review checks what was actually transferred, how REAL compares with SIM, and which supporting materials are public.

Scores describe the evidence and performance reported in the paper. They do not certify an independent reproduction. This is a growing collection, not a census of simulator usage.

## Inclusion criteria

An entry must establish all three steps:

1. **TASK:** A specific task with an identifiable objective and evaluation metric.
2. **SIM:** A policy learned in simulation for that task, through reinforcement learning, imitation learning, or a combination.
3. **REAL:** Deployment of that simulation-trained policy on physical Franka hardware for the corresponding task.

Record the exact Franka model and revision when stated: for example, **Panda**, **FR3**, or **FR3 2.1**. Do not merge these labels or infer a revision from the publication date or appearance. If a source says only “Franka,” preserve that wording and mark the model/revision **Not reported**. Keep robot hardware revisions separate from firmware and controller software versions. Also record the gripper and task-relevant sensors.

Separate zero-shot transfer from transfer that uses real-world demonstrations, policy fine-tuning, or human corrections. Report calibration and controller changes when relevant.

Simulation-only benchmarks, manually programmed controllers without a learned task policy, and policies trained only on real data are outside this list. Evaluating one policy in simulation and an unrelated policy on hardware does not establish sim-to-real transfer.

The review unit is **paper × task × policy/transfer setting**. Split entries when a paper reports materially different tasks or transfer settings. A clearly identified family of task variants may share an entry when the SIM and REAL results cover the same variants. Do not give an entire paper its best task's score.

## Required information

| Field | What to record |
| --- | --- |
| Paper | Full title, year, paper link, and DOI. Prefer the published DOI; identify an arXiv DOI as a preprint DOI. Never invent a missing DOI. |
| Venue | Conference or journal and year; explicitly label a preprint or workshop. |
| Task | The concrete task and the exact variant being evaluated. |
| One-line summary | What the method learns and what the physical robot does. |
| Robot model / revision | Exact source-reported model, such as Panda, FR3, or FR3 2.1. Mark unspecified revisions **Not reported**; keep firmware versions separate. |
| Gripper / sensors | Gripper and task-relevant sensors or attachments. |
| Simulator | The actual training simulator, plus framework/physics engine and version when reported. Keep Isaac Gym, Isaac Sim, and Isaac Lab distinct. |
| Learning method | RL, imitation learning/behavior cloning, or hybrid; name algorithms such as PPO, SAC, or TD3 and policy models such as Diffusion Policy or ACT when used. Distinguish the policy architecture from its training algorithm and record subsequent RL fine-tuning. |
| Transfer setting | Zero-shot or adapted; describe real data, human interventions, and policy updates. |
| SIM and REAL results | Metric, units, both values, trial counts, uncertainty if reported, and conditions needed for a fair comparison. |
| Score and rationale | A 0–4 score with its calculation or explanation and the paper's section/table/figure/page. |
| Video / qualitative evidence | Link an official video when found, and identify real-robot photos or figures. Label inaccessible or unlocated material explicitly. |
| GitHub | Link public source code when found; identify training, evaluation, and deployment coverage. Distinguish a release from a promise to release. |
| Last reviewed | Date on which the paper and supporting links were checked. |

## Five-level score: 0–4

| Score | Meaning |
| --- | --- |
| **0 — Visual evidence only** | The paper shows a physical robot in photos or demonstrations but provides no quantitative REAL task results. |
| **1 — Severe transfer gap** | Quantitative REAL performance is dramatically worse than SIM, clearly below approximately three quarters of the SIM performance. |
| **2 — Partial retention** | REAL retains approximately **75%** of SIM performance, or better but below 90%. |
| **3 — Strong retention** | REAL retains **at least 90%** of SIM performance on a comparable evaluation. |
| **4 — Strong retention with organized materials** | Meets score 3, and public task-specific code with useful documentation and qualitative evidence such as photos/videos is well organized and linked. |

For a comparable, nonnegative, higher-is-better metric with a positive SIM baseline:

```text
retention (%) = REAL performance / SIM performance × 100
```

For example, 72% REAL success against 80% SIM success means **90% retention**, a decrease of **8 percentage points**. Retention may exceed 100%; always show the raw performance too.

- **Read the paper before assigning a score.** Check the experimental setup, transfer procedure, results, and relevant appendices. An abstract or a successful demo clip is insufficient for a quantitative score.
- Match the task, policy, metric, success definition, and evaluation conditions. Identify any remaining mismatch. Do not divide results from different task sets or use real-world fine-tuning gains to claim zero-shot retention.
- Treat “approximately 75%” as approximate, not an artificial cliff. Explain borderline judgments and show unrounded inputs; the **90%** requirement for score 3 remains explicit.
- For error, completion time, negative rewards, or incompatible metrics, report the raw values and justify any normalization. Do not automatically use the formula above.
- Preserve trial counts and reported uncertainty. Clearly label values estimated from plots. A high retention ratio does not imply high absolute task success or statistical equivalence.
- A polished video or code release cannot raise a score of 0–2 to 4. Describe code coverage honestly; score 4 does not imply that a complete hardware deployment stack has been reproduced.
- If REAL is quantitative but its SIM counterpart is missing or not comparable, mark the entry **Unrated — comparison unavailable**. This is a review status, not a sixth score, and is different from score 0.

## Reviewed papers

Initial selection: **2 papers**, reviewed from primary sources. These are examples of the review format, not a comprehensive survey.

| Paper | Venue | Franka model | Task | Training simulator | Learning method | Score |
| --- | --- | --- | --- | --- | --- | --- |
| [AutoMate](#automate-2024) | RSS 2024 | Panda | Plug insertion; 20 assembly geometries, specialist policies | Isaac Gym / PhysX | RL: PPO with an imitation reward | **4** |
| [Tactile Sensory](#tactile-sensory-2021) | IROS 2021 | Panda | Door opening with tactile feedback | MuJoCo | RL: TD3 | **2** |

Neither paper specifies a hardware revision beyond Panda; the revision field is **Not reported** for both.

### AutoMate (2024)

**AutoMate: Specialist and Generalist Assembly Policies over Diverse Geometries**

Learns insertion policies using reversed disassembly demonstrations and reinforcement learning, then transfers them to physical parts.

- **DOI / venue:** [10.15607/RSS.2024.XX.064](https://doi.org/10.15607/RSS.2024.XX.064) · [Robotics: Science and Systems 2024](https://www.roboticsproceedings.org/rss20/p064.html).
- **Setting:** Franka Panda with parallel-jaw gripper; specialist plug insertion, zero-shot. PPO with a trajectory-based imitation reward; released training code uses Isaac Gym.
- **SIM → REAL:** **90.65% ± 13.07% → 86.50% ± 16.52%** reported success statistics for the same 20 assemblies. SIM: 5,000 trials/assembly; REAL: 10/assembly, **200 total**. Retention of mean success: **95.42%**.
- **Evidence:** [Paper §VII-B, Fig. 9](https://arxiv.org/html/2407.08028v2#S7.SS2). This evaluates insertion from manually grasped parts, not the perception-initialized workflow. Do not substitute the SIM average over all 100 assemblies.
- **Score: 4.** Retention exceeds 90%, with documented training code and organized real-robot demonstrations. Ten trials per assembly limit precision.
- **Video / project:** [Official video](https://vimeo.com/911439543/8fa5f8134b) · [Project and demonstrations](https://bingjietang718.github.io/automate/).
- **GitHub:** [AutoMate training code and instructions](https://github.com/isaac-sim/IsaacGymEnvs/blob/automate/docs/automate.md). The documented release covers specialist simulation training; complete hardware deployment coverage is not established here.
- **Last reviewed:** 2026-10-01.

### Tactile Sensory (2021)

**Sim-to-Real Transfer for Robotic Manipulation with Tactile Sensory**

Learns a tactile-conditioned door-opening policy in simulation and transfers it directly to a physical Panda.

- **DOI / venue:** [10.1109/IROS51168.2021.9636259](https://doi.org/10.1109/IROS51168.2021.9636259) · IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021.
- **Setting:** Franka Emika Panda with custom tactile fingertip arrays; MuJoCo, TD3, zero-shot transfer with sensor calibration.
- **SIM → REAL:** Mean door-opening angle **41.8° ± 15.7° → 31.2° ± 14.0°**, with **30 trials per domain**: three trained policies, ten trials each. Retention: **74.64%**.
- **Evidence:** [Paper §V-B–C and Table III, PDF pp. 6–7](https://arxiv.org/pdf/2103.00410#page=6).
- **Score: 2.** 74.64% is approximately 75% retention. This compares opening angles, not success rates, and does not demonstrate reliable full opening.
- **Video / photos:** No official public video located in the checked paper, repository, and title/author searches. [Real-robot photos, Fig. 6](https://arxiv.org/pdf/2103.00410#page=7).
- **GitHub:** [Official source](https://github.com/quantumiracle/Robotic_Door_Opening_with_Tactile_Simulation), explicitly released for the simulation component only.
- **Last reviewed:** 2026-10-01.

## Adding or updating a paper

Use primary sources: the paper and supplement, publisher/proceedings record, and authors' project, video, and code pages. Search for public videos and GitHub releases even when the paper does not link them. “Not located as of YYYY-MM-DD” is preferable to claiming a resource does not exist.

Copy this template, complete the evidence, and add a row to the index. Update the review date and the README date whenever an assessment or link status changes.

```markdown
### Short paper name (year) — task / policy setting

**Full title**

One sentence describing the learned behavior and real-robot deployment.

- DOI / paper / venue:
- Task:
- Franka model / hardware revision (or Not reported):
- Gripper, sensors, and separately reported firmware/controller version:
- Training simulator and framework/version:
- Learning method, algorithm, and policy architecture:
- Transfer setting and real-world adaptation:
- SIM metric, value, uncertainty, trials, and conditions:
- REAL metric, value, uncertainty, trials, and conditions:
- Retention calculation / comparability:
- Score (0–4) or Unrated status, with rationale:
- Evidence location (section/table/figure/page):
- Video / real-robot photos:
- GitHub and release coverage:
- Limitations relevant to the comparison:
- Last reviewed: YYYY-MM-DD
```
