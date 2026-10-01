# Search audit

Last checked: **2026-10-01 (Asia/Seoul)**

## Scope and outcome

The current collection contains **40 distinct works** with a task policy learned using simulation and deployed on physical Franka hardware. The expansion pass added 20 works to the initial 20-paper review. Each README entry identifies a reviewed task or task family, learning method, training simulator or an explicit unresolved simulator identity, hardware wording, publication record, and a full-paper evidence location.

Twelve works have numerical assessments for the selected settings, including one qualitative-only score of 0. Twenty-eight have quantitative physical results but remain unscored because their SIM counterpart cannot support the specified retention rubric. Context-aware policies and the action-space study each have two scores for different settings; each still counts as one paper. Multiple versions of MuJoCo Playground likewise count once.

This is a curated search result, not an exhaustive literature census. Its simulator counts cannot establish whether MuJoCo or the Isaac family is more common across all Franka sim-to-real research. Learning on mixed simulated/real data, real adaptation, system identification, and zero-shot policy transfer are explicitly distinguished.

## Sources checked

- Full papers, experimental setups, transfer sections, tables/figures, and relevant appendices. Graphical tables and plots used for numerical assessment were inspected visually, including DPPO Fig. 8, Fruit Harvesting Fig. 7, Context-aware policies Table 5, Centralized dual-arm assembly Fig. 6, the action-space study Table I, D²PPO Fig. 10, and TAM Table 1.
- Official RSS, PMLR, ICLR, IEEE/publisher records and Crossref metadata for publication identity. arXiv DOIs are explicitly labeled as preprint DOIs; a missing publisher DOI is not invented.
- Author project pages, their embedded video URLs, official repositories and README instructions, and title/author searches for missing code or videos. Links were checked for availability; repositories were not installed and experiments were not reproduced.
- Source versions reviewed: AutoMate v2; Tactile Sensory v2; VSDR v3; IndustReal v1; RialTo v3; Lang4Sim2Real v2; TRANSIC v3; DPPO v3; FORGE v2; MuJoCo Playground technical report v1; Watch Less, Feel More v1; XMoP v2; Fruit Harvesting v1; PBRL v5; DeGuV v1; X-Sim v5; Re³Sim v4; Context-aware policies v3; MolmoB0T v2; Torque-controlled transfer v1.
- Expansion versions: published full texts for Continuous control, Centralized dual-arm assembly, Latent prediction, Curriculum dual-arm assembly and Active Search; Haptic object insertion v3; Action-space study v2; ResiP v4; ReBot v1; AnyTask v2; D²PPO v1 plus its AAAI publication record; FUNCanon v2; Sim-to-online RL v2; AffordSim v2; VLAJS v2 plus its workshop paper; MATCH v1; World-action transfer v1; Object-centric residual RL v1; MoDex v1; TAM v2. Versions are pinned in the added arXiv evidence links.
- Expansion searches covered visual/state RL, haptics, dual-arm assembly, synthetic-data imitation learning, diffusion policies, VLAs, residual RL and dexterous manipulation. Search terms combined the physical platform with task/method names, sim-to-real, simulator names, code and video. Citation leads were screened for the **physical** arm, not just a Franka simulator asset.
- The added links were checked with HTTP requests. The Machines DOI resolves to an MDPI page that rejected the automated request with HTTP 403; its DOI metadata and linked publisher-hosted PDF were accessible. This access restriction is not treated as an invalid DOI.

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
| Continuous control | Base-policy SIM results cannot serve as the denominator for subsequently adapted deployment policies. The repository links separate SIM and REAL videos. |
| Centralized dual-arm assembly | Fig. 6's REAL Cartesian-impedance bar is approximately 67%, not 75%. Keep graph estimates approximate. |
| Haptic object insertion | Retention concerns the regular plate and includes changed geometry and gripper mechanics. It is a task-level comparison, not a grasping success rate. |
| Latent prediction | Table 3 and §4.3 conflict on initial REAL success. Final adapted success must not be presented as zero-shot performance. Official source is on GitLab. |
| Action-space study | Preserve §IV-A's explicit Isaac Sim wording despite its Isaac Gym-related citation. Scores differ by action space; acknowledge selection of three policies from five trained seeds. |
| Curriculum dual-arm assembly | The physical initial-state distribution is deliberately narrower than SIM. High success in both domains does not establish matched retention. |
| Active Search | Use the paper's explicit FR3 hardware wording; a generic Panda label on an author page does not override it. REAL case-study times are not a SIM success-rate denominator. |
| ResiP | Score the visual student only if its SIM counterpart becomes available. Other MuJoCo experiments in the paper do not describe the physical assembly's simulator. |
| ReBot | Retain real trajectory/background provenance. WidowX/Google Robot SIM results do not measure Panda retention. |
| AnyTask | The official video's legible **FRANKA EMIKA** marking establishes brand, not model. Neither software assets nor secondary FR3 descriptions establish a hardware revision. |
| D²PPO | Use Transport after RL fine-tuning. The AAAI article DOI identifies the paper; an associated video DOI is not its publication DOI. |
| FUNCanon | Main-conference venue is supported by the authors' institutional publication list. Keep the arXiv DOI explicitly labeled while a publisher DOI is unlocated. |
| Sim-to-online RL | Review v2's three-seed hardware setting. Separate online physical fine-tuning from SIM-only transfer and from SIM hyperparameter sweeps. |
| AffordSim | The paper explicitly deploys its SIM-trained baselines on corresponding tasks, allowing a qualified task-level comparison. Table 3's best-method mean is 25%, conflicting with 24% in the abstract; use task rows. |
| VLAJS | This is an ICRA workshop paper. The v1 title differs; do not count it twice or promote it to the main conference. |
| MATCH | Selected-seed hardware performance and a five-seed SIM average are not a matched policy comparison. |
| World-action transfer | The citation names Isaac Gym, but the implementation is unresolved. Do not infer Isaac Lab solely from the upstream AnyTask framework. |
| Object-centric residual RL | Only the residual is shared across domains; the separately trained base VLAs prevent a composite-policy retention claim. |
| MoDex | Prefer paper tables over the differing project table. Stage-conditioned success is not full-sequence success. The Code link is a template placeholder. |
| TAM | Use the paper's same-policy ideal-SIM reference and disclose the added physical torque adapter. Adapter code availability alone does not establish release of the selected visual task policy. |

No reviewed primary source explicitly states a Franka hardware revision of **FR3 2.1**. Generic Franka wording, a Panda-named software package, an asset filename, or publication year is not used to infer a physical model/revision.

## Screened exclusions

These papers are relevant search results, but their inspected physical experiments do not meet this repository's Franka requirement.

| Work | Physical-hardware finding |
| --- | --- |
| [Integrating Model-based Control and Reinforcement Learning for Sim2Real Transfer of Tight Insertion Policies](https://arxiv.org/abs/2505.11858) | SIM uses Panda; physical deployment is **KUKA iiwa 14** (§III-C). |
| [Find the Fruit: Zero-Shot Sim2Real Reinforcement Learning for Occlusion-Aware Plant Manipulation](https://arxiv.org/abs/2505.16547) | The physical manipulator is **MyBuddy**, not Franka (§III, v3). |
| [Reinforcement Learning for the Full Strawberry Harvesting Process](https://arxiv.org/abs/2607.14708) | SIM Panda is transferred to physical **LingXtend** (§V-C). This is distinct from the included CASE 2025 fruit-harvesting paper. |
| [VT-Refine](https://arxiv.org/abs/2510.14930) | The inspected hardware includes dual **Kinova Gen3** arms; a physical Franka experiment was not established (§5). |
| [Zero-shot transfer of a tactile-based continuous force control policy from simulation to robot](https://doi.org/10.1109/IROS58592.2024.10802386) | §V-B explicitly evaluates the grasp-force policy on **TIAGo**, not Franka. |

## Candidates not yet counted in the verified 40

The following lead still needs evidence resolved. Neither 20 nor 40 is claimed to be the literature's ceiling. The initial pending ResiP, MoDex and Continuous control papers have now been reviewed and included.

| Candidate | Current status |
| --- | --- |
| [Learning-Based Robust Control: Unifying Exploration and Distributional Robustness for Reliable Robotics via Free Energy](https://arxiv.org/abs/2603.06831) | Clarify whether the transferred learned dynamics model with a greedy planner establishes a learned task policy under these criteria. Hardware naming and the domain of Table S-1 also need reconciliation. A public [repository](https://github.com/NYUAD-REACH-LAB/Learning-Based-Robust-Control) exists; that alone does not resolve eligibility. |

Simulation-only demonstrations, transfer onto a different manufacturer's physical arm, and task policies learned only on real robots do not satisfy this collection's inclusion criteria. A related software package or attractive demo alone does not make a paper eligible.
