# Review guidelines

Last updated: 2026-10-02 (Asia/Seoul)

A reading list of papers that define a concrete robot task, learn a policy for that task in simulation, and deploy that policy on a physical Franka robot. Each review checks what was actually transferred, how REAL compares with SIM, and which supporting materials are public.

Scores describe the evidence and performance reported in the paper. They do not certify an independent reproduction. This is a growing collection, not a census of simulator usage.

## Inclusion criteria

An entry must establish all three steps:

1. **TASK:** A specific task with an identifiable objective and evaluation metric.
2. **SIM:** A policy learned in simulation for that task, through reinforcement learning, imitation learning, or a combination.
3. **REAL:** Deployment of that simulation-trained policy on physical Franka hardware for the corresponding task.

Record the exact Franka model and revision when stated: for example, **Panda**, **FR3**, or **FR3 2.1**. Do not merge these labels or infer a revision from the publication date or appearance. If a source says only “Franka,” preserve that wording and mark the model/revision **Not reported**. Keep robot hardware revisions separate from firmware and controller software versions. Also record the end-effector and task-relevant sensors.

Identify the physical end-effector separately from the arm: commercial gripper and model, modified/custom fingers or tactile pads, dexterous hand and model, or task-specific tool/attachment. Distinguish a held tool from an attachment replacing the gripper when known. A simulated gripper asset is not evidence of physical hardware. Do not assume a stock Franka gripper merely because the arm is Panda or FR3; mark unresolved type, model or modification status as not reported. Franka Hand is a parallel-jaw gripper, not a dexterous multi-finger hand. For multiple reviewed setups, label which task uses each end-effector.

Separate zero-shot transfer from transfer that uses real-world demonstrations, policy fine-tuning, or human corrections. Report calibration and controller changes when relevant.

Simulation-only benchmarks, manually programmed controllers without a learned task policy, and policies trained only on real data are outside this list. Evaluating one policy in simulation and an unrelated policy on hardware does not establish sim-to-real transfer.

Identify what the learned policy outputs: motor commands, trajectories, grasp/primitive parameters, or executable control programs. Describe any programmed motion planner, controller or recovery mechanism around it. Optimizing a task policy's parameters against simulated task outcomes can establish policy learning; fitting only a dynamics model does not, by itself, establish that a task policy was learned. Controlled execution of policy-derived grasps must be labeled explicitly rather than described as closed-loop hardware policy evaluation.

The review unit is **paper × task × policy/transfer setting**. Split entries when a paper reports materially different tasks or transfer settings. A clearly identified family of task variants may share an entry when the SIM and REAL results cover the same variants. Do not give an entire paper its best task's score.

The initial collection target is **at least 20 distinct eligible papers**, not 20 task rows. This is a minimum, not a stopping rule: continue expanding the collection when requested and eligible evidence is available. Count an arXiv preprint, its conference/journal publication, workshop versions, and multiple tasks from that work once. If the search cannot establish enough eligible papers, report the verified count and the evidence gaps rather than padding the list.

Keep this file and other research instructions under `docs/`. Keep `README.md` compact: the interactive explorer link, score key, explanation of Unrated, and score/simulator statistics. Maintain the paper index and full reviews in `data/papers.md`; the website publishes both. See [website maintenance](WEBSITE.md) for builds and filters. Link to this file for the detailed review procedure. Write repository content in English and record the update/review date. Commit and push completed updates when working under the user's existing request to do so.

Expose reviewed official video and source URLs in the paper index as well as the detailed reviews. Prefer a direct video link when available; otherwise label a project page or physical photos accurately. Distinguish GitHub/GitLab task code from limited examples, simulator utilities, later ports, website-only repositories, release announcements and broken links. Use an em dash when no verified public resource URL was located; preserve the detailed review's coverage and availability qualifications.

Sort the source index and detailed reviews by score **4, 3, 2, 1, 0, then Unrated**. For entries with multiple scores, use the highest displayed score only as the sorting key and preserve every setting's assessment. Keep the existing relative order within each score group. Reordering alone changes the collection update date, not individual paper review dates.

Maintain the README score statistics when adding or changing assessments. Count each distinct paper once using the displayed score for its reviewed setting. Put papers with different scores across settings in a separate multiple-score category; do not use the highest-score sorting key as a paper-wide assessment. Keep Unrated separate from score 0. Use all reviewed papers as the percentage denominator, include multiple-score papers in the scored-paper subtotal, and record the snapshot date.

Maintain the README training-simulator statistics when adding or revising papers. Count each distinct paper once for its reviewed physical task, including simulators that generated its policy-training data. Use mutually exclusive categories: keep Isaac Gym, Isaac Lab and Isaac Sim separate, placing an explicitly identified Lab training setup only under Lab. Exclude evaluation-only simulators, rendering tools and unrelated tasks. Preserve unresolved task-specific simulator identities in a separate category instead of classifying by a framework mention or citation. Divide every count by the full reviewed-paper count, including unresolved entries; any Isaac-family subtotal must not be added to the category total. Record the snapshot date and explain consequential assignments in the search audit.

## Required information

| Field | What to record |
| --- | --- |
| Paper | Full title, year, paper link, and DOI. Prefer the published DOI; identify an arXiv DOI as a preprint DOI. Never invent a missing DOI. |
| Venue | Conference or journal and year; explicitly label a preprint or workshop. |
| Task | The concrete task and the exact variant being evaluated. |
| One-line summary | What the method learns and what the physical robot does. |
| Robot model / revision | Exact source-reported model, such as Panda, FR3, or FR3 2.1. Mark unspecified revisions **Not reported**; keep firmware versions separate. |
| End-effector / sensors | Physical gripper/hand/tool type and model; custom modifications, tactile fingers/pads and held or mounted tools; task-relevant sensors. Label unspecified details rather than infer stock hardware. |
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
- If a paper explicitly compares the same policy/task across different held-out simulated and physical objects, a **task-level comparison** may be recorded with that limitation. Such a ratio includes object-generalization effects and must not be described as paired-asset retention. Different benchmark averages, robot embodiments, teacher/student policies, or success metrics remain unsuitable denominators.
- Treat “approximately 75%” as approximate, not an artificial cliff. Explain borderline judgments and show unrounded inputs; the **90%** requirement for score 3 remains explicit.
- For error, completion time, negative rewards, or incompatible metrics, report the raw values and justify any normalization. Do not automatically use the formula above.
- Preserve trial counts and reported uncertainty. Clearly label values estimated from plots. A high retention ratio does not imply high absolute task success or statistical equivalence.
- A polished video or code release cannot raise a score of 0–2 to 4. Describe code coverage honestly; score 4 does not imply that a complete hardware deployment stack has been reproduced.
- If REAL is quantitative but its SIM counterpart is missing or not comparable, mark the entry **Unrated — comparison unavailable**. This is a review status, not a sixth score, and is different from score 0.
- Inference speed, simulator throughput and model accuracy alone are not quantitative REAL task outcomes. Record those measurements, but use score 0 if physical task performance remains qualitative.
- Check that released code and qualitative evidence cover the selected policy/setting. A repository containing only a release announcement, an unrelated baseline's video, or simulator utilities without the selected task policy does not establish score 4.

## Adding or updating a paper

Use primary sources: the paper and supplement, publisher/proceedings record, and authors' project, video, and code pages. Search for public videos and GitHub releases even when the paper does not link them. “Not located as of YYYY-MM-DD” is preferable to claiming a resource does not exist.

Copy this template into `data/papers.md`, complete the evidence, and add a row to its index. Update the review date and the README date whenever an assessment or link status changes.

```markdown
### Short paper name (year) — task / policy setting

**Full title**

One sentence describing the learned behavior and real-robot deployment.

- DOI / paper / venue:
- Task:
- Franka model / hardware revision (or Not reported):
- End-effector type/model, custom modifications or task tools, sensors, and separately reported firmware/controller version:
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
