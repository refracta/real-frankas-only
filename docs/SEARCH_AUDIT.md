# Search audit

Last checked: **2026-10-01 (Asia/Seoul)**

## Scope and outcome

The current pass verified **20 distinct works** with a task policy learned using simulation and deployed on physical Franka hardware. Each README entry identifies a reviewed task or task family, learning method, training simulator, hardware wording, publication record, and a full-paper evidence location.

Seven works have numerical assessments for the selected settings, including one qualitative-only score of 0. Thirteen have quantitative physical results but remain unscored because their SIM counterpart cannot support the specified retention rubric. Context-aware policies has two scores for two experimental settings; it still counts as one paper. Multiple versions of MuJoCo Playground likewise count once.

This is a curated search result, not an exhaustive literature census. Its simulator counts cannot establish whether MuJoCo or the Isaac family is more common across all Franka sim-to-real research. Learning on mixed simulated/real data, real adaptation, system identification, and zero-shot policy transfer are explicitly distinguished.

## Sources checked

- Full papers, experimental setups, transfer sections, tables/figures, and relevant appendices. Graphical tables and plots used for numerical assessment were inspected visually, including DPPO Fig. 8, Fruit Harvesting Fig. 7, and Context-aware policies Table 5.
- Official RSS, PMLR, ICLR, IEEE/publisher records and Crossref metadata for publication identity. arXiv DOIs are explicitly labeled as preprint DOIs; a missing publisher DOI is not invented.
- Author project pages, their embedded video URLs, official repositories and README instructions, and title/author searches for missing code or videos. Links were checked for availability; repositories were not installed and experiments were not reproduced.
- Source versions reviewed: AutoMate v2; Tactile Sensory v2; VSDR v3; IndustReal v1; RialTo v3; Lang4Sim2Real v2; TRANSIC v3; DPPO v3; FORGE v2; MuJoCo Playground technical report v1; Watch Less, Feel More v1; XMoP v2; Fruit Harvesting v1; PBRL v5; DeGuV v1; X-Sim v5; Re³Sim v4; Context-aware policies v3; MolmoB0T v2; Torque-controlled transfer v1.

## Important evidence decisions

| Work | Decision |
| --- | --- |
| AutoMate | Use the same 20 specialist assemblies in SIM and REAL. The 100-assembly SIM average and perception-initialized REAL experiment are different evaluations. |
| DPPO | The hardware assembly experiment uses Isaac Gym/FurnitureBench. The paper's MuJoCo kitchen/robomimic experiments do not change that simulator label. Fig. 8 prints 0.87 SIM and 0.80 REAL for the fine-tuned diffusion policy. |
| TRANSIC | Appendix B.1 and Fig. A.3 say “Franka Emika 3.” Preserve the wording; do not copy Panda from simulated assets or assume FR3 2.1. Four skill success rates are not a full-assembly success rate. |
| RialTo | Fig. 13 explicitly labels the mobile toaster setup **Franka Research 3** and the fixed setup **Franka Emika Panda**. The prose's “arm 2/arm 3” wording alone would be insufficient. |
| FORGE | The project page still says code is coming soon, but the author contributed a [public Isaac Lab port](https://github.com/isaac-sim/IsaacLab/pull/2968). Link that release and distinguish it from the paper's original Isaac Gym training. |
| MuJoCo Playground | One work, with an RSS demonstration publication and a longer technical report. Physical 12/12 picking is constrained to a plane; SIM training returns do not establish success retention. |
| Watch Less, Feel More | Review OpenDrawer+ against the SIM **test** column, 0.96, not the 0.97 training column. Label the 84/96 ratio as task-level because simulated and physical objects differ. CoRL workshop appearances are not additional papers. |
| Fruit Harvesting | The selected five-distractor SIM bar is approximately 63%, while REAL is 50%; avoid false decimal precision. Elsewhere the prose says 95% REAL with zero distractors, whereas the plot appears closer to 93%; that conflicting condition is not the scored setting. Physical tests use artificial fruit in a lab. |
| Re³Sim | The release identifies ICRA 2026. Its 0.924 SIM–REAL correlation is not 92.4% performance retention. |
| XMoP | Physical Franka is FR3. Do not divide the Panda simulation benchmark by the FR3 real benchmark, or combine Franka and Sawyer success. |
| X-Sim | 83.3% is average progress with partial credit, not binary success. Keep the real-rollout-calibrated variant separate from the base policy. |
| Context-aware policies | Use the FP row's mean success rates, not negative reward or the best seed in parentheses. Split the settings with and without center-of-mass variation. |
| MolmoB0T | The Table 6 SIM average mixes tasks; the 120-trial REAL experiment is a different pick-and-place suite. Do not calculate 79.2/64.1 or include RB-Y1 results as Franka evidence. |
| Torque-controlled transfer | Fig. 8 contains quantitative negative-reward traces. This is not score 0, but it does not support a percentage-retention score. Gazebo is an intermediate evaluation simulator, not the training simulator. |
| VSDR | The paper's `/view/vsdr/home` URL returned 404, while [the root project page](https://sites.google.com/view/vsdr) works and embeds a demo and presentation. Across-policy means are not the result of one winning policy. No public task-specific GitHub release was located. |

No reviewed primary source explicitly states a Franka hardware revision of **FR3 2.1**. Generic Franka wording, a Panda-named software package, an asset filename, or publication year is not used to infer a physical model/revision.

## Candidates not counted in the verified 20

These are search leads, not claims that no other eligible papers exist. They require a separate full review before addition.

| Candidate | Current status |
| --- | --- |
| [From Imitation to Refinement — Residual RL for Precise Assembly](https://arxiv.org/abs/2407.16677) | Promising SIM/REAL assembly work; full per-setting assessment remains pending. Its workshop and conference versions would count once. |
| [MoDex: A Diffusion Policy for Sequential Multi-Object Dexterous Grasping](https://arxiv.org/abs/2606.05407) | Promising Panda/Allegro, MuJoCo, diffusion-plus-RL work. Stage-conditioned SIM/REAL protocols need further comparison. The project GitHub button was a placeholder, not a verified source release. |
| [Continuous control actions learning and adaptation for robotic manipulation through reinforcement learning](https://doi.org/10.1007/s10514-022-10034-z) | Promising Panda/MuJoCo work; baseline-versus-adapted policy comparability requires a separate review. |

Simulation-only demonstrations, transfer onto a different manufacturer's physical arm, and task policies learned only on real robots do not satisfy this collection's inclusion criteria. A related software package or attractive demo alone does not make a paper eligible.
