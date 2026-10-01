# real-frankas-only

> Only policies that made it onto a real Franka.

**Last updated: 2026-10-01 (Asia/Seoul)**

[Review criteria and scoring](docs/REVIEW_GUIDELINES.md) · [Search audit and unresolved evidence](docs/SEARCH_AUDIT.md)

## Reviewed papers

**20 distinct papers with physical Franka deployment**, checked against their full papers and official supporting materials. Seven papers have a numerical score for the selected setting; thirteen remain **Unrated** because a defensible SIM-to-REAL retention comparison is unavailable. Different tasks, preprints, and published versions of the same work are not counted as additional papers.

| Paper | Venue | Franka model | Task | Training simulator | Learning method | Score |
| --- | --- | --- | --- | --- | --- | --- |
| [AutoMate](#automate-2024) | RSS 2024 | Panda | Plug insertion; 20 assembly geometries, specialist policies | Isaac Gym / PhysX | RL: PPO with an imitation reward | **4** |
| [Tactile Sensory](#tactile-sensory-2021) | IROS 2021 | Panda | Door opening with tactile feedback | MuJoCo | RL: TD3 | **2** |
| [VSDR](#vsdr-2022) | ICRA 2022 | Panda | Visual cube grasping | robosuite / MuJoCo | RL: SAC; policy selection | Unrated |
| [IndustReal](#industreal-2023) | RSS 2023 | Panda | Peg insertion | Isaac Gym / PhysX | RL: PPO | Unrated |
| [RialTo](#rialto-2024) | RSS 2024 | Panda; FR3 | Shelf placement; toaster opening | Isaac Sim | BC + PPO + policy distillation | Unrated |
| [Lang4Sim2Real](#lang4sim2real-2024) | RSS 2024 | Panda | Stacking, pick-and-place, wire wrapping | robosuite / MuJoCo | Language-aligned BC | Unrated |
| [TRANSIC](#transic-2024) | CoRL 2024 | “Franka Emika 3” in paper | Furniture assembly skills | Isaac Gym Preview 4 / PhysX | PPO → BC; human-correction residual | Unrated |
| [DPPO](#dppo-2025) | ICLR 2025 | Panda | One-leg furniture assembly | FurnitureBench / Isaac Gym | Diffusion Policy BC + PPO fine-tuning | **4** |
| [FORGE](#forge-2025) | RA-L 2025 | Panda | Peg insertion, gear meshing, nut threading | Factory / Isaac Gym | Recurrent PPO | Unrated |
| [MuJoCo Playground](#mujoco-playground-2025) | RSS 2025 demo; technical report | Panda | Block reorientation; visual cube picking | MuJoCo / MJX; Madrona for pixels | RL: PPO | Unrated |
| [Watch Less, Feel More](#watch-less-feel-more-2025) | ICRA 2025 | Franka Emika; model not reported | OpenDrawer+ | Isaac Gym | PPO + history-based adaptation | **2**, task-level comparison |
| [XMoP](#xmop-2025) | ICRA 2025 | FR3 | Collision-free reaching | PyBullet; synthetic planning data | IL: diffusion Transformer + learned collision model | Unrated |
| [Fruit Harvesting](#fruit-harvesting-2025) | CASE 2025 | Panda | Strawberry-stem grasping with five distractors | FruitGym / MuJoCo | RL: DRM | **2**, plot estimate |
| [PBRL](#pbrl-2025) | CASE 2025 | Panda | Nut picking | Isaac Gym | Population-based PPO | Unrated |
| [DeGuV](#deguv-2025) | arXiv preprint, 2025 | Franka Emika; model not reported | Cube lifting | RL-ViGen / robosuite / MuJoCo | Visual RL: DrQv2-based DeGuV | **0** |
| [X-Sim](#x-sim-2025) | CoRL 2025 | Franka; model not reported | Letter arrangement | ManiSkill / SAPIEN + 3DGS | PPO → Diffusion Policy BC | Unrated |
| [Re³Sim](#re3sim-2026) | ICRA 2026 | FR3 | Bottle placement, cube stacking, vegetable placement | Isaac Sim + 3DGS | IL: ACT with DINOv2 | Unrated |
| [Context-aware policies](#context-aware-policies-2026) | Robotics and Autonomous Systems, 2026 | Panda | Box pushing | AGX Dynamics | RL: SAC + LSTM context estimator | **2 / 1**, by setting |
| [MolmoB0T](#molmob0t-2026) | arXiv preprint, 2026 | FR3 | Language-conditioned pick-and-place | MolmoSpaces / MuJoCo | IL: VLM + flow-matching action head | Unrated |
| [Torque-controlled transfer](#torque-controlled-transfer-2026) | AIM 2026 | Panda | Target reaching with joint torques | MuJoCo; Gazebo for transfer testing | RL: TQC + dynamics identification | Unrated |

No reviewed source explicitly identifies **FR3 2.1**. Hardware revisions are **not reported** unless stated below. “Franka Emika 3” is preserved as the TRANSIC paper's wording, without silently relabeling it Panda or a particular FR3 revision.

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

### VSDR (2022)

**Validate on Sim, Detect on Real — Model Selection for Domain Randomization**

Ranks simulation-trained visual grasping policies using simulation validation and real-image distribution checks, then evaluates them on hardware.

- **DOI / venue:** [10.1109/ICRA46639.2022.9811621](https://doi.org/10.1109/ICRA46639.2022.9811621) · ICRA 2022.
- **Robot / learning:** Panda, parallel-jaw gripper, RealSense D415; robosuite/MuJoCo, SAC. Policies are trained in SIM; real observations inform selection, without task-policy fine-tuning.
- **SIM / REAL:** 60 policies from 20 randomization configurations × three seeds. SIM validation uses 2,000 episodes/policy. REAL uses 49 grasp attempts/policy in each of two evaluation cycles: **5,880 attempts**. Across-policy mean REAL success is **32.0% / 30.1%** in the two cycles; individual policies range from 0% to 92%.
- **Score: Unrated.** These are population statistics, not the performance of a single selected policy. The reported SIM validation/ranking results do not provide a matching denominator for those REAL averages.
- **Evidence:** [§§5.1–5.3, Table 1, PDF pp. 6–8](https://arxiv.org/pdf/2111.00765v3#page=6).
- **Video / GitHub:** [Official demo](https://drive.google.com/file/d/18FUFpN58xPhxMUdDp5w50OZR73Jh3LGb/view) · [Working project page](https://sites.google.com/view/vsdr). Public task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### IndustReal (2023)

**IndustReal: Transferring Contact-Rich Assembly Tasks from Simulation to Reality**

Learns contact-rich insertion in simulation and uses a policy-level action integrator to deploy it on physical assembly parts.

- **DOI / venue:** [10.15607/RSS.2023.XIX.039](https://doi.org/10.15607/RSS.2023.XIX.039) · RSS 2023.
- **Robot / learning:** Panda with wrist-mounted RealSense; Isaac Gym/PhysX, PPO with simulation-aware updates, SDF rewards, and a curriculum. Zero-shot policy transfer with PLAI; the perception detector uses real images.
- **SIM / REAL:** Selected task: standalone peg insertion. SIM reports **88.60% ± 2.41%** success under its moderate-randomization setting; REAL reports **46/60 = 76.7%** full insertions across six peg types. Partial engagement is a different metric.
- **Score: Unrated.** SIM uses ±1 mm observation noise in the cited setting; REAL uses ±2 mm and its own six-part/initialization protocol. The displayed percentages are not a controlled retention pair.
- **Evidence:** [§IV-H, §VI-D, Tables I/III/X/XII](https://arxiv.org/pdf/2305.17110#page=8).
- **Video:** [Official short video](https://vimeo.com/807609001/1b59e1b166) · [Project and extended demonstrations](https://sites.google.com/usc.edu/industreal).
- **GitHub:** [Simulation training](https://github.com/isaac-sim/IsaacGymEnvs/blob/main/docs/industreal.md) · [IndustRealLib deployment](https://github.com/NVLabs/industreallib) · [Printable kit](https://github.com/NVlabs/industrealkit).
- **Last reviewed:** 2026-10-01.

### RialTo (2024)

**Reconciling Reality through Simulation: A Real-to-Sim-to-Real Approach for Robust Manipulation**

Builds digital twins, improves demonstrated behaviors with simulated RL, and distills them into physical-robot visual policies.

- **DOI / venue:** [10.15607/RSS.2024.XX.015](https://doi.org/10.15607/RSS.2024.XX.015) · RSS 2024.
- **Robot / learning:** **Panda** for shelf/drawer/cabinet tasks; **FR3** for the kitchen toaster, explicitly labeled in Fig. 13. Parallel-jaw grippers and depth cameras; Isaac Sim, BC + PPO + point-cloud policy distillation. Real demonstrations participate in training.
- **SIM / REAL:** For book-on-shelf, REAL is **90% ± 9%** with pose randomization, **70% ± 14%** with distractors, and **60% ± 16%** with disturbances. At least ten rollouts/condition; uncertainty is bootstrapped. Toaster REAL success is 90% in each displayed condition.
- **Score: Unrated.** Table III's SIM numbers evaluate state-based RL teachers; the REAL results evaluate distilled visual policies with co-training. They are not interchangeable denominators.
- **Evidence:** [§IV, Fig. 5, Tables I/III; hardware §X, Fig. 13](https://arxiv.org/pdf/2403.03949v3#page=8).
- **Video / GitHub:** [Official videos](https://real-to-sim-to-real.github.io/RialTo/) · [Policy training](https://github.com/real-to-sim-to-real/RialToPolicyLearning) · [Scene-building GUI](https://github.com/real-to-sim-to-real/RialToGUI).
- **Last reviewed:** 2026-10-01.

### Lang4Sim2Real (2024)

**Natural Language Can Help Bridge the Sim2Real Gap**

Uses language to align simulated and real visual representations for manipulation learned from demonstrations.

- **DOI / venue:** [10.15607/RSS.2024.XX.126](https://doi.org/10.15607/RSS.2024.XX.126) · RSS 2024.
- **Robot / learning:** Panda with parallel-jaw gripper and image observations; robosuite/MuJoCo; language-aligned visual encoder plus Gaussian BC policy. **Mixed SIM+REAL training**, with 25–100 real demonstrations/task; not zero-shot.
- **SIM / REAL:** With 100 real demonstrations, the language-regression variant obtains REAL success of **80% stacking**, **90% multi-step pick-and-place**, and **45% wire wrapping**. Each result uses 20 trials, ten for each of two seeds.
- **Score: Unrated.** Table II evaluates a separate SIM-to-SIM experiment with different target domains/tasks. Dividing Table I REAL results by Table II would conflate experiments.
- **Evidence:** [§§IV–VI, Tables I–II, PDF pp. 5–8](https://arxiv.org/pdf/2405.10020v2#page=7).
- **Video / GitHub:** [Official presentation](https://youtu.be/UHi91NWQf08) · [Task videos](https://robin-lab.cs.utexas.edu/lang4sim2real/) · [Training, environments, and data instructions](https://github.com/UT-Austin-RobIn/lang4sim2real).
- **Last reviewed:** 2026-10-01.

### TRANSIC (2024)

**TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction**

Combines a simulation-trained assembly policy with a residual policy learned from human corrections on the real robot.

- **DOI / venue:** [10.48550/arXiv.2405.10315](https://doi.org/10.48550/arXiv.2405.10315) **(preprint DOI)** · [CoRL 2024; proceedings published in 2025](https://proceedings.mlr.press/v270/jiang25a.html).
- **Robot / learning:** Paper specifies **“Franka Emika 3”**, with five RealSense cameras. Isaac Gym Preview 4/PhysX; PPO teacher → point-cloud BC student with GMM action head → gated residual learned from real corrections. Adapted transfer.
- **SIM / REAL:** REAL success is **100% stabilize**, **95% reach-and-grasp**, **45% insert**, and **85% screw**, with **20 trials/task**. These are individual skills, not an 81.25% full-table assembly success rate.
- **Score: Unrated.** No matching SIM evaluation of the final, human-adapted policy is established for these four REAL results.
- **Evidence:** [Table A.XI, §C.2; hardware §B.1, Fig. A.3](https://arxiv.org/pdf/2405.10315v3#page=31).
- **Video / GitHub:** [Real assembly demonstrations](https://transic-robot.github.io/) · [Algorithm and deployment templates](https://github.com/transic-robot/transic) · [Simulation environments](https://github.com/transic-robot/transic-envs). Deployment templates require the user's observation/controller integration.
- **Last reviewed:** 2026-10-01.

### DPPO (2025)

**Diffusion Policy Policy Optimization**

Fine-tunes a demonstration-pretrained diffusion policy with PPO in simulation and transfers one-leg furniture assembly zero-shot.

- **DOI / venue:** [10.48550/arXiv.2409.00588](https://doi.org/10.48550/arXiv.2409.00588) **(preprint DOI)** · [ICLR 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c0749c39aaff9e9e4c91f7118bf21b1e-Abstract-Conference.html).
- **Robot / learning:** Panda, parallel-jaw gripper, four cameras with AprilTag part tracking. FurnitureBench/Isaac Gym for the deployed task; Diffusion Policy BC pretraining + PPO denoising-chain fine-tuning. No real-data co-training/fine-tuning.
- **SIM → REAL:** The fine-tuned diffusion policy achieves **87% → 80% (16/20 REAL trials)** in Fig. 8. SIM evaluation uses 1,000 episodes. Retention: **91.95%**.
- **Score: 4.** At least 90% retention, with documented task-specific training code and organized physical-robot videos. The paper's MuJoCo benchmarks are separate from this hardware experiment.
- **Evidence:** [§5.4, Fig. 8; Appendix E.8](https://arxiv.org/pdf/2409.00588v3#page=12). The Gaussian baseline's **88% SIM → 0% REAL** is reported separately and is not DPPO's result.
- **Video / GitHub:** [Physical-robot comparison](https://diffusion-ppo.github.io/videos/dppo-real-comparison.mp4) · [Project](https://diffusion-ppo.github.io/) · [Training and evaluation code](https://github.com/irom-lab/dppo). Complete hardware-stack reproduction was not verified.
- **Last reviewed:** 2026-10-01.

### FORGE (2025)

**FORGE: Force-Guided Exploration for Robust Contact-Rich Manipulation under Uncertainty**

Learns force-aware assembly policies that adjust contact behavior under pose uncertainty.

- **DOI / venue:** [10.1109/LRA.2025.3551637](https://doi.org/10.1109/LRA.2025.3551637) · IEEE Robotics and Automation Letters, 2025.
- **Robot / learning:** Panda with joint-torque-derived force feedback; **Factory in Isaac Gym**; recurrent PPO with asymmetric actor–critic, force penalties, and dynamics randomization. Zero-shot policy transfer with calibrated part poses.
- **REAL:** Table I reports **84% ± 5% peg insertion**, **98% ± 2% gear meshing**, and **69% ± 7% nut threading**; uncertainty is standard error. **45 trials per method/task**, across three policies, five locations, and three noise levels.
- **Score: Unrated.** The cited REAL table has no matching SIM aggregate for that exact protocol. Appendix SIM geometry-generalization results do not establish the denominator.
- **Evidence:** [§§IV–V, Table I; Appendix G](https://arxiv.org/pdf/2408.04587v2#page=5).
- **Video / GitHub:** [Official video](https://youtu.be/5WveyMyHX48) · [Project](https://noseworm.github.io/forge/) · [Author-contributed Isaac Lab release](https://github.com/isaac-sim/IsaacLab/pull/2968) · [FORGE source](https://github.com/isaac-sim/IsaacLab/tree/main/source/isaaclab_tasks/isaaclab_tasks/direct/forge). This is a **later Isaac Lab port**; the paper trained in Isaac Gym.
- **Last reviewed:** 2026-10-01.

### MuJoCo Playground (2025)

**MuJoCo Playground / Demonstrating MuJoCo Playground**

Demonstrates simulation-trained torque and visual policies on a physical Panda using the MuJoCo learning stack.

- **DOI / venue:** [10.15607/RSS.2025.XXI.020](https://doi.org/10.15607/RSS.2025.XXI.020) · [RSS 2025 demonstration paper](https://www.roboticsproceedings.org/rss21/p020.html); [technical-report DOI](https://doi.org/10.48550/arXiv.2502.08844). Counted as one work.
- **Robot / learning:** Panda; Robotiq gripper for block reorientation, RealSense D435 for visual picking. MuJoCo/MJX, PPO; Madrona batch rendering for visual training. Zero-shot transfer.
- **REAL:** Block reorientation succeeds in **85.7% ± 12.2%** of **35 trials** (reported 95% confidence interval). Pixel-based cube picking succeeds in **12/12 trials**; its action space is restricted to a Y–Z plane plus gripper control.
- **Score: Unrated.** The report's SIM reward/training curves do not supply matching success-rate denominators for these physical tests. Twelve successful trials alone do not establish ≥90% retention.
- **Evidence:** [§IV-C, Table II; Appendices C.5–C.6](https://arxiv.org/pdf/2502.08844v1#page=6).
- **Video / GitHub:** [Reorientation trials](https://playground.mujoco.org/assets/nonprehensile_trials.mp4) · [Visual picking](https://playground.mujoco.org/assets/vision_pick.mp4) · [Official source](https://github.com/google-deepmind/mujoco_playground), including environments/training; hardware release coverage varies by task.
- **Last reviewed:** 2026-10-01.

### Watch Less, Feel More (2025)

**Watch Less, Feel More: Sim-to-Real RL for Generalizable Articulated Object Manipulation via Motion Adaptation and Impedance Control**

Learns to grasp and open articulated objects using observation history and variable impedance.

- **DOI / venue:** [10.1109/ICRA55743.2025.11128365](https://doi.org/10.1109/ICRA55743.2025.11128365) · ICRA 2025; earlier CoRL 2024 workshop versions are not additional entries.
- **Robot / learning:** Source says **Franka Emika**, without an exact model; wrist RealSense D415. Isaac Gym, PPO with privileged-policy distillation/history adaptation and variable impedance; zero-shot.
- **SIM → REAL:** Selected task **OpenDrawer+**, requiring at least 80% joint travel while grasping the handle: **96% SIM test → 84% REAL (42/50)**. Retention: **87.50%**. The 97% SIM training-set result is not the test baseline.
- **Score: 2, task-level comparison.** Table III compares the same method/task, but the SIM test assets and unseen physical household objects are different. This ratio combines transfer and object-generalization effects; it is not a paired-asset estimate. SIM trial count is not specified alongside the table.
- **Evidence:** [§V, Tables II–III](https://arxiv.org/pdf/2502.14457#page=6).
- **Video / GitHub:** [Official real-robot rollouts](https://watch-less-feel-more.github.io/). Public training/deployment GitHub source not located.
- **Last reviewed:** 2026-10-01.

### XMoP (2025)

**XMoP: Whole-Body Control Policy for Zero-shot Cross-Embodiment Neural Motion Planning**

Learns a motion policy from synthetic planning demonstrations and executes collision-free reaching on unseen physical manipulators.

- **DOI / venue:** [10.1109/ICRA55743.2025.11127979](https://doi.org/10.1109/ICRA55743.2025.11127979) · ICRA 2025.
- **Robot / learning:** **FR3** for the Franka results; a calibrated depth camera supplies obstacle point clouds. PyBullet-based synthetic planning/collision data; diffusion-Transformer imitation learning with a learned collision model and receding-horizon selection. Zero-shot.
- **SIM / REAL:** SIM Panda benchmark success is **71.8%**. REAL FR3 success is **7/10 unstructured-obstacle**, **8/10 wall-hopping**, and **7/10 bin-to-bin** reaching trials. Sawyer results are excluded here.
- **Score: Unrated.** SIM Panda and REAL FR3 use different embodiments and planning benchmarks. Their similar percentages are not a valid matched retention estimate.
- **Evidence:** [§IV, Tables I–II, Fig. 5; data-generation appendix](https://arxiv.org/pdf/2409.15585v2#page=5).
- **Video / GitHub:** [Real rollouts, including failures](https://prabinrath.github.io/xmop/) · [Policy/data-generation code](https://github.com/prabinrath/xmop) · [ROS hardware deployment](https://github.com/prabinrath/xmop_ros).
- **Last reviewed:** 2026-10-01.

### Fruit Harvesting (2025)

**Zero-Shot Sim-to-Real Reinforcement Learning for Fruit Harvesting**

Trains visual RL to reach through distractor fruit and grasp a target strawberry stem on a physical Panda.

- **DOI / venue:** [10.1109/CASE58245.2025.11164009](https://doi.org/10.1109/CASE58245.2025.11164009) · CASE 2025.
- **Robot / learning:** Panda, parallel-jaw gripper, two wrist RealSense D435 cameras. FruitGym/MuJoCo; **DRM (Dormant Ratio Minimization)** visual RL with domain randomization. Zero-shot.
- **SIM → REAL:** Selected setting: **five green distractors plus one red target**. Fig. 7 shows **approximately 63% SIM → 50% REAL**, **30 trials/domain**; retention is approximately **79%**. SIM is read from the bar chart, not an exact tabulated value.
- **Score: 2.** Approximately three quarters of SIM success is retained in this cluttered setting. Only one of three DRM training seeds learned successful grasping; this is the transferred policy's result.
- **Evidence:** [§§V–VII, Figs. 3/7](https://arxiv.org/pdf/2505.08458#page=5). REAL means a lab setup with **plastic strawberries and wire stems**; outdoor fruit harvesting was future work.
- **Video / GitHub:** [Physical-sequence photos, Fig. 3](https://arxiv.org/pdf/2505.08458#page=5); official public deployment video not located. [FruitGym source](https://github.com/emlynw/fruit-gym) releases the simulation environments, not a verified complete hardware stack.
- **Last reviewed:** 2026-10-01.

### PBRL (2025)

**Benchmarking Population-Based Reinforcement Learning across Robotic Tasks with GPU-Accelerated Simulation**

Optimizes a population of RL policies in simulation and deploys selected agents for physical nut picking.

- **DOI / venue:** [10.1109/CASE58245.2025.11163870](https://doi.org/10.1109/CASE58245.2025.11163870) · CASE 2025.
- **Robot / learning:** Panda with wrist RealSense D435; Isaac Gym. The deployed method is **PBRL-PPO**, although the paper also studies SAC/DDPG. Zero-shot policy transfer with PLAI; the detector is fine-tuned on real images.
- **REAL:** Best agent from an eight-agent population: **27/30 = 90%**; worst agent: **21/30 = 70%**; best conventional PPO baseline: **19/30 = 63.33%**.
- **Score: Unrated.** Fig. 5 contains SIM learning curves for population configurations, while Table V evaluates individually selected agents on hardware. An exact matched SIM result for the deployed best agent is not separately tabulated; 90% REAL success alone does not justify score 3/4.
- **Evidence:** [§III-D, Fig. 5, Tables IV–V, PDF pp. 6–7](https://arxiv.org/pdf/2404.03336v5#page=7).
- **Video / GitHub:** [Official video](https://youtu.be/t914sdfoYCQ) · [Project](https://sites.google.com/view/pbrl) · [PBRL training source](https://github.com/Asad-Shahid/PBRL).
- **Last reviewed:** 2026-10-01.

### DeGuV (2025)

**DeGuV: Depth-Guided Visual Reinforcement Learning for Generalization and Interpretability in Manipulation**

Uses depth-guided visual masking to transfer a learned cube-lifting policy to a physical Franka.

- **DOI / venue:** [10.48550/arXiv.2509.04970](https://doi.org/10.48550/arXiv.2509.04970) **(preprint DOI)** · arXiv preprint, 2025; published venue not verified.
- **Robot / learning:** Source says **Franka Emika**, exact model not reported; RealSense D435i. RL-ViGen/robosuite/MuJoCo; DrQv2-based visual RL with depth-guided masks. Zero-shot deployment through franka_ros2 and panda-py; software names do not establish the hardware model.
- **SIM / REAL:** SIM reports task returns and visual-generalization retention. The REAL Lift section provides photos, masks, and a demonstration video, but no trial count or quantitative physical task outcome.
- **Score: 0.** Hardware deployment is shown, but the SIM tables are not REAL measurements.
- **Evidence:** [§VI, Fig. 6; compare SIM Tables I–II](https://arxiv.org/pdf/2509.04970#page=6).
- **Video / GitHub:** [Official deployment demo](https://youtu.be/-Gt5i6Wi5Fs) · [Training/evaluation source and Lift checkpoint instructions](https://github.com/tiencapham/DeGuV). A documented complete ROS deployment release was not established.
- **Last reviewed:** 2026-10-01.

### X-Sim (2025)

**X-Sim: Cross-Embodiment Learning via Real-to-Sim-to-Real**

Converts human videos into simulated task rewards, learns robot behavior with PPO, and distills a visual diffusion policy for real deployment.

- **DOI / venue:** [10.48550/arXiv.2505.07096](https://doi.org/10.48550/arXiv.2505.07096) **(preprint DOI)** · [CoRL 2025, PMLR 305](https://proceedings.mlr.press/v305/dan25a.html).
- **Robot / learning:** Source specifies a **7-DoF Franka**, exact model not reported; ZED 2 RGB-D recording. ManiSkill/SAPIEN with photorealistic reconstruction; PPO teacher → image-conditioned Diffusion Policy BC. A separate calibrated variant uses ten autonomous REAL rollouts/task for visual alignment.
- **REAL:** Selected task: **Letter Arrange**. X-Sim reaches **83.3% average task progress** over ten trials, compared with 43.3% for the state-based comparison. This awards partial credit for approach, rotation, and placement; it is **not 83.3% full-task success**.
- **Score: Unrated.** No matching SIM task-progress denominator is reported for this deployed result. The calibrated variant is kept separate from the base result.
- **Evidence:** [§4, Fig. 6, PDF pp. 6–8](https://arxiv.org/pdf/2505.07096v5#page=7).
- **Video / GitHub:** [Real robot rollouts](https://portal-cornell.github.io/X-Sim/) · [Reconstruction, policy learning, and calibration source](https://github.com/portal-cornell/X-Sim).
- **Last reviewed:** 2026-10-01.

### Re3Sim (2026)

**Re³Sim: Generating High-Fidelity Simulation Data via 3D-Photorealistic Real-to-Sim for Robotic Manipulation**

Combines reconstructed scenes and simulated demonstrations to train visual manipulation policies for a physical FR3.

- **DOI / venue:** [10.48550/arXiv.2502.08645](https://doi.org/10.48550/arXiv.2502.08645) **(preprint DOI; publisher DOI not located)** · ICRA 2026, as identified by the [official release](https://github.com/InternRobotics/Re3Sim).
- **Robot / learning:** **FR3**, parallel gripper, wrist and external RealSense D435i cameras. Isaac Sim/PhysX with 3D Gaussian Splatting; ACT imitation learning with DINOv2. Zero-shot policy deployment after real-scene reconstruction; the release also uses Isaac Lab tooling.
- **REAL:** With 100 simulated demonstrations/task: **75% bottle-to-basket**, **25% cube stacking**, and **75% vegetable-to-board**, **20 trials/task**, without retries.
- **Score: Unrated.** The reported SIM–REAL correlation (**0.924**) across checkpoints is not a retention percentage. No uniquely matched SIM denominator is attached to the three Table II REAL results.
- **Evidence:** [§IV, Table II and §IV-D](https://arxiv.org/pdf/2502.08645v4#page=6).
- **Video / GitHub:** [Official video](https://youtu.be/vbARimN1WO0) · [Task rollouts](https://re3sim.github.io/) · [Simulation, ACT, and real-deployment source](https://github.com/InternRobotics/Re3Sim).
- **Last reviewed:** 2026-10-01.

### Context-aware policies (2026)

**Can Context Bridge the Reality Gap? Sim-to-Real Transfer of Context-Aware Policies**

Learns to infer physical context from interaction history and uses it to control box pushing under changing mass and friction.

- **DOI / venue:** [10.1016/j.robot.2026.105594](https://doi.org/10.1016/j.robot.2026.105594) · Robotics and Autonomous Systems, 2026.
- **Robot / learning:** Panda with cylindrical pushing tool and FoundationPose object tracking. **AGX Dynamics**; SAC with LSTM context estimation. Selected policy: **FP**, trained with a forward-dynamics prediction objective; zero-shot transfer.
- **SIM → REAL:** Success means reaching within 3 cm. Without center-of-mass variation: **99% ± 5% → 78% ± 4%**, retention **78.79%**. With center-of-mass variation: **78% ± 6% → 48% ± 7%**, retention **61.54%**. Uncertainty is standard deviation across three seeds.
- **Score: 2 without center-of-mass variation; 1 with it.** The harder setting loses substantially more performance.
- **Trials:** SIM: 50 held-out contexts × two episodes/test. REAL: 12 material/box contexts × five episodes = **60/test**, across three seeds. Physical and simulated context samples differ.
- **Evidence:** [§4.2, Table 5, PDF pp. 16–21](https://arxiv.org/pdf/2511.04249v3#page=20). These are ratios of mean success, not ratios of negative reward or best-seed results.
- **Video / GitHub:** [Real hardware/trajectories, Figs. 1/2/5](https://arxiv.org/pdf/2511.04249v3); official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### MolmoB0T (2026)

**MolmoB0T: Large-Scale Simulation Enables Zero-Shot Manipulation**

Trains language-conditioned manipulation from large-scale synthetic demonstrations and deploys it on physical Franka systems.

- **DOI / venue:** [10.48550/arXiv.2603.16861](https://doi.org/10.48550/arXiv.2603.16861) **(preprint DOI)** · arXiv preprint, 2026; published venue not verified.
- **Robot / learning:** **FR3** with Robotiq 2F-85 and multiple cameras. MolmoSpaces/MuJoCo; imitation learning with a Molmo2 VLM and flow-matching action head. Reviewed variant: **MolmoBot F=2**, zero-shot, without real-robot policy training.
- **SIM / REAL:** Table 6 lists a **64.1% SIM average** over its simulation task suite and **79.2% REAL success** over **120 pick-and-place trials**, across four settings. Non-Franka RB-Y1 results are excluded.
- **Score: Unrated.** The SIM average combines picking and several placement variants; REAL uses a different pick-and-place suite and timing/termination protocol. **79.2/64.1 is not a valid retention score.**
- **Evidence:** [§§3.2, 5.1.2, 5.2 and Table 6](https://arxiv.org/pdf/2603.16861v2#page=18).
- **Video / GitHub:** [Official tabletop demonstrations](https://allenai.github.io/MolmoBot/) · [Policy code and deployment instructions](https://github.com/allenai/MolmoBot) · [Simulation/data infrastructure](https://github.com/allenai/molmospaces).
- **Last reviewed:** 2026-10-01.

### Torque-controlled transfer (2026)

**Enhancing Sim2Real Transfer for Torque-Controlled Robots through Real2Sim Dynamics Estimation and Reinforcement Learning**

Fits robot dynamics from real trajectories, trains a torque policy in simulation, and transfers target reaching to a physical Panda.

- **DOI / venue:** [10.48550/arXiv.2608.22629](https://doi.org/10.48550/arXiv.2608.22629) **(preprint DOI; publisher DOI not located)** · AIM 2026, as stated in the [authors' arXiv record](https://arxiv.org/abs/2608.22629).
- **Robot / learning:** Panda, joint torque/proprioceptive feedback; **MuJoCo for training**, Gazebo for intermediate SIM-to-SIM testing. TQC reinforcement learning with identified friction/inertia, gravity compensation, and domain randomization. Uses real system-identification data.
- **SIM / REAL:** Fig. 8 compares negative reward traces for **four target-reaching scenarios**; physical traces approach the goal with slower transients. Aggregate task success, mean endpoint error, and repeated-trial uncertainty are not reported.
- **Score: Unrated.** Quantitative REAL reward curves exist, so this is not score 0. Negative rewards approaching zero do not support the percentage-retention formula, and the plots do not establish a normalized aggregate score.
- **Evidence:** [§IV-B–C, Figs. 7–8, PDF pp. 4–6](https://arxiv.org/pdf/2608.22629#page=6).
- **Video / GitHub:** Physical snapshots in Fig. 7; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.
