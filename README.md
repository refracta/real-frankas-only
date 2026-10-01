# real-frankas-only

> Only policies that made it onto a real Franka.

**Last updated: 2026-10-02 (Asia/Seoul)**

[Review criteria and scoring](docs/REVIEW_GUIDELINES.md) · [Search audit and unresolved evidence](docs/SEARCH_AUDIT.md)

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

## Reviewed papers

**84 distinct papers with physical Franka deployment**, checked against their full papers and official supporting materials. Twenty-four papers have a numerical score for the selected setting; sixty remain **Unrated** because a defensible SIM-to-REAL retention comparison is unavailable. Different tasks, preprints, and published versions of the same work are not counted as additional papers.

Sorted by **Score: 4 → 3 → 2 → 1 → 0 → Unrated**, in both the index and detailed reviews. Entries with multiple scores are placed by their highest displayed score; each setting retains its own assessment.

| Paper | Venue | Franka model | End-effector | Task | Training simulator | Learning method | Score |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [AutoMate](#automate-2024) | RSS 2024 | Panda | Parallel-jaw gripper; model NR | Plug insertion; 20 assembly geometries, specialist policies | Isaac Gym / PhysX | RL: PPO with an imitation reward | **4** |
| [DPPO](#dppo-2025) | ICLR 2025 | Panda | Parallel-jaw gripper; model NR | One-leg furniture assembly | FurnitureBench / Isaac Gym | Diffusion Policy BC + PPO fine-tuning | **4** |
| [Haptic object insertion](#haptic-object-insertion-2023) | ICRA 2023 | Panda | Soft Robotics mGrip soft gripper | Insert a plate into a rack | robosuite / MuJoCo | RL: SAC | **4**, task-level comparison |
| [QD-Grasp 6DoF](#qd-grasp-6dof-2024) | IROS 2024 | FR3; Panda gripper | Panda parallel-jaw gripper (selected setting) | Execute optimized 6-DoF grasps | PyBullet | Evolutionary grasp search: MAP-Elites / ME-scs | **4**, selected-grasp retention |
| [Action-space study](#action-space-study-2024) | RA-L 2024 | Panda | Not reported (pushing task) | Box pushing: joint velocity / joint position | Isaac Sim / PhysX, as named in paper | RL: PPO | **3 / 1**, by action space |
| [TAM](#tam-2026) | CoRL 2026, accepted | Panda | Not reported (pushing task) | Visual box pushing | MuJoCo / MJX | PPO → point-cloud BC; supervised torque adaptation | **3**, ideal-SIM reference |
| [Bolting](#bolting-2020) | IROS 2020 | Panda | Rotary actuator + nut fixture + F/T sensor | M48 nut threading, 3 mm bolt offset | Custom contact simulator | RL: PPO over an LQT controller | **3** |
| [CaP-X / CaP-RL](#cap-x-2026) | ICML 2026 | Panda | Robotiq gripper; model NR | Cube lifting with generated control programs | CaP-Gym / robosuite / MuJoCo | GRPO post-training of Qwen2.5-Coder-7B-Instruct | **3**, task-level comparison |
| [OpenCR-MuJoCo](#opencr-mujoco-2026) | arXiv preprint, 2026 | Panda + tendon-driven continuum tool | Custom 3-segment, 9-tendon continuum tool | Wrap, lift and deposit a cylinder | MuJoCo | IL: state-based ACT | **3** |
| [IntervenGen](#intervengen-2024) | IROS 2024 | FR3 / Panda, conflicting sources | FR3 gripper in prose; Panda label conflicts | Grasp a block despite pose-estimation errors | robosuite / MuJoCo | IL: BC-RNN on synthetic demonstrations/interventions | **3** |
| [Tactile Sensory](#tactile-sensory-2021) | IROS 2021 | Panda | Modified gripper: custom tactile fingertips | Door opening with tactile feedback | MuJoCo | RL: TD3 | **2** |
| [Watch Less, Feel More](#watch-less-feel-more-2025) | ICRA 2025 | Franka Emika; model not reported | Gripper; model/modifications NR | OpenDrawer+ | Isaac Gym | PPO + history-based adaptation | **2**, task-level comparison |
| [Fruit Harvesting](#fruit-harvesting-2025) | CASE 2025 | Panda | Parallel-jaw gripper; model NR | Strawberry-stem grasping with five distractors | FruitGym / MuJoCo | RL: DRM | **2**, plot estimate |
| [Context-aware policies](#context-aware-policies-2026) | Robotics and Autonomous Systems, 2026 | Panda | Cylindrical pushing tool | Box pushing | AGX Dynamics | RL: SAC + LSTM context estimator | **2 / 1**, by setting |
| [D²PPO](#d2ppo-2026) | AAAI 2026 | Panda | Grippers; models/modifications NR | Bimanual Transport | robomimic / robosuite / MuJoCo | Diffusion BC with dispersive loss + PPO | **2** |
| [DROID](#droid-2021) | RA-L 2021 | Franka Emika; model not reported | Two-finger gripper; model NR | Open a cabinet door beyond 30° | MuJoCo | RL: PPO; CMA-ES fits randomization distributions | **2**, success-rate metric |
| [QD-Grasp transfer / TR-ME](#qd-grasp-transfer-2024) | ICRA 2024 | FR3; Fig. 1 caption says Panda | Standard Franka parallel-jaw gripper | Execute optimized reach-and-grasp trajectories | PyBullet | Evolutionary policy search: MAP-Elites / TR-ME | **2**, selected-grasp retention |
| [GCS tactile transfer](#gcs-tactile-transfer-2026) | ICRA 2026 | Franka; FR3 gripper specified, arm model not reported | FR3 gripper + custom magnetic-sensor fingers | Six blind insertion variants | robosuite / MuJoCo | RL: asymmetric SAC; tactile randomization | **2** |
| [AffordSim](#affordsim-2026) | arXiv preprint, 2026 | FR3 | Franka Hand (parallel-jaw) | Banana-to-plate placement | Isaac Sim + 3DGS backgrounds | IL: π0.5; BC / DP / ACT / VLA-adapter comparisons | **1**, task-level comparison |
| [NeuralTouch](#neuraltouch-2026) | IEEE/ASME Transactions on Mechatronics, 2026 | Panda | Franka gripper + custom TacTip fingers | Tactile bolt/plug/USB extraction and insertion | Tactile Gym 2.0 / PyBullet | PPO tactile refinement + neural descriptors; real-to-sim pix2pix | **1**, task-level comparison |
| [DeGuV](#deguv-2025) | arXiv preprint, 2025 | Franka Emika; model not reported | Gripper; model/modifications NR | Cube lifting | RL-ViGen / robosuite / MuJoCo | Visual RL: DrQv2-based DeGuV | **0** |
| [D3P](#d3p-2026) | IROS 2026 | Franka; model not reported | Gripper; model/modifications NR | Square nut assembly | robomimic / robosuite / MuJoCo | Diffusion BC + DPPO; PPO denoising adaptor | **0**, task outcomes qualitative |
| [D-SafeMPC](#d-safempc-2026) | IROS 2026 | Franka; model not reported | Not reported (reaching task) | Reach a goal through static obstacles | D3IL / MuJoCo | Diffusion trajectory imitation + guided MPC | **0** |
| [FluidLab](#fluidlab-2023) | ICLR 2023 | Franka Emika; model not reported | Parallel-jaw gripper holding a stirring tool | Latte art by stirring | FluidEngine / Taichi | Differentiable trajectory optimization | **0** |
| [VSDR](#vsdr-2022) | ICRA 2022 | Panda | Parallel-jaw gripper; model NR | Visual cube grasping | robosuite / MuJoCo | RL: SAC; policy selection | Unrated |
| [IndustReal](#industreal-2023) | RSS 2023 | Panda | Gripper; model/modifications NR | Peg insertion | Isaac Gym / PhysX | RL: PPO | Unrated |
| [RialTo](#rialto-2024) | RSS 2024 | Panda; FR3 | Parallel-jaw grippers; models NR | Shelf placement; toaster opening | Isaac Sim | BC + PPO + policy distillation | Unrated |
| [Lang4Sim2Real](#lang4sim2real-2024) | RSS 2024 | Panda | Parallel-jaw gripper; model NR | Stacking, pick-and-place, wire wrapping | robosuite / MuJoCo | Language-aligned BC | Unrated |
| [TRANSIC](#transic-2024) | CoRL 2024 | “Franka Emika 3” in paper | Gripper; model/modifications NR | Furniture assembly skills | Isaac Gym Preview 4 / PhysX | PPO → BC; human-correction residual | Unrated |
| [FORGE](#forge-2025) | RA-L 2025 | Panda | Gripper holding assembly parts; model NR | Peg insertion, gear meshing, nut threading | Factory / Isaac Gym | Recurrent PPO | Unrated |
| [MuJoCo Playground](#mujoco-playground-2025) | RSS 2025 demo; technical report | Panda | Robotiq (reorientation); picking gripper NR | Block reorientation; visual cube picking | MuJoCo / MJX; Madrona for pixels | RL: PPO | Unrated |
| [XMoP](#xmop-2025) | ICRA 2025 | FR3 | Not reported (reaching task) | Collision-free reaching | PyBullet; synthetic planning data | IL: diffusion Transformer + learned collision model | Unrated |
| [PBRL](#pbrl-2025) | CASE 2025 | Panda | Gripper; model/modifications NR | Nut picking | Isaac Gym | Population-based PPO | Unrated |
| [X-Sim](#x-sim-2025) | CoRL 2025 | Franka; model not reported | Gripper; model/modifications NR | Letter arrangement | ManiSkill / SAPIEN + 3DGS | PPO → Diffusion Policy BC | Unrated |
| [Re³Sim](#re3sim-2026) | ICRA 2026 | FR3 | Parallel-jaw gripper; model NR | Bottle placement, cube stacking, vegetable placement | Isaac Sim + 3DGS | IL: ACT with DINOv2 | Unrated |
| [MolmoB0T](#molmob0t-2026) | arXiv preprint, 2026 | FR3 | Robotiq 2F-85 parallel-jaw gripper | Language-conditioned pick-and-place | MolmoSpaces / MuJoCo | IL: VLM + flow-matching action head | Unrated |
| [Torque-controlled transfer](#torque-controlled-transfer-2026) | AIM 2026 | Panda | Not reported (reaching task) | Target reaching with joint torques | MuJoCo; Gazebo for transfer testing | RL: TQC + dynamics identification | Unrated |
| [Continuous control](#continuous-control-2022) | Autonomous Robots, 2022 | Panda | Parallel-jaw gripper; model NR | Grasp-and-lift with obstacle avoidance | robosuite / MuJoCo | RL: PPO; simulation fine-tuning | Unrated |
| [Centralized dual-arm assembly](#centralized-dual-arm-assembly-2022) | Frontiers in Robotics and AI, 2022 | Two Pandas | Grippers with peg/hole fixtures | Cooperative peg insertion | PyBullet | RL: SAC + HER | Unrated |
| [Latent prediction](#latent-prediction-2023) | Frontiers in Robotics and AI, 2023 | Panda | Gripper; model/modifications NR | Visual cube pushing | Gazebo | SAC + dynamics-aware VAE; real encoder adaptation | Unrated |
| [Curriculum dual-arm assembly](#curriculum-dual-arm-assembly-2024) | Machines, 2024 | Two Pandas | Peg/hole attachments; gripper models NR | Square peg insertion | robosuite / MuJoCo | RL: SAC + reverse curriculum | Unrated |
| [Active Search](#active-search-2024) | IROS 2024 | FR3 | Parallel-jaw gripper; model NR | Find and retrieve an occluded object | PyBullet | RL: branching Q-networks + learned grasp proposals | Unrated |
| [ResiP](#resip-2025) | ICRA 2025 | Panda | Parallel-jaw gripper; model NR | One-leg furniture assembly | Isaac Gym; Isaac Sim for rendering | Diffusion BC + residual PPO → visual BC | Unrated |
| [ReBot](#rebot-2025) | IROS 2025 | Panda | Robotiq 2F-85 parallel-jaw gripper | Object-to-plate pick-and-place | Isaac Sim 4.1 / Isaac Lab | IL: Octo / OpenVLA fine-tuning on synthetic videos | Unrated |
| [AnyTask](#anytask-2025) | arXiv preprint, 2025 | Franka; model not reported | Parallel-jaw gripper; model NR | Lifting, pushing, stacking, drawer manipulation | Isaac Lab / Isaac Sim | IL: 3D Diffusion Policy | Unrated |
| [FUNCanon](#funcanon-2026) | ICRA 2026 | Franka Emika; model not reported | Gripper; model/modifications NR | Pick-and-place; pouring | RLBench / CoppeliaSim | IL: object-centric diffusion policy | Unrated |
| [Sim-to-online RL](#sim-to-online-rl-2026) | arXiv preprint, 2026 | Panda | Parallel-jaw gripper; model NR | Visual cube picking | MuJoCo Playground / Brax | RL: SAC + BRO critic / DrQ; real fine-tuning | Unrated |
| [VLAJS](#vlajs-2026) | ICRA 2026 RL4IL workshop | Panda | Parallel-jaw gripper; model NR | Cube lifting, pick-and-place, peg reorientation | ManiSkill / SAPIEN | RL: PPO with temporary VLA guidance | Unrated |
| [MATCH](#match-2026) | arXiv preprint, 2026 | FR3 | Gripper holding peg; model NR | Fragile peg insertion under pose uncertainty | Isaac Lab / Isaac Sim | RL: PPO with hybrid position/force actions | Unrated |
| [World-action transfer](#world-action-transfer-2026) | CVPR 2026 EAI workshop | FR3 | Gripper; model/modifications NR | Lifting, drawer opening, strawberry-to-bowl placement | GPU simulator; cites Isaac Gym, implementation unclear | IL: Cosmos Policy video diffusion | Unrated |
| [Object-centric residual RL](#object-centric-residual-rl-2026) | arXiv preprint, 2026 | FR3 | Gripper; model/modifications NR | Cube-to-bowl pick-and-place | MuJoCo | TD3 residual over GR00T-N1.5 | Unrated |
| [MoDex](#modex-2026) | arXiv preprint, 2026 | Panda + Allegro Hand | Allegro dexterous hand (16 DoF) | Sequential multi-object grasping | robosuite / MuJoCo | OS-conditioned Diffusion Policy + DPPO | Unrated |
| [VICES](#vices-2019) | IROS 2019 | Panda | Wiping tool | Whiteboard wiping | robosuite / MuJoCo | RL: PPO; variable impedance actions | Unrated |
| [DROPO](#dropo-2023) | Robotics and Autonomous Systems, 2023 | Panda | Pushing tool; design/model NR | Box pushing with displaced center of mass | Pushing backend not explicit; framework uses MuJoCo | RL + offline domain-randomization fitting; PPO/SAC assignment unresolved | Unrated |
| [ASID](#asid-2024) | ICLR 2024 | Panda | Gripper; model/modifications NR | Balance a rod with unknown mass distribution | MuJoCo | PPO exploration + CEM task-policy search | Unrated |
| [GenSim2](#gensim2-2024) | CoRL 2024 | FR3 | Modified deformable TPU parallel gripper | Eight articulated-object tasks | SAPIEN | IL: multitask proprioceptive point-cloud Transformer | Unrated |
| [Get a Grip](#get-a-grip-2024) | CoRL 2024 | FR3 + Allegro Hand | Allegro dexterous hand | Grasp and lift unseen objects | Isaac Gym | Diffusion grasp sampler + supervised evaluator | Unrated |
| [Exploration-policy transfer](#exploration-policy-transfer-2024) | NeurIPS 2024 | Panda | Parallel-jaw gripper; model NR | Push a puck to the table edge | Custom Franka simulator; pushing engine not explicit | RL: SAC with learned exploration ensemble; real fine-tuning | Unrated |
| [TacSL](#tacsl-2025) | IEEE Transactions on Robotics, 2025 | Franka; model not reported | Parallel-jaw gripper + GelSight fingertips | Tactile peg insertion | TacSL / Isaac Gym / PhysX | Recurrent PPO; asymmetric actor-critic distillation | Unrated |
| [SimLauncher](#simlauncher-2025) | IROS 2025 | Franka; model not reported | Franka Hand (parallel-jaw) | Banana-to-scale pick-and-place | Isaac Gym + 3DGS rendering | RL teacher → visual BC → RLPD with BC action proposals | Unrated |
| [CLASH](#clash-2026) | arXiv preprint, 2026 | Franka; model not reported | Held impact tool; gripper model NR | Sequential striking along three routes | MuJoCo + learned collision model | RL: SAC | Unrated |
| [RFS](#rfs-2026) | ICLR 2026 | Franka + LEAP Hand; model not reported | LEAP dexterous hand | Dexterous grasping | Isaac Lab / Isaac Sim | Flow BC + PPO → point-cloud distillation; offline TD3+BC | Unrated |
| [Tac2Real](#tac2real-2026) | arXiv preprint, 2026 | Panda | Modified Franka gripper: two GelSight Minis | Tactile peg insertion | Isaac Lab + PNCG-IPC tactile simulation | RL: PPO | Unrated |
| [Tune to Learn](#tune-to-learn-2026) | RSS 2026 | FR3 | Not reported (reaching task) | Joint-space reaching | Isaac Lab / Isaac Sim | RL: PPO (SKRL); gain-specific system identification | Unrated |
| [Collision mesh poisoning](#collision-mesh-poisoning-2026) | arXiv preprint, 2026 | Panda | Gripper; model/modifications NR | Controlled execution of learned grasps on three objects | Simulator not named in inspected paper | RL: PPO (RSL-RL) | Unrated |
| [CRSfD](#crsfd-2022) | CoRL 2022; PMLR 2023 | Panda | 3D-printed peg; mount/gripper details NR | Insert pegs shaped as digits 0–4 | Simulator not named in inspected paper/supplement | RL: SACfD with conservative reward shaping | Unrated |
| [Pre/post-contact decomposition](#prepost-contact-decomposition-2023) | IROS 2023 | Panda | Gripper with high-friction glove | Push and reorient a box over a bump | Isaac Gym | RL: two PPO policies; pre-contact policy distillation | Unrated |
| [AdaptSim](#adaptsim-2023) | CoRL 2023 | Panda | Custom printed plate pusher replacing gripper | Dynamically push a heavy bottle to a target | Drake | Off-policy task-primitive learning; branching Double Q-learning adapts SIM | Unrated |
| [CORN](#corn-2024) | ICLR 2024 | Panda | Gripper with high-friction glove | Nonprehensile object pose rearrangement | Isaac Gym | Contact representation pretraining + PPO → DAgger | Unrated |
| [SGFT](#sgft-2025) | ICLR 2025 | FR3 | Parallel-jaw gripper holding a hammer | Hammer a nail into a board | Hammering backend not explicit in inspected sources | SAC pretraining → model-based SGFT; real fine-tuning | Unrated |
| [HAMNet / UniCORN](#hamnet-2025) | RSS 2025 | FR3 | Narrow replacement gripper + friction glove | Nonprehensile rearrangement in nine environments | Isaac Gym | Contact representation pretraining + modular PPO → DAgger | Unrated |
| [DyWA](#dywa-2025) | ICCV 2025 | Panda | Gripper; model/modifications NR | Rearrange objects from a single depth view | Isaac Gym | PPO teacher → DAgger world-action model | Unrated |
| [DAPL](#dapl-2026) | RSS 2026 | FR3 | Gripper; model/modifications NR | Rearrange an object amid clutter | Isaac Lab / PhysX | Dynamics representation + PPO → student distillation | Unrated |
| [GOMP](#gomp-2026) | ECCV 2026 | FR3 | Standard parallel-jaw gripper | Manipulate an object into a graspable pose, then grasp | Isaac Lab / Isaac Sim | PPO → online BC distillation with graspability prediction | Unrated |
| [PA-RL](#pa-rl-2026) | arXiv preprint, 2026 | Panda | Cylindrical peg + ATI F/T sensor; mount NR | Cylindrical peg insertion | MuJoCo | RL: SAC over potential-field parameters | Unrated |
| [SimOpt](#simopt-2019) | ICRA 2019 | Panda | Parallel-jaw gripper; model NR | Drawer opening | NVIDIA FleX | PPO; real-rollout adaptation of SIM randomization | Unrated |
| [VGN](#vgn-2020) | CoRL 2020; PMLR 2021 | Panda | Parallel-jaw gripper; model NR | Grasp objects out of clutter | PyBullet | Self-supervised 3D CNN grasp prediction | Unrated |
| [CREST](#crest-2021) | ICRA 2021 | Panda | Parallel-jaw gripper; model NR | Block stacking | Custom approximate internal simulator | PPO over primitive parameters; causal structure learning | Unrated |
| [GIGA](#giga-2021) | RSS 2021 | Panda | Parallel-jaw gripper; model NR | Grasp objects out of packed clutter | PyBullet | Self-supervised implicit grasp/occupancy networks | Unrated |
| [RL with traditional controls](#rl-with-traditional-controls-2023) | Robotics, 2023 | Panda | Parallel-jaw gripper; model NR | Pick-and-place with obstacle avoidance | PyBullet 3.2.1 | RL: PPO; synchronized SIM/REAL execution | Unrated |
| [Plug-and-play grasping](#plug-and-play-grasping-2024) | ICRA 2024 MoMa.v2 workshop | FR3 | Parallel-jaw gripper; model NR | Vision-guided reach-and-grasp | PyBullet | Evolutionary trajectory search: MAP-Elites / ME-scs | Unrated |
| [GraspLDM](#graspldm-2024) | IEEE Access, 2024 | FR3 | Franka Hand (parallel-jaw) | Grasp unseen objects | ACRONYM / NVIDIA FleX training data; Isaac Gym evaluation | VAE + latent diffusion; grasp classifier | Unrated |
| [DRIS reactive catching](#dris-reactive-catching-2026) | RSS 2026 | FR3 | Custom printed plate with neoprene padding | Catch and retain a moving ball on a plate | ManiSkill3 | RL: PPO + domain-randomization instance encoder | Unrated |
| [Visual action-space benchmark](#visual-action-space-benchmark-2026) | arXiv preprint, 2026 | Panda | Parallel-jaw gripper; model NR | Visual cuboid picking with joint-velocity actions | MuJoCo | RL: PPO | Unrated |

The **End-effector** column describes the physical setup for the reviewed task: gripper, modified fingers/sensors, dexterous hand or task tool. **NR = not reported in the checked sources**; a parallel-jaw label alone does not establish a stock, unmodified gripper. **Franka Hand** is the commercial parallel-jaw gripper, distinct from an Allegro or LEAP dexterous hand. Held tools and mounted attachments are identified separately where the source allows.

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

### Haptic object insertion (2023)

**Zero-Shot Transfer of Haptics-Based Object Insertion Policies**

Uses contact feedback to insert a pregrasped plate into a rack despite changing gripper mechanics.

- **DOI / venue:** [10.1109/ICRA48891.2023.10160346](https://doi.org/10.1109/ICRA48891.2023.10160346) · ICRA 2023.
- **Robot / learning:** Panda with Soft Robotics mGrip, wrench/proprioceptive feedback and initial visual target localization. robosuite/MuJoCo; SAC with observation history and randomized latency. Zero-shot transfer from a rigid simulated gripper to a soft physical gripper.
- **SIM → REAL:** Table II: **84.0% ± 15.0% → 83.3% ± 13.6%**, retention **99.17%**. REAL: six slots × four repetitions = **24 attempts**. SIM rollout count is not separately clear from the reported four-trial aggregation.
- **Score: 4, task-level comparison.** Plate/rack geometry and gripper mechanics differ. Public training, checkpoints, deployment documentation, and demonstrations support the materials criterion.
- **Evidence:** [Table II and §IV, PDF p. 5](https://arxiv.org/pdf/2301.12587v3#page=5).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=CS7uP_pW77U) · [Project](https://sites.google.com/view/compliant-object-insertion) · [Training and ROS deployment](https://github.com/isl-org/0shot-object-insertion).
- **Last reviewed:** 2026-10-01.

### QD-Grasp 6DoF (2024)

**Speeding up 6-DoF Grasp Sampling with Quality-Diversity**

Optimizes diverse grasp poses in simulation and transfers selected robust grasps to a physical FR3.

- **DOI / venue:** [10.1109/IROS58592.2024.10801391](https://doi.org/10.1109/IROS58592.2024.10801391) · IROS 2024.
- **Robot / learning:** Physical **FR3** with a parallel-jaw **Panda gripper**; RealSense D435i for object poses. **PyBullet**, MAP-Elites/ME-scs grasp search with domain-randomized fitness; MoveIt/RRT-Connect plans execution.
- **Transfer:** Selected high-fitness, nominally SIM-successful 6-DoF grasps; table-colliding proposals are discarded. This evaluates execution of learned grasp parameters, not a closed-loop neural policy.
- **SIM → REAL:** Table I reports **95% selected-grasp transfer** for the parallel-jaw setting, relative to grasps successful in nominal SIM. The physical trial count is not reported. The **84% reach-and-grasp** comparator is earlier work; **72%** belongs to the Allegro setting.
- **Score: 4.** Reported selected-grasp retention exceeds 90%; documented grasp-generation code and physical examples are public. This does not imply 95% success over arbitrary grasps or a verified complete hardware stack.
- **Evidence:** [§V, Table I/Fig. 8 and Appendix II, PDF pp. 5/7](https://arxiv.org/pdf/2403.06173v1#page=5).
- **Video / GitHub:** [Official project and examples](https://qdgrasp.github.io/generating_grasp_poses/) · [Public source on GitLab](https://gitlab.isir.upmc.fr/l2g/qd_grasp_6dof), including installation, randomized grasp generation and evaluation instructions. Fig. 8 supplies physical parallel-jaw photos; repository animations also show Allegro experiments. No official GitHub mirror located.
- **Last reviewed:** 2026-10-01.

### Action-space study (2024)

**On the Role of the Action Space in Robot Manipulation Learning and Sim-to-Real Transfer**

Compares how alternative action interfaces change the transfer of learned box-pushing behavior.

- **DOI / venue:** [10.1109/LRA.2024.3398428](https://doi.org/10.1109/LRA.2024.3398428) · IEEE Robotics and Automation Letters, 2024.
- **Robot / learning:** Panda; joint and object-state observations, sensor/gripper models unspecified. PPO in **Isaac Sim/PhysX**, as explicitly named in §IV-A. Real execution adds safety filtering and rate limits; no real policy fine-tuning is reported.
- **SIM → REAL, box pushing:** Joint velocity (**JV**): **97% ± 5% → 90% ± 5%**, retention **92.78%, score 3**. Joint position (**JP**): **87% ± 12% → 4% ± 0%**, retention **4.60%, score 1**.
- **Comparison limits:** Five policies are trained per action space; the best three are selected for REAL. Hardware goal/reset procedures and safety filtering differ. Per-policy REAL trial counts are not stated in the checked evaluation description.
- **Evidence:** [§IV-A and Table I, PDF pp. 4–6](https://arxiv.org/pdf/2312.03673v2#page=6).
- **Video / GitHub:** Physical setup photos in Fig. 2; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### TAM (2026)

**TAM: Torque Adaptation Module for Robust Motion Transfer in Manipulation**

Adds a learned torque correction beneath a simulated visual pushing policy to improve physical motion tracking.

- **DOI / venue:** [10.48550/arXiv.2606.06218](https://doi.org/10.48550/arXiv.2606.06218) **(preprint DOI)** · CoRL 2026, accepted per the [authors' arXiv record](https://arxiv.org/abs/2606.06218).
- **Robot / learning:** Panda with partial point clouds/proprioception; gripper/camera models unspecified. MuJoCo/MJX; PPO teacher → point-cloud BC policy, plus a separately supervised history-conditioned torque adapter. All adaptation training occurs in simulation.
- **SIM → REAL:** Visual box pushing: **84.0% ideal-SIM reference → 76.2% REAL (16/21)**, retention **90.71%**. SIM's evaluation denominator is not separately specified; uncertainty is not given.
- **Score: 3, ideal-SIM reference.** Table 1 compares the same high-level policy, with TAM below it on hardware. Public adapter code exists; release coverage for the complete task-specific visual policy is not established for score 4.
- **Evidence:** [Table 1 and Appendix E.1](https://arxiv.org/pdf/2606.06218v2#page=6).
- **Video / GitHub:** [Real pushing demo](https://dongwon-son.github.io/tam-project-page/assets/videos/push_TAM_stb_edit.mp4) · [Adapter training, checkpoints and deployment utilities](https://github.com/Dongwon-Son/TAM).
- **Last reviewed:** 2026-10-01.

### Bolting (2020)

**Sim-to-Real Transfer of Bolting Tasks with Tight Tolerance**

Learns to adjust a tracking controller and contact forces while threading an M48 nut onto a misaligned bolt.

- **DOI / venue:** [10.1109/IROS45743.2020.9341644](https://doi.org/10.1109/IROS45743.2020.9341644) · IROS 2020.
- **Robot / learning:** Panda, additional rotary actuator, nut fixture and wrist F/T sensor. PPO tunes an LQT-based controller in a **custom contact simulator** using learned configuration-space geometry and volumetric contact. MuJoCo is a comparison/reference, not the training engine.
- **Transfer:** Zero-shot, with bolt-pose randomization during SIM training.
- **SIM → REAL:** Hierarchical controller, **3 mm translation / 0° rotation offset: 9/10 → 4/4**, or **90% → 100%**; retention **111.11%**.
- **Score: 3.** Same offset and controller; only four physical trials. This score does not cover every offset. Table II records **3/4** at 4 mm, despite broader prose claiming success in all cases.
- **Evidence:** [§V, Table II, PDF p. 8](https://www.inrol.snu.ac.kr/_files/ugd/313661_a626352a83bb4fff8c283d6381f883ba.pdf#page=8).
- **Video / GitHub:** [Author-linked video](https://youtu.be/y4q0JqXdil4). Public task-specific source not located.
- **Last reviewed:** 2026-10-01.

### CaP-X (2026)

**CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation**

Post-trains a code-generating policy on simulated task outcomes, then uses its programs to lift a real cube.

- **DOI / venue:** [10.48550/arXiv.2603.22435](https://doi.org/10.48550/arXiv.2603.22435) **(preprint DOI)** · ICML 2026 per the [official repository](https://github.com/capgym/cap-x).
- **Robot / learning:** Panda; release documents a Robotiq gripper and calibrated stereo-depth perception. **CaP-Gym/robosuite/MuJoCo**; **GRPO** post-training of Qwen2.5-Coder-7B-Instruct. The learned output is a robot-control program using shared tools.
- **Transfer:** SIM reward training with privileged APIs; evaluation with noisy perception, then physical deployment without additional policy fine-tuning.
- **SIM → REAL:** Selected **CaP-RL cube lifting: 80/100 → 21/25**, or **80% → 84%**; task-level retention **105%**.
- **Score: 3.** Table 4 explicitly compares the trained agent across domains. Public demos prominently show the separate, training-free **CaP-Agent0**; they do not establish score-4 qualitative coverage for this selected CaP-RL policy.
- **Evidence:** [§5, Table 4, PDF p. 9](https://arxiv.org/pdf/2603.22435v2#page=9).
- **Video / GitHub:** [Project demos](https://capgym.github.io/) · [RL training instructions](https://github.com/capgym/cap-x/blob/main/docs/rl-training.md) · [Panda bring-up](https://github.com/capgym/cap-x/blob/main/docs/real-franka.md).
- **Last reviewed:** 2026-10-01.

### OpenCR-MuJoCo (2026)

**Do Rigid-Body Simulators Dream of Soft Robots? Learning Contact-Rich Manipulation for Tendon-Driven Continuum Robots**

Learns coordinated arm and tendon commands to wrap around a cylinder, lift it and deposit it in a bin.

- **DOI / venue:** [10.48550/arXiv.2606.22397](https://doi.org/10.48550/arXiv.2606.22397) **(preprint DOI)** · arXiv preprint, 2026.
- **Robot / learning:** **Panda + three-segment, nine-tendon continuum tool**, motor encoders and NDI Lyra object tracking. **MuJoCo**, state-based ACT trained on **50 simulated demonstrations/task**; outputs all seven arm and nine tendon positions.
- **Transfer:** Zero-shot task policy after physical system identification and manual object-parameter calibration; object-pose randomization and observation noise during training.
- **SIM → REAL:** Selected cylinder grasping: **73/100 → 16/21**, or **73% → 76.19%**; retention **104.37%**.
- **Score: 3.** Same task and transferred policy. Table 3's 21 physical trials conflict with nearby prose saying 20; this review uses table counts. Limited trials do not establish statistical equivalence.
- **Evidence:** [§4.3, Table 3, Appendices D/E](https://arxiv.org/pdf/2606.22397v1#page=7).
- **Video / GitHub:** [Project with physical rollouts](https://continuumroboticslab.github.io/opencr-mujoco/) · [Simulator, identification and hardware utilities](https://github.com/ContinuumRoboticsLab/opencr-mujoco). ACT task-training/deployment code was not located in the inspected release, preventing score 4.
- **Last reviewed:** 2026-10-01.

### IntervenGen (2024)

**IntervenGen: Interventional Data Generation for Robust and Data-Efficient Robot Imitation Learning**

Expands a few corrective demonstrations into synthetic interventions and learns block-grasping recovery under inaccurate perception.

- **DOI / venue:** [10.1109/IROS58592.2024.10801523](https://doi.org/10.1109/IROS58592.2024.10801523) · IROS 2024.
- **Robot / learning:** §V-A says **FR3 arm and gripper**; Fig. 4 and the project say **Panda**. Model identity remains conflicting. RealSense D415/ICP; **robosuite/MuJoCo, BC-RNN**, trained on generated demonstrations and corrective interventions.
- **Transfer:** A 5 cm cube, 20 × 30 cm position region; zero-shot policy with no real demonstrations/fine-tuning. Contact-assisted pose information supports recovery; this is not an RGB-only policy.
- **SIM → REAL:** I-Gen block grasping: **50/50 = 100% → 9/10 = 90%**. Retention: **90%**.
- **Score: 3.** Table IV directly compares the transferred policies. Ten physical trials limit precision; a selected-method source release was not located.
- **Evidence:** [§V-A, §VI, Fig. 4 and Table IV, PDF pp. 5–7](https://arxiv.org/pdf/2405.01472v1#page=5).
- **Video / GitHub:** [Official real-robot demonstrations and recovery examples](https://sites.google.com/view/intervengen2024). Public IntervenGen task source not located; upstream MimicGen/robomimic alone does not establish its release.
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

### D2PPO (2026)

**D²PPO: Diffusion Policy Policy Optimization with Dispersive Loss**

Regularizes diffusion-policy representations before RL fine-tuning and transfers bimanual object transport to hardware.

- **DOI / venue:** [10.1609/aaai.v40i22.38959](https://doi.org/10.1609/aaai.v40i22.38959) · [AAAI 2026](https://ojs.aaai.org/index.php/AAAI/article/view/38959).
- **Robot / learning:** Panda bimanual setup; gripper/sensor models unspecified. robomimic/robosuite 1.4.1/MuJoCo 2.1.0. Diffusion BC with dispersive loss + PPO fine-tuning in SIM; no physical policy fine-tuning described.
- **SIM → REAL:** **Transport: 87% → 70%**, retention **80.46%**, using the post-RL policy. The 94% SIM average across four tasks is not used.
- **Score: 2.** The paper explicitly compares Transport across training/deployment stages, but REAL trial counts, uncertainty, and detailed matching conditions are not supplied.
- **Evidence:** [Table II and Fig. 10, arXiv appendix p. 18](https://arxiv.org/pdf/2508.02644v1#page=18).
- **Video / GitHub:** [Physical Transport demo](https://guowei-zou.github.io/d2ppo/images/real_robot/transport_success.mp4) · [Project](https://guowei-zou.github.io/d2ppo/) · [Training and evaluation release](https://github.com/Guowei-Zou/d2ppo-release). Complete hardware-stack coverage is not established.
- **Last reviewed:** 2026-10-01.

### DROID (2021)

**DROID: Minimizing the Reality Gap Using Single-Shot Human Demonstration**

Fits simulated dynamics distributions from a demonstrated door-opening motion, then learns a policy for physical door opening.

- **DOI / venue:** [10.1109/LRA.2021.3062311](https://doi.org/10.1109/LRA.2021.3062311) · IEEE Robotics and Automation Letters, 2021. This is distinct from the later DROID dataset.
- **Robot / learning:** Franka Emika, model not specified; two-finger gripper, joint torque sensing and camera/ArUco tracking. **MuJoCo, PPO**, with CMA-ES fitting the randomization distributions.
- **Transfer:** Policy trained in SIM after real demonstration/replay-based identification; no physical policy fine-tuning. Selected setting: DROID with DR, door without springs, original handle position.
- **SIM → REAL:** Success means opening beyond **30°**: **100% → 80%**, or **80% retention**. REAL: three policies × ten trials = **30**; SIM trial count not specified. Mean opening angle drops **91.2° ± 0.2° → 45.4° ± 13.6°**.
- **Score: 2.** Based on thresholded success. The angle retains only **49.78%**; this score does not imply preservation of the full opening motion.
- **Evidence:** [§IV-C, Table II, PDF pp. 6–7](https://arxiv.org/pdf/2102.11003v2#page=6).
- **Video / GitHub:** [Author project and video sections](https://www.robot-learning.uk/droid); direct playable video URL and official task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### QD-Grasp transfer (2024)

**Domain Randomization for Sim2real Transfer of Automatically Generated Grasping Datasets**

Optimizes diverse grasping trajectories in simulation and tests whether robustness-oriented selection improves physical execution.

- **DOI / venue:** [10.1109/ICRA57147.2024.10610677](https://doi.org/10.1109/ICRA57147.2024.10610677) · ICRA 2024.
- **Robot / learning:** **FR3** with standard gripper in §IV and Table II; Fig. 1 inconsistently says Panda. **PyBullet; MAP-Elites evolutionary policy search**, with TR-ME optimizing robustness to mixed domain randomization.
- **Transfer:** Selected **top-five TR-ME reach-and-grasp trajectories**, replayed open-loop in carefully matched scenes. FR3 object placement uses forward kinematics; objects are reset manually. Success includes retaining the object after an external disturbance.
- **SIM → REAL:** Table II reports **0.84 transfer ratio** for selected SIM-successful grasps: **84% retention** against nominal successful simulation executions. This is not the randomized-SIM fitness itself. The selected physical trial count is not specified separately.
- **Score: 2.** Applies to selected trajectory execution. The earlier **177 FR3 trials / 44%** describe the broader unrefined study, not this TR-ME result.
- **Evidence:** [§§III-D/IV/V and Table II](https://arxiv.org/pdf/2310.04517v1#page=4).
- **Video / GitHub:** [Official real/SIM examples](https://qdgrasp.github.io/sim2real_labelling/); standalone official video not located. [Working source](https://github.com/Johann-Huber/qd_grasp) includes trajectory generation and DR evaluation; the paper's hyphenated repository URL is stale.
- **Last reviewed:** 2026-10-01.

### GCS tactile transfer (2026)

**Zero-shot Sim2Real Transfer for Magnet-Based Tactile Sensor on Insertion Tasks**

Randomizes simulated tactile responses to transfer blind insertion policies using dense magnetic touch sensing.

- **DOI / venue:** [10.48550/arXiv.2505.02915](https://doi.org/10.48550/arXiv.2505.02915) **(preprint DOI)** · ICRA 2026, confirmed by the [author's publication list](https://beininghan.github.io/); publisher DOI not located.
- **Robot / learning:** **Franka; arm model not reported**. The paper explicitly names the **Franka Research 3 gripper**, fitted with PaXini magnetic tactile pads, plus RealSense L515/ArUco initialization. **robosuite/MuJoCo, asymmetric SAC** with tactile-history CNN inputs.
- **Transfer:** Six blind insertion variants, without real task-policy fine-tuning. Physical tactile readings set randomization ranges; calibrated vision initializes poses but does not provide the policy with the hidden peg pose.
- **SIM → REAL:** Table II, six-variant mean success: **91% → 80%**. SIM has **50 trials/variant**, REAL **10/variant**: **273/300 → 48/60**. Mean retention: **87.91%**. The 1 mm square-hole variant individually drops from 98% to 60%.
- **Score: 2.** The score covers this explicit six-variant family, not its best example; ten real trials per variant limit precision.
- **Evidence:** [§IV, Table II and Appendix, PDF pp. 4–5/8–9](https://arxiv.org/pdf/2505.02915v2#page=4).
- **Video / GitHub:** [Official project with per-variant physical videos](https://princeton-vl.github.io/tactilegcs.github.io/). The Code button does not resolve to a task-source release; no public official implementation located.
- **Last reviewed:** 2026-10-01.

### AffordSim (2026)

**AffordSim: A Scalable Data Generator and Benchmark for Affordance-Aware Robotic Manipulation**

Generates affordance-guided simulation demonstrations and trains visual policies that execute physical manipulation tasks.

- **DOI / venue:** [10.48550/arXiv.2604.11674](https://doi.org/10.48550/arXiv.2604.11674) **(preprint DOI)** · arXiv preprint, 2026; published venue not verified.
- **Robot / learning:** **FR3**, **Franka Hand parallel-jaw gripper**, wrist/third-person RealSense D435 cameras and proprioception, as specified in Appendix M. Isaac Sim with 3DGS backgrounds; selected **π0.5 imitation fine-tuning**, 300 synthetic demonstrations/task. No real-world policy fine-tuning.
- **SIM → REAL:** Banana-to-plate: **93/100 = 93% → 4/10 = 40%**, retention **43.01%**. This uses the task-specific π0.5 rows of Tables 2/3, not their different-suite averages.
- **Score: 1, task-level comparison.** The physical success rate drops substantially. SIM varies object pose with fixed appearance; REAL uses a reconstructed physical workspace. Matched sampled poses and uncertainty are not reported; ten physical attempts limit precision.
- **Evidence:** [§§4.2/4.4, Tables 2/3, PDF pp. 8–9](https://arxiv.org/pdf/2604.11674v2#page=8) · [Physical hardware, Appendix M, p. 21](https://arxiv.org/pdf/2604.11674v2#page=21).
- **Video / GitHub:** Real task photos in Fig. 6; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### NeuralTouch (2026)

**NeuralTouch: Neural Descriptors for Precise Sim-to-Real Tactile Robot Control**

Refines a vision-initialized grasp with a learned tactile policy before replaying a precise manipulation motion.

- **DOI / venue:** [10.1109/TMECH.2026.3687919](https://doi.org/10.1109/TMECH.2026.3687919) · IEEE/ASME Transactions on Mechatronics, 2026.
- **Robot / learning:** **Panda**, Franka gripper with two custom compact TacTip fingers and wrist RealSense D435. **Tactile Gym 2.0/PyBullet, PPO**, combined with neural descriptors and a real-to-sim pix2pix image translator.
- **Transfer:** No physical task-policy fine-tuning, but image translation uses **5,000 paired training images per sensor**. Learned grasp refinement precedes programmed trajectory replay; this is not transfer without real data.
- **SIM → REAL:** Selected extraction/insertion task: **86.7% SIM**, 60 trials; physical bolt **55%**, plug **25%**, USB **15%**, averaging **31.7%** as reported. Physical trial counts are not stated. Authors explicitly compare the two means: approximately **36.6% retention**.
- **Score: 1, task-level comparison.** The large gap includes changed objects, clearances and initial conditions; this is not a paired-geometry estimate of physics mismatch alone.
- **Evidence:** [§IV-B/C, §V-B/C and Tables II/IV, PDF pp. 5–9](https://arxiv.org/pdf/2510.20390v2#page=8).
- **Video / GitHub:** [Project and physical task videos](https://yijionglin.github.io/neuraltouch/) · [Linked GitHub repository](https://github.com/yijionglin/neuraltouch) contains the **project website**, not the policy's training/deployment source. Task-source release not located.
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

### D3P (2026)

**D3P: Dynamic Denoising Diffusion Policy via Reinforcement Learning**

Learns how many diffusion steps to spend on each action, then demonstrates physical square-nut assembly.

- **DOI / venue:** [10.48550/arXiv.2508.06804](https://doi.org/10.48550/arXiv.2508.06804) **(preprint DOI)** · IROS 2026 per the [coauthor's publication list](https://zoeyuchao.github.io/); first preprint 2025.
- **Robot / learning:** Franka, model unspecified; grasping gripper, RealSense D435i and joint positions. **robomimic/robosuite/MuJoCo**; diffusion BC, DPPO base-policy fine-tuning and PPO for a denoising adaptor.
- **Transfer:** SIM-trained policy; a latent diffusion model trained on simulated image pairs restyles physical observations. Camera-parameter curriculum and matching printed parts support transfer.
- **SIM / REAL:** SIM reports task success; REAL reports **33.68 Hz**, versus **17.59 Hz** for fixed-step diffusion, and successful assembly snapshots. No physical task-success rate or trial denominator is supplied.
- **Score: 0.** Physical task outcomes remain qualitative. Runtime measurements quantify inference efficiency, not retained task performance.
- **Evidence / photos:** [Real-world Deployment, Fig. 7 and Appendix D/Fig. 14](https://arxiv.org/pdf/2508.06804v1#page=19).
- **Video / GitHub:** A supplementary video is mentioned, but a verified public video URL and task-specific source were not located.
- **Last reviewed:** 2026-10-01.

### D-SafeMPC (2026)

**D-SafeMPC: Diffusion-Driven Safe Model Predictive Control with Discrete-Time Control Barrier Functions**

Transfers an imitation-trained trajectory diffusion model to physical obstacle avoidance with constrained MPC refinement.

- **DOI / venue:** [10.48550/arXiv.2607.10842](https://doi.org/10.48550/arXiv.2607.10842) **(preprint DOI)** · IROS 2026 per the [author's project page](https://erdisayar.github.io/publications/d_safempc/).
- **Robot / learning:** Physical Franka model unspecified; state feedback through franky, with a fixed end-effector trajectory task. **D3IL/MuJoCo** simulated demonstrations train a Diffuser-style temporal U-Net. CBF/CLF guidance and MPC modify generated trajectories.
- **Transfer:** SIM-only diffusion training; physical execution reduces the relative dynamics factor to **0.05**. The physical experiment uses **static obstacles**.
- **SIM / REAL:** Table I reports simulated goal/safe-goal rates, including **80%/80%** for static obstacles. Physical results illustrate execution but provide no separate task-success count or rate.
- **Score: 0.** Quantitative simulation results cannot substitute for physical evaluation.
- **Evidence / photos:** [§V-A and Fig. 2, PDF pp. 6–7](https://arxiv.org/pdf/2607.10842v1#page=6).
- **Video / GitHub:** Standalone public physical video not located. [Official source](https://github.com/erdiphd/D-SafeMPC) documents model training and evaluation; complete hardware deployment coverage is not established.
- **Last reviewed:** 2026-10-01.

### FluidLab (2023)

**FluidLab: A Differentiable Environment for Benchmarking Complex Fluid Manipulation**

Optimizes a stirring trajectory in differentiable fluid simulation and executes it on a real robot to create latte art.

- **DOI / venue:** [10.48550/arXiv.2303.02346](https://doi.org/10.48550/arXiv.2303.02346) **(preprint DOI)** · ICLR 2023.
- **Robot / learning:** **Franka Emika; model not reported**, parallel-jaw gripper holding a latte-art tool. **FluidEngine/Taichi**, gradient-based open-loop trajectory optimization. The physical demonstration does not establish deployment of the paper's PPO/SAC benchmark agents.
- **Transfer:** Selected **Latte Art (Stirring)** trajectory is optimized in SIM and replayed using physical velocity control. The paper discusses differences in material behavior.
- **SIM / REAL:** SIM reports optimization results; REAL task evidence is qualitative. No physical success rate, trial count or quantitative pattern-error comparison is supplied.
- **Score: 0.** Physical execution is demonstrated, but quantitative task-transfer performance is unavailable.
- **Evidence:** [§5.2 and Appendix D, PDF pp. 9/16](https://arxiv.org/pdf/2303.02346v1#page=16).
- **Video / GitHub:** [Latte-art demonstration](https://fluidlab2023.github.io/static/videos/latte_art.mp4) · [Project](https://fluidlab2023.github.io/) · [Environments and optimization source with instructions](https://github.com/zhouxian/FluidLab). Complete physical execution software coverage not established.
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

### Continuous control (2022)

**Continuous control actions learning and adaptation for robotic manipulation through reinforcement learning**

Adapts simulated grasping policies for smooth motion and obstacle avoidance, then runs them on a physical Panda.

- **DOI / venue:** [10.1007/s10514-022-10034-z](https://doi.org/10.1007/s10514-022-10034-z) · Autonomous Robots, 2022.
- **Robot / learning:** Panda, parallel gripper, state observations; modified robosuite/MuJoCo 2.00. PPO is the deployed method; SAC is also compared. Policy adaptation occurs in SIM, followed by zero-shot REAL deployment.
- **SIM / REAL:** REAL grasp-and-lift succeeds **10/10 without obstacles and 10/10 with obstacles**. SIM Table 1 reports base-policy generalization, whereas hardware uses policies subsequently adapted for control constraints and obstacles.
- **Score: Unrated.** No matching SIM success rate is given for the deployed adapted checkpoints; the base policy's success is not their denominator.
- **Evidence:** [§§5.2–5.4, especially real-robot experiments](https://link.springer.com/article/10.1007/s10514-022-10034-z).
- **Video / GitHub:** [Real-robot video linked by the authors](https://drive.google.com/file/d/1zlS-_HIWMlIAvrxqGNGRyMbuDfQrws8z/view) · [Simulation training source](https://github.com/Asad-Shahid/Intelligent-Task-Learning).
- **Last reviewed:** 2026-10-01.

### Centralized dual-arm assembly (2022)

**Learning to Centralize Dual-Arm Assembly**

Learns one coordinating policy above two independent arm controllers for cooperative peg insertion.

- **DOI / venue:** [10.3389/frobt.2022.830007](https://doi.org/10.3389/frobt.2022.830007) · Frontiers in Robotics and AI, 2022.
- **Robot / learning:** Two Pandas with peg/hole fixtures attached to their grippers and proprioceptive observations. PyBullet; SAC + hindsight experience replay. Zero-shot task policy, with real controller limits/gains adjusted.
- **SIM / REAL:** Selected REAL setting: **2 mm clearance, Cartesian impedance**, approximately **67% success**, estimated from Fig. 6. Joint-position and variable-impedance alternatives are approximately 5% and 14%. REAL trial count is not specified in that section.
- **Score: Unrated.** SIM learning curves cover multiple controller/clearance configurations and seeds; a matching scalar result for the deployed checkpoint is not established.
- **Evidence:** [§5.3 and Fig. 6, PDF pp. 9–10](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2022.830007/pdf#page=9).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=IjAEWvnGykc) · [Project](https://sites.google.com/view/dual-arm-assembly/home). Public task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### Latent prediction (2023)

**Sim-to-real via latent prediction: Transferring visual non-prehensile manipulation policies**

Transfers a visual pushing policy by adapting its visual representation on real interaction data.

- **DOI / venue:** [10.3389/frobt.2022.1067502](https://doi.org/10.3389/frobt.2022.1067502) · Frontiers in Robotics and AI, **2023**; the DOI contains 2022.
- **Robot / learning:** Panda with external RGB observations; gripper model not specified. **Gazebo**; dynamics-aware VAE + SAC. REAL adaptation updates the encoder/decoder while freezing the task policy and learned latent dynamics.
- **SIM / REAL:** Table 3 reports **98% best SIM success** and **92% best REAL success after adaptation**. REAL reaches about 80% after 550 episodes and 90% after 990. The zero-shot result is inconsistent: **5% in Table 3**, versus about 10% in §4.3.
- **Score: Unrated.** No matched SIM evaluation of the final adapted visual policy is supplied; 92/98 would not measure zero-shot retention.
- **Evidence:** [Table 3, §4.3 and Fig. 9](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2022.1067502/full).
- **Video / source:** REAL photos in Fig. 10; official video and GitHub release not located. [Official source is on GitLab](https://gitlab.com/crzz/dvae_s2r_pushing).
- **Last reviewed:** 2026-10-01.

### Curriculum dual-arm assembly (2024)

**Curriculum Design and Sim2Real Transfer for Reinforcement Learning in Robotic Dual-Arm Assembly**

Uses a reverse curriculum and domain randomization to learn cooperative square-peg insertion.

- **DOI / venue:** [10.3390/machines12100682](https://doi.org/10.3390/machines12100682) · Machines, 2024.
- **Robot / learning:** Two Pandas, peg/hole attachments and proprioception; 1 mm clearance. robosuite/MuJoCo; SAC with joint impedance control. Zero-shot physical task policy.
- **SIM / REAL:** SIM: **99.8% over 10,000 trials**, completion time **4.99 ± 0.80 s**. REAL: **100/100**, **4.31 ± 0.34 s**.
- **Score: Unrated.** SIM randomizes initial configurations; the 100 REAL trials start from a fixed nominal configuration. Dividing 100 by 99.8 would conceal this easier, narrower physical evaluation. Timing likewise includes this distribution difference.
- **Evidence:** [§§5.1–5.2 and Fig. 6, PDF pp. 10–11](https://mdpi-res.com/d_attachment/machines/machines-12-00682/article_deploy/machines-12-00682.pdf#page=10).
- **Video / GitHub:** Physical setup photos in Fig. 1; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### Active Search (2024)

**Reinforcement Learning for Active Search and Grasp in Clutter**

Learns when to inspect a cluttered scene and when to grasp objects to retrieve an occluded target.

- **DOI / venue:** [10.1109/IROS58592.2024.10801366](https://doi.org/10.1109/IROS58592.2024.10801366) · IROS 2024.
- **Robot / learning:** **FR3**, explicitly “Franka Emika Research 3” in §IV-B, with wrist depth camera and parallel gripper. PyBullet; branching dueling Q-networks over view/grasp actions with VGN grasp proposals. Zero-shot deployment.
- **SIM / REAL:** SIM: **100% retrieval over 22 held-out scenes**, **65.77 ± 33.33 s**. REAL: three case studies, five runs each. Case (c) takes **54.2 ± 18.70 s**, with two grasps per run.
- **Score: Unrated.** REAL reports case-specific times and grasp counts; those cases are not the 22-scene SIM success benchmark. Completion time is not a success-retention percentage.
- **Evidence:** [§§IV-B, V-B and Table II, PDF p. 6](https://jenjenchung.github.io/anthropomorphic/Papers/Pitcher2024reinforcement.pdf#page=6).
- **Video / GitHub:** [Official Active Search video](https://jenjenchung.github.io/anthropomorphic/Videos/ActiveSearch.mp4). Public task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### ResiP (2025)

**From Imitation to Refinement — Residual RL for Precise Assembly**

Improves assembly demonstrations with residual RL in simulation and distills the resulting behavior into a visual policy.

- **DOI / venue:** [10.1109/ICRA55743.2025.11127442](https://doi.org/10.1109/ICRA55743.2025.11127442) · ICRA 2025.
- **Robot / learning:** Panda, parallel gripper, RGB observations; one-leg furniture assembly. **FurnitureBench/Isaac Gym** for learning, **Isaac Sim** for rendering. Diffusion BC + residual PPO teacher → visual Diffusion BC student using SIM and REAL demonstrations.
- **SIM / REAL:** Selected 40-real-demonstration setting: **5/10** successful physical assemblies with part variation; **6/10** with an obstacle. The **98% SIM teacher** result is from a different policy representation.
- **Score: Unrated.** A matching SIM result for the deployed visual student is unavailable. Real demonstrations contribute to learning; this is not transfer without real training data.
- **Evidence:** [§IV-C, Table II and Appendix XII-B](https://arxiv.org/pdf/2407.16677v4#page=8).
- **Video / GitHub:** [Real deployment clip](https://iai-robust-rearrangement.s3.us-east-2.amazonaws.com/videos/website/real/3_40_real_350_sim.mp4) · [Project](https://residual-assembly.github.io/) · [Training/data instructions](https://github.com/ankile/robust-rearrangement).
- **Last reviewed:** 2026-10-01.

### ReBot (2025)

**ReBot: Scaling Robot Learning with Real-to-Sim-to-Real Robotic Video Synthesis**

Replays real trajectories in simulation to synthesize policy-training videos for physical pick-and-place.

- **DOI / venue:** [10.1109/IROS60139.2025.11246305](https://doi.org/10.1109/IROS60139.2025.11246305) · IROS 2025.
- **Robot / learning:** Panda with Robotiq 2F-85 and RGB input. **Isaac Sim 4.1/Isaac Lab**; imitation fine-tuning of Octo (diffusion actions) and OpenVLA (autoregressive actions/LoRA). Training uses synthetic robot videos combined with real trajectory/background data.
- **SIM / REAL:** OpenVLA + ReBot succeeds **40%, 40%, 50%, 50%** on four physical object-to-plate tasks: **45% average, 10 trials/task**. Octo + ReBot averages 25%.
- **Score: Unrated.** SIM evaluation elsewhere uses different embodiments and task settings, including WidowX and Google Robot. Those results are not a Panda transfer denominator.
- **Evidence:** [Implementation details, §IV-D and Table II, PDF pp. 4–7](https://arxiv.org/pdf/2503.14526v1#page=7).
- **Video / GitHub:** [Real carrot placement](https://yuffish.github.io/assets/rebot/realworld_carrot.mp4) · [Project and other physical tasks](https://yuffish.github.io/rebot/) · [Video-synthesis source](https://github.com/yuffish/rebot).
- **Last reviewed:** 2026-10-01.

### AnyTask (2025)

**AnyTask: an Automated Task and Data Generation Framework for Advancing Sim-to-Real Policy Learning**

Generates simulated manipulation demonstrations automatically and trains point-cloud diffusion policies for physical execution.

- **DOI / venue:** [10.48550/arXiv.2512.17853](https://doi.org/10.48550/arXiv.2512.17853) **(preprint DOI)** · arXiv preprint, 2025; reviewed revision v2, 2026.
- **Robot / learning:** Franka brand is legible on the arm in the official hardware video; **model not reported**. Parallel gripper, four RealSense D455 cameras. Isaac Lab/Isaac Sim; 3D Diffusion Policy BC on 1,000 ViPR-generated SIM demonstrations/task, without real policy-training data.
- **SIM / REAL:** Eight physical tasks cover lifting, stacking, pushing, placement, and drawers: **44% mean success**, **30 trials/task, 240 total**. Fig. 5 displays uncertainty across three ten-trial groups.
- **Score: Unrated.** The SIM data-generator/policy comparisons do not provide a matching eight-task result for these deployed policies.
- **Evidence:** [§4.3, Fig. 5 and Appendix B](https://arxiv.org/pdf/2512.17853v2#page=7).
- **Video / GitHub:** [Real banana lift](https://anytask.rai-inst.com/assets/videos/sim2real/real_pick_banana_small.mp4) · [Official demonstrations](https://anytask.rai-inst.com/). Public task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### FUNCanon (2026)

**FUNCanon: Learning Pose-Aware Action Primitives via Functional Object Canonicalization for Generalizable Robotic Manipulation**

Learns object-centered diffusion primitives from augmented simulation demonstrations for physical placement and pouring.

- **DOI / venue:** [10.48550/arXiv.2509.19102](https://doi.org/10.48550/arXiv.2509.19102) **(preprint DOI; publisher DOI not located)** · ICRA 2026, listed by the [authors' institution](https://tams.informatik.uni-hamburg.de/publications/index.php?content=01-publications).
- **Robot / learning:** “Franka Emika,” **model not reported**, with multiple RealSense cameras; gripper model unspecified. RLBench/CoppeliaSim; FuncDiffuser diffusion BC, functional trajectory augmentation and language-model task decomposition. Zero-shot physical policy.
- **SIM / REAL:** Table III: **88% pick-and-place, 90% Pour L1, 88% Pour L2**. The text states 50 real trials with unknown objects, without clearly allocating that count per condition.
- **Score: Unrated.** SIM benchmarks different variation suites; real evaluation also filters unreachable targets. There is no matched SIM denominator for the deployed conditions.
- **Evidence:** [§IV and Table III, PDF p. 7; Appendix E](https://arxiv.org/pdf/2509.19102v2#page=7).
- **Qualitative / GitHub:** [Official real-experiment media and supplement](https://sites.google.com/view/funcanon). A separate video URL and public task-specific GitHub release were not located.
- **Last reviewed:** 2026-10-01.

### Sim-to-online RL (2026)

**What Matters for Simulation to Online Reinforcement Learning on Real Robots**

Studies how a simulation-trained visual picking policy improves through subsequent online interaction with a real Panda.

- **DOI / venue:** [10.48550/arXiv.2602.20220](https://doi.org/10.48550/arXiv.2602.20220) **(preprint DOI)** · arXiv preprint, 2026; published venue not verified.
- **Robot / learning:** Panda with gripper-mounted camera and proprioception; camera/gripper models unspecified. MuJoCo Playground/Brax; SAC with BRO critic and DrQ-style visual learning. Explicit **online REAL RL fine-tuning** after SIM pretraining.
- **SIM / REAL:** Selected task: lift a cube and bring it within 5 cm of a goal. Hardware experiments use **three seeds** and report mean return with standard error over fine-tuning. Zero-shot picking often fails; online learning improves returns.
- **Score: Unrated.** The reward learning curves are quantitative, but do not establish a matched SIM/REAL success-retention pair for the adapted policy.
- **Evidence:** [§5, Figs. 4/6/9 and hardware appendix](https://arxiv.org/pdf/2602.20220v2#page=7).
- **Video / GitHub:** Physical photos in Fig. 1; official public video not located. [Panda training and ROS utilities](https://github.com/yardenas/panda-rl-kit).
- **Last reviewed:** 2026-10-01.

### VLAJS (2026)

**Vision-Language-Action Jump-Starting for Reinforcement Learning Robotic Agents**

Uses temporary VLA guidance to bootstrap simulated RL, then deploys the learned manipulation policy on a Panda.

- **DOI / venue:** [10.48550/arXiv.2604.13733](https://doi.org/10.48550/arXiv.2604.13733) **(preprint DOI)** · [ICRA 2026 RL4IL workshop](https://rl4il-icra.github.io/assets/papers/P11_vision.pdf), not the main conference.
- **Robot / learning:** Panda, parallel gripper and camera-based object detection; sensor model unspecified. ManiSkill/SAPIEN; PPO with annealed OpenVLA/Octo guidance and directional regularization. Zero-shot task-policy deployment with YOLO state estimation.
- **SIM / REAL:** Table II: **70% cube lifting, 80% pick-and-place, 20% peg reorientation**, **20 REAL trials/task**. SIM results compare multiple reward variants and training budgets.
- **Score: Unrated.** The REAL table does not identify a matching SIM checkpoint result among those variants; an aggregate SIM curve is not a defensible task denominator.
- **Evidence:** [§IV, Table II and Fig. 9, PDF p. 8](https://arxiv.org/pdf/2604.13733v2#page=8).
- **Video / GitHub:** Physical photos in Fig. 9; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### MATCH (2026)

**Learning Hybrid-Control Policies for High-Precision In-Contact Manipulation Under Uncertainty**

Learns to switch position/force behavior while inserting a fragile peg under uncertain alignment.

- **DOI / venue:** [10.48550/arXiv.2604.19677](https://doi.org/10.48550/arXiv.2604.19677) **(preprint DOI)** · arXiv preprint, 2026; published venue not verified.
- **Robot / learning:** **FR3**, pregrasped peg and force estimated from joint torque; gripper model unspecified. Isaac Lab/Isaac Sim; PPO with hybrid actions, mode-aware gradients and an auxiliary selection loss. Real controller calibration and policy selection, without reported real policy-weight fine-tuning.
- **SIM / REAL:** At **7.5 mm pose noise**, REAL reaches **68/100**. SIM Fig. 4 reports **39.8%**, averaged across five seeds. Hardware selects the best seed using separate preliminary trials and uses the transfer-training configuration.
- **Score: Unrated.** The five-seed SIM mean is not a matched result for the selected physical policy; 68/39.8 would conflate policy selection and transfer.
- **Evidence:** [§IV, Figs. 4/5, PDF pp. 6–7](https://arxiv.org/pdf/2604.19677v1#page=6).
- **Video / GitHub:** [Official physical insertion clip](https://robonuke.github.io/learning_hybrid-control_for_in-contact_manipulation/assets/real_match.mp4) · [Environment and PPO code](https://github.com/RoboNuke/Continuous_Force_RL).
- **Last reviewed:** 2026-10-01.

### World-action transfer (2026)

**Efficient Sim-to-Real Transfer of World-Action Models from Synthetic Priors**

Post-trains a video-based world-action policy on generated simulation demonstrations for physical tabletop manipulation.

- **DOI / venue:** [10.48550/arXiv.2606.31101](https://doi.org/10.48550/arXiv.2606.31101) **(preprint DOI)** · CVPR 2026 EAI workshop, per the [author's publication page](https://wzx16.github.io/index.html).
- **Robot / learning:** **FR3**, wrist and third-person RGB; gripper/sensor models unspecified. Cosmos Policy video-diffusion imitation learning on approximately 800 synthetic demonstrations/task, generated with AnyTask/ViPR; no real demonstrations for task training.
- **Simulator:** §2.2 calls it a GPU-accelerated simulator and cites **Isaac Gym**. The actual implementation/version is not identified; the parent data-generator's simulator is not silently substituted.
- **SIM / REAL:** Table 1: banana lift **5/10**, brick lift **5/10**, drawer opening **2/10**, strawberry-to-bowl **2/10**; **35% overall**.
- **Score: Unrated.** No corresponding SIM policy-success evaluation is reported.
- **Evidence:** [§§2.2/3 and Table 1, PDF p. 2](https://arxiv.org/pdf/2606.31101v1#page=2).
- **Video / GitHub:** REAL snapshots in Figs. 1/2; official public video and task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### Object-centric residual RL (2026)

**Object-Centric Residual RL for Zero-Shot Sim-to-Real VLA Enhancement**

Trains an object-relative action correction in simulation and attaches it to a real-robot VLA policy.

- **DOI / venue:** [10.48550/arXiv.2606.18953](https://doi.org/10.48550/arXiv.2606.18953) **(preprint DOI)** · arXiv preprint, 2026; published venue not verified.
- **Robot / learning:** **FR3**, visual object-pose estimation; gripper/sensor models unspecified. MuJoCo; TD3 residual over frozen GR00T-N1.5. The residual transfers zero-shot, but the REAL base VLA is trained using **30 real demonstrations/task**.
- **SIM / REAL:** Cube-to-bowl: SIM **17.0/20 ± 2.0**, averaged over three seeds; REAL **16/20 = 80%**, versus 9/20 without the residual.
- **Score: Unrated.** SIM and REAL use separately trained base VLAs. The common residual does not make the complete policies identical, so these counts are not used for composite-policy retention.
- **Evidence:** [§§3/4 and Table 1, PDF p. 6](https://arxiv.org/pdf/2606.18953v1#page=6).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=w7h9SH8vCYI) · [Microsoft Research project](https://www.microsoft.com/en-us/research/articles/object-centric-residual-rl/). Public task-specific GitHub source not located.
- **Last reviewed:** 2026-10-01.

### MoDex (2026)

**MoDex: A Diffusion Policy for Sequential Multi-Object Dexterous Grasping**

Learns arm-and-hand actions that grasp additional objects while retaining objects already held.

- **DOI / venue:** [10.48550/arXiv.2606.05407](https://doi.org/10.48550/arXiv.2606.05407) **(preprint DOI)** · arXiv preprint, 2026; conference acceptance not verified.
- **Robot / learning:** Panda + 16-DoF Allegro Hand, Kinect v3 point clouds. robosuite/MuJoCo; opposition-space-conditioned 3D Diffusion BC + DPPO. SIM-only policy training; REAL adds Gemini-based opposition-space selection.
- **SIM / REAL:** Stages 1/2/3: SIM **75.00% ± 3.68% / 49.58% ± 1.18% / 45.00% ± 2.70%**, REAL **57.78% / 26.67% / 20.00%**. SIM: three seeds, 80 episodes/stage/seed across four opposition spaces. REAL tests five objects, four unseen; the stated attempts and aggregation denominator are not fully clear.
- **Score: Unrated.** SIM averages and REAL selected opposition spaces are unmatched. Later stages are initialized with earlier objects already grasped; 20% is not established as full-sequence success.
- **Evidence:** [§4, Tables 1/3, PDF pp. 7–8](https://arxiv.org/pdf/2606.05407v1#page=7). The project's SIM table differs; paper values take precedence.
- **Video / GitHub:** [Official demonstration video](https://modex2026.github.io/static/videos/MoDex_Silent.mov) · [Project](https://modex2026.github.io/). Its Code button is a placeholder; no verified source release located.
- **Last reviewed:** 2026-10-01.

### VICES (2019)

**Variable Impedance Control in End-Effector Space: An Action Space for Reinforcement Learning in Contact-Rich Tasks**

Learns motion and impedance commands to wipe marker lines from a physical whiteboard.

- **DOI / venue:** [10.1109/IROS40897.2019.8968201](https://doi.org/10.1109/IROS40897.2019.8968201) · IROS 2019.
- **Robot / learning:** Panda with wiping tool, RGB camera and end-effector state; no direct force input. PPO with variable impedance actions; [robosuite/MuJoCo implementation](https://github.com/StanfordVL/robosuite/tree/vices_iros19).
- **Transfer:** Best SIM policy, without retraining. Color segmentation overlays the physical stain onto a rendered robot image; exceeding the payload limit stops execution.
- **SIM / REAL:** SIM measures the fraction of stain elements erased. REAL reports **8/10 successful trials**, defining success as removing more than three quarters of the marker line. One failure triggered the stop; another left too much unwiped.
- **Score: Unrated.** Fraction erased and binary episode success are different metrics.
- **Evidence:** [§V-C, Fig. 6, PDF p. 7](https://arxiv.org/pdf/1906.08880v2#page=7).
- **Video / GitHub:** [Official video](https://youtu.be/AozIUIW3Ghs) · [Project](https://stanfordvl.github.io/vices/) · [Task/controller source](https://github.com/StanfordVL/robosuite/tree/vices_iros19). A complete hardware deployment release is not established.
- **Last reviewed:** 2026-10-01.

### DROPO (2023)

**DROPO: Sim-to-Real Transfer with Offline Domain Randomization**

Fits a simulator's randomization distribution from a short physical trajectory, then trains a box-pushing policy in simulation.

- **DOI / venue:** [10.1016/j.robot.2023.104432](https://doi.org/10.1016/j.robot.2023.104432) · Robotics and Autonomous Systems 166, 2023.
- **Robot / learning:** Panda, pushing end effector, joint encoders and OptiTrack. CMA-ES fits dynamics distributions; task control uses RL. The paper names **PPO and SAC**, but does not clearly assign one to the Panda task. Its MuJoCo framework is public; the pushing subsection does not explicitly identify its backend.
- **Transfer:** One approximately **13-second kinesthetic trajectory** calibrates dynamics. The policy itself learns in SIM; no physical policy fine-tuning.
- **SIM / REAL:** SIM reports episode returns. REAL evaluates endpoint distance over **five rollouts/policy/seed, three seeds**, reaching as close as **2 cm**; that is not a reported mean error or success rate.
- **Score: Unrated.** No matching success-rate denominator or justified error normalization.
- **Evidence:** [§4.3.2, Figs. 8/11/12, PDF pp. 9–10](https://arxiv.org/pdf/2201.08434v2#page=9).
- **Video / GitHub:** [Official demo](https://gabrieletiboni.github.io/dropo/assets/video/dropo_video_v1_trimmed_official.mp4) · [Domain-randomization code](https://github.com/gabrieletiboni/dropo), with a documented Hopper example; Panda deployment coverage is unverified.
- **Last reviewed:** 2026-10-01.

### ASID (2024)

**ASID: Active Exploration for System Identification in Robotic Manipulation**

Explores a rod's dynamics, then learns where to grasp it so the physical Panda can balance it on a support.

- **DOI / venue:** [10.48550/arXiv.2404.12308](https://doi.org/10.48550/arXiv.2404.12308) **(preprint DOI)** · [ICLR 2024, oral](https://openreview.net/forum?id=jNR6s6OSBT).
- **Robot / learning:** Panda with grasping gripper and two RealSense D455 cameras. MuJoCo; **PPO exploration**, system identification, then **CEM optimization of a one-step task policy** parameterizing the grasp point. This is learned primitive-parameter selection, not a neural torque policy.
- **Transfer:** Physical exploration updates the simulator before task-policy optimization; the resulting task policy transfers without physical task-policy fine-tuning.
- **SIM / REAL:** SIM assesses post-placement tilt angle. REAL success is **2/3, 1/3, 3/3** for left/middle/right mass distributions: **6/9 overall**.
- **Score: Unrated.** Tilt error and successful balancing episodes are not interchangeable metrics.
- **Evidence:** [§§4.1–4.3, 5.2/5.5, Tables 1/2](https://arxiv.org/pdf/2404.12308v2#page=8).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=dfGIpLrd2nk) · [Source](https://github.com/WEIRDLabUW/asid), documenting Fisher-information exploration training; complete task/hardware coverage is not established.
- **Last reviewed:** 2026-10-01.

### GenSim2 (2024)

**GenSim2: Scaling Robot Data Generation with Multi-modal and Reasoning LLMs**

Imitates generated simulation demonstrations to manipulate articulated objects with one language-conditioned physical-robot policy.

- **DOI / venue:** [10.48550/arXiv.2410.03645](https://doi.org/10.48550/arXiv.2410.03645) **(preprint DOI)** · [CoRL 2024; proceedings published 2025](https://proceedings.mlr.press/v270/hua25a.html).
- **Robot / learning:** **FR3**, modified TPU parallel gripper, three RealSense D435 cameras. **SAPIEN** demonstration generation; BC with a proprioceptive point-cloud Transformer (PPT). Diffusion, Transformer and MLP action heads are studied; Table 2 does not separately name its selected head.
- **Transfer:** Selected setting uses **100 SIM demonstrations/task**, without real task demonstrations.
- **REAL:** Ten trials/task: open/close laptop **70%/50%**, open/close safe **10%/30%**, close drawer **80%**, swing bucket **50%**, open/close box **50%/0%**; mean **42.5% over 80 trials**. Co-training with real demonstrations is a separate setting.
- **Score: Unrated.** No matching SIM evaluation for this eight-task hardware suite; RLBench averages are unsuitable denominators.
- **Evidence:** [Table 2 and Appendix C](https://arxiv.org/pdf/2410.03645v1#page=9).
- **Video / GitHub:** [Project with physical demos and training-setting comparisons](https://gensim2.github.io/) · [Generation, policy training and real-robot instructions](https://github.com/GenSim2/GenSim2).
- **Last reviewed:** 2026-10-01.

### Get a Grip (2024)

**Get a Grip: Multi-Finger Grasp Evaluation at Scale Enables Robust Sim-to-Real Transfer**

Learns grasp proposals and their quality from simulated outcomes, then executes selected grasps on an arm with an Allegro hand.

- **DOI / venue:** [10.48550/arXiv.2410.23701](https://doi.org/10.48550/arXiv.2410.23701) **(preprint DOI)** · [CoRL 2024; proceedings published 2025](https://proceedings.mlr.press/v270/lum25b.html).
- **Robot / learning:** **FR3 + Allegro Hand**, wrist ZED 2i using monocular RGB for NeRF reconstruction. **Isaac Gym** produces grasp labels; selected method uses a diffusion sampler and supervised BPS grasp evaluator, followed by motion planning.
- **Transfer:** SIM-trained grasp models; real images reconstruct each object without physical grasp-policy fine-tuning.
- **SIM / REAL:** SIM evaluates 212 held-out objects with perturbed grasps. REAL Diffusion+BPS succeeds **81/100**, five attempts on each of 20 objects. Success requires lifting 20 cm without dropping.
- **Score: Unrated.** SIM violin plots do not provide a matching scalar success statistic. Pre-grasp motion-planning/execution failures are discarded from physical grasp evaluation.
- **Evidence:** [§4, Appendix E.3, Table 4, PDF p. 26](https://arxiv.org/pdf/2410.23701v1#page=26).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=leN322X3g6E) · [Dataset generation, model training and grasp/motion planning](https://github.com/tylerlum/get_a_grip).
- **Last reviewed:** 2026-10-01.

### Exploration-policy transfer (2024)

**Overcoming the Sim-to-Real Gap: Leveraging Simulation to Learn to Explore for Real-World RL**

Transfers simulated exploration behaviors to supply useful physical data for learning to push a puck to the table edge.

- **DOI / venue:** [10.52202/079017-2500](https://doi.org/10.52202/079017-2500) · [NeurIPS 2024](https://papers.nips.cc/paper_files/paper/2024/hash/8fa068ffe59817175d176bd75641fe16-Abstract-Conference.html).
- **Robot / learning:** Panda, parallel gripper, RealSense D435. SAC task policy plus **15 learned exploration policies** in a custom Franka simulator. MuJoCo is explicitly named for the paper's separate hammering simulation; the physical pushing task's backend is not explicitly restated.
- **Transfer:** SIM pretraining followed by **physical SAC fine-tuning** using exploration-policy rollouts. Neither method succeeds zero-shot in the reported setup.
- **REAL:** Exploration transfer learns successful behavior in **all six training runs**; direct-transfer fine-tuning fails in all six. Reward curves quantify learning; six successful learning runs are not a six-trial task success rate.
- **Score: Unrated.** No matched final-policy SIM/REAL success comparison.
- **Evidence:** [§5.4, Fig. 1, Appendix E.5](https://papers.nips.cc/paper_files/paper/2024/file/8fa068ffe59817175d176bd75641fe16-Paper-Conference.pdf#page=10).
- **Video / GitHub:** Physical setup in Fig. 1. Public task-demo video and source release not located; the publication checklist states code had not been released.
- **Last reviewed:** 2026-10-01.

### TacSL (2025)

**TacSL: A Library for Visuotactile Sensor Simulation and Learning**

Learns a recurrent tactile-image policy that inserts a peg despite uncertain in-gripper pose.

- **DOI / venue:** [10.1109/TRO.2025.3547267](https://doi.org/10.1109/TRO.2025.3547267) · IEEE Transactions on Robotics, 2025.
- **Robot / learning:** Franka, model unspecified; GelSight tactile fingertips and proprioception. **TacSL/Isaac Gym/PhysX**, recurrent PPO with asymmetric actor-critic distillation (AACD) and tactile image augmentation. The released Gym toolkit is distinct from the announced Isaac Lab migration.
- **Transfer:** Selected **Color-Aug peg-insertion** policy, zero-shot after sensor/contact calibration.
- **REAL:** **67/81 = 82.7%**, covering three socket locations with varied initial end-effector and peg-in-gripper poses. Fig. 11 specifies **5 mm diametral clearance** for the physical socket.
- **Score: Unrated.** SIM learning curves and modality/asset comparisons do not establish a matching final Color-Aug checkpoint and physical evaluation protocol.
- **Evidence:** [§VI-C, Figs. 10–12, PDF pp. 11–12](https://arxiv.org/pdf/2408.06506v2#page=11).
- **Video / GitHub:** [Official video](https://player.vimeo.com/video/836005050?h=4076666d68) · [Documented simulation/policy-learning release](https://github.com/isaac-sim/IsaacGymEnvs/blob/tacsl/isaacgymenvs/tacsl_sensors/install/tacsl_setup.md).
- **Last reviewed:** 2026-10-01.

### SimLauncher (2025)

**SimLauncher: Launching Sample-Efficient Real-world Robotic Reinforcement Learning via Simulation Pre-training**

Uses a simulation-trained visual policy to initialize exploration and improve physical banana-to-scale placement through online RL.

- **DOI / venue:** [10.1109/IROS60139.2025.11246668](https://doi.org/10.1109/IROS60139.2025.11246668) · [IROS 2025, oral](https://simlauncher.github.io/).
- **Robot / learning:** Franka, model unspecified; Franka Hand and two external RGB views. Selected pick-and-place task uses **Isaac Gym physics + 3DGS rendering**. Privileged RL teacher → visual BC → **RLPD with IBRL-style BC action/target proposals**. MuJoCo is used for the separate dexterous task.
- **Transfer:** Physical/controller calibration, SAM2 masking, 20 successful physical policy rollouts and online real-robot updates. Humans reset objects and assign success rewards.
- **REAL:** **100%** at the earliest qualifying checkpoint after **37.5 ± 5.3 minutes** of training; evaluation uses **20 trials/seed, three seeds**.
- **Score: Unrated.** Adapted performance and time-to-threshold are reported; a matching SIM denominator for the deployed composite policy is unavailable.
- **Evidence:** [§§III–IV, Table I, PDF pp. 3–5](https://arxiv.org/pdf/2507.04452v1#page=5).
- **Video / GitHub:** [Physical training video](https://simlauncher.github.io/static/videos/SimLauncher_place_45x_annotated_480p.mov). Only the project website repository was located, not task source.
- **Last reviewed:** 2026-10-01.

### CLASH (2026)

**CLASH: Collision Learning via Augmented Sim-to-real Hybridization to Bridge the Reality Gap**

Learns striking actions in a simulator whose collision predictions are corrected with physical data.

- **DOI / venue:** [10.48550/arXiv.2602.18707](https://doi.org/10.48550/arXiv.2602.18707) **(preprint DOI)** · arXiv preprint, 2026.
- **Robot / learning:** Seven-DoF Franka, model unspecified; held impact tool and motion capture. **MuJoCo + learned collision override**; SAC through Stable-Baselines3 chooses impact locations and velocities for sequential pushing.
- **Transfer:** Real collision samples adapt the simulator; SAC then trains in that hybrid simulator. A high-level route planner composes the learned local behavior.
- **REAL:** Full-route success **8/10, 5/10, 5/10** across three routes. Pure-MuJoCo-trained baselines obtain **4/10, 2/10, 1/10** on the physical robot.
- **Score: Unrated.** Both rows are REAL evaluations of differently trained policies. They are not SIM and REAL scores. Segment-completion rates likewise differ from complete-route success.
- **Evidence:** [§IV-C, Table VII, PDF p. 7](https://arxiv.org/pdf/2602.18707v2#page=7); physical setup in §IV/Fig. 3.
- **Video / GitHub:** Physical experiments are pictured in the paper. Public official task video and source not located in paper, title or author-page searches.
- **Last reviewed:** 2026-10-01.

### RFS (2026)

**RFS: Reinforcement Learning with Residual Flow Steering for Dexterous Manipulation**

Refines simulated dexterous behaviors and adapts their point-cloud student using physical corrective demonstrations.

- **DOI / venue:** [10.48550/arXiv.2602.01789](https://doi.org/10.48550/arXiv.2602.01789) **(preprint DOI)** · [ICLR 2026](https://weirdlabuw.github.io/rfs/).
- **Robot / learning:** Franka, model unspecified, **LEAP Hand**, point-cloud observations and 10 Hz Cartesian impedance control. **Isaac Lab/Isaac Sim**; flow-matching BC + PPO residual/noise steering → point-cloud distillation → offline **TD3+BC** adaptation.
- **Transfer:** SIM-generated student data; **50 real human corrective demonstrations** support physical fine-tuning.
- **REAL:** Selected seen-object grasping: **43.3% ± 6.2% zero-shot**, **80.0% ± 2.9% after RFS adaptation**; Table 2 labels intervals as 95% confidence intervals. Appendix A.3 specifies 20 evaluations per known object.
- **Score: Unrated.** Table 1's privileged SIM policy is not the visual student or its physically adapted version.
- **Evidence:** [§§5.2–5.3, Table 2; Appendix A.3](https://arxiv.org/pdf/2602.01789v3#page=8).
- **Video / GitHub:** [Official project with physical grasping videos](https://weirdlabuw.github.io/rfs/). Code remains marked **Coming Soon**; no verified task release located.
- **Last reviewed:** 2026-10-01.

### Tac2Real (2026)

**Tac2Real: Reliable and GPU Visuotactile Simulation for Online Reinforcement Learning and Zero-Shot Real-World Deployment**

Learns tactile peg insertion using a calibrated deformable-contact simulation coupled to robot dynamics.

- **DOI / venue:** [10.48550/arXiv.2603.28475](https://doi.org/10.48550/arXiv.2603.28475) **(preprint DOI)** · arXiv preprint, 2026; main-conference acceptance not verified.
- **Robot / learning:** Panda with two GelSight Mini sensors; policy uses the right finger's marker displacements, end-effector pose and previous action. **Isaac Lab + PNCG-IPC**, PPO through rl-games.
- **Transfer:** TacAlign uses real calibration for controllers/contact/sensors. Policy weights transfer zero-shot; hardware adds a protective backstep-and-resume mechanism.
- **SIM / REAL:** Table 3 reports **77.6% SIM** over 256 initial configurations, versus **55/60 = 91.7% REAL**. SIM samples initial orientations within **±35°**; REAL tests **0°, ±15°**, 20 trials each.
- **Score: Unrated.** Narrower physical orientation coverage and the added recovery behavior prevent a matched retention assessment.
- **Evidence:** [§§5.3–5.4, Table 3, PDF pp. 12–14](https://arxiv.org/pdf/2603.28475v1#page=12).
- **Video / GitHub:** [Official project and visualizations](https://ningyurichard.github.io/tac2real-project-page/) · [Repository](https://github.com/InternRobotics/Tac2Real), currently a release announcement saying code will follow acceptance. Physical snapshots: Fig. 8; standalone public demo video not located.
- **Last reviewed:** 2026-10-01.

### Tune to Learn (2026)

**Tune to Learn: How Controller Gains Shape Robot Policy Learning**

Trains reaching policies under different controller gains and measures how closely physical trajectories follow simulation.

- **DOI / venue:** [10.15607/RSS.2026.XXII.139](https://doi.org/10.15607/RSS.2026.XXII.139) · [RSS 2026](https://roboticsproceedings.org/rss22/p139.html).
- **Robot / learning:** **FR3**, joint position/velocity feedback; no task-specific grasping attachment needed. **Isaac Lab/Isaac Sim**, PPO through SKRL with gain-specific system identification and hyperparameter search. Deployment uses aiofranka.
- **Transfer:** Physical excitation identifies each simulator's dynamics; reaching policies train in SIM and deploy without physical policy fine-tuning. The paper's real-only BC experiments are separate.
- **SIM / REAL:** Thirty physical rollouts per gain cell, paired initial/goal configurations. For joint reaching without domain randomization, mean trajectory-error statistic is **0.043** in the stiff-overdamped region versus **0.010** elsewhere. Equation 11 combines squared joint position and velocity discrepancies; these are not success percentages or pure position errors.
- **Score: Unrated.** Direct quantitative transfer-error evidence, but no valid success-retention normalization.
- **Evidence:** [§IV-C, Appendix I/Table VIII](https://arxiv.org/pdf/2604.02523v1#page=17).
- **Video / GitHub:** [Official video](https://youtu.be/4KR8p2wuoIg) · [Project](https://younghyopark.me/tune-to-learn/). Project-site source exists; complete task-training source not located.
- **Last reviewed:** 2026-10-01.

### Collision mesh poisoning (2026)

**“Your Robot Was Trained on a Lie”: Collision Mesh Poisoning Attacks on Robotic Manipulation**

Tests whether policies trained with altered collision geometry produce failing grasps on physical replicas.

- **DOI / venue:** [10.48550/arXiv.2609.18122](https://doi.org/10.48550/arXiv.2609.18122) **(preprint DOI)** · arXiv preprint, 2026.
- **Robot / learning:** Panda with grasping gripper; calibrated workspace and known object poses. **PPO/RSL-RL**; the inspected paper does **not name its training simulator**.
- **Transfer:** Original checkpoints, no retraining. Physical execution replays **policy-derived grasp poses under a controlled protocol**, rather than demonstrating fully closed-loop deployment with online perception.
- **SIM / REAL:** Poisoned policies on sugar box/mustard bottle/mug: clean-geometry SIM success **13.66%/15.38%/70.95%**; REAL **10%/15%/70%**. REAL uses 20 poses/object/policy, three repeats and majority voting; **360 executions** include benign controls.
- **Score: Unrated.** Controlled grasp replay, printed materials and majority-vote aggregation differ from SIM evaluation. These SIM values are **BSSR**, not success on the poisoned training assets; the REAL benign-to-poisoned drop is not retention.
- **Evidence:** [§6, Table 5 and Appendix B/Fig. 13](https://arxiv.org/pdf/2609.18122v1#page=11).
- **Video / GitHub:** Physical frames in Fig. 13. Public official video and task source not located.
- **Last reviewed:** 2026-10-01.

### CRSfD (2022)

**Reinforcement learning with Demonstrations from Mismatched Task under Sparse Reward**

Uses demonstrations for one hole shape to guide simulated learning of insertion policies for other shapes, then transfers them to Panda.

- **DOI / venue:** [10.48550/arXiv.2212.01509](https://doi.org/10.48550/arXiv.2212.01509) **(preprint DOI)** · [CoRL 2022, PMLR volume 205 published in 2023](https://proceedings.mlr.press/v205/guo23a.html).
- **Robot / learning:** Panda, proprioceptive feedback, 3D-printed digit-shaped pegs/holes with 1 mm clearance. **SACfD with conservative reward shaping**, using an estimated expert value function. The paper and supplement do **not identify the simulator engine**.
- **Transfer:** SIM-trained policies with randomized initial positions, hole offsets and friction; no real policy fine-tuning reported.
- **REAL:** Digits **0/1/2/3/4: 100%/100%/92%/92%/96%**, each over **25 trials**; **120/125 = 96%** overall.
- **Score: Unrated.** SIM learning curves cover multiple task-mismatch settings; a matching result for the final domain-randomized physical policies is not established.
- **Evidence / photos:** [§5.2, Table 1 and Fig. 5, PDF p. 8](https://arxiv.org/pdf/2212.01509v2#page=8).
- **Video / GitHub:** Official public video and task source not located in the paper, proceedings, supplement or title/author searches.
- **Last reviewed:** 2026-10-01.

### Pre/post-contact decomposition (2023)

**Pre- and post-contact policy decomposition for non-prehensile manipulation with zero-shot sim-to-real transfer**

Learns how to establish contact and subsequently push, tumble and reorient objects using environmental support.

- **DOI / venue:** [10.1109/IROS55552.2023.10341657](https://doi.org/10.1109/IROS55552.2023.10341657) · IROS 2023.
- **Robot / learning:** Panda with a high-friction glove over its gripper and RealSense D435. **Isaac Gym; PPO** for pre/post-contact policies; supervised pre-contact distillation and a synthetic-image keypoint detector.
- **Transfer:** SIM-trained policies, joint-dynamics identification, action-scale curriculum and domain randomization. RRT* supplies the approach trajectory; no physical task-policy fine-tuning reported.
- **Selected task / REAL:** Move the default printed box across a bump to a target pose: **13/15 = 86.67%**, across three initial/goal scenarios. Different materials and deformable objects have separate results.
- **Score: Unrated.** Fig. 5 gives SIM learning curves, but does not isolate the final deployed perception-conditioned pipeline for these three scenarios. The OSC baseline's SIM rates cannot serve as its denominator.
- **Evidence:** [§§III–IV, Fig. 5 and Table III, PDF pp. 5–7](https://arxiv.org/pdf/2309.02754v1#page=5).
- **Video / GitHub:** [Official overview](https://www.youtube.com/watch?v=SVUsKp_ij-U) · [Project and task videos](https://sites.google.com/view/nonprenehsile-decomposition). Official task source not located.
- **Last reviewed:** 2026-10-01.

### AdaptSim (2023)

**AdaptSim: Task-Driven Simulation Adaptation for Sim-to-Real Transfer**

Uses physical rollouts to adapt the simulator, then learns pushing primitives in that simulator for deployment on Panda.

- **DOI / venue:** [10.48550/arXiv.2302.04903](https://doi.org/10.48550/arXiv.2302.04903) **(preprint DOI)** · [CoRL 2023](https://proceedings.mlr.press/v229/ren23b.html).
- **Robot / learning:** Panda with a printed plate-like pusher replacing the gripper; Azure Kinect RGB-D tracking. **Drake**, off-policy neural task learning; a branching Q-network with Double Q-learning adapts simulation parameters.
- **Transfer:** Selected task: dynamically push the **Heavy bottle** toward a target. The task policy predicts pushing angle/speed for an open-loop primitive. Real rollouts update the simulator; subsequent task-policy training happens in SIM.
- **REAL:** Table 4's normalized reward rises **0.30 → 0.83** with **16 real adaptation trajectories**. This reward is based on endpoint error, **not an 83% success rate**. Fig. 5 pushing evaluations average ten trials.
- **Score: Unrated.** Table 3's SIM rewards concern separate within-/out-of-domain target environments, not a matched retention evaluation for the Heavy bottle.
- **Evidence:** [§§5.2/6.1–6.2, Table 4 and Appendix A4.1](https://arxiv.org/pdf/2302.04903v2#page=5).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=p2msMCOFDDg) · [Project](https://irom-lab.princeton.edu/AdaptSim/) · [Simulation and adaptation source](https://github.com/irom-princeton/AdaptSim). Physical deployment code coverage not established.
- **Last reviewed:** 2026-10-01.

### CORN (2024)

**CORN: Contact-based Object Representation for Nonprehensile Manipulation of General Unseen Objects**

Learns contact-aware object features and a policy that pushes, rolls, topples and pivots objects into target poses.

- **DOI / venue:** [10.48550/arXiv.2403.10760](https://doi.org/10.48550/arXiv.2403.10760) **(preprint DOI)** · ICLR 2024.
- **Robot / learning:** **Panda**, explicitly identified in the [official physical-deployment instructions](https://github.com/iMSquared/corn/blob/main/pkm/scripts/real/README.md); glove-covered gripper, three RealSense D435 cameras, ICP/optional AprilTags. **Isaac Gym**, contact representation pretraining, **PPO teacher → DAgger student**.
- **Transfer:** Training entirely in SIM; zero-shot visual-student deployment. Success requires object-pose error below 5 cm and 0.1 rad.
- **REAL:** **57/80 = 71.25%**, printed as 71.3%; five trials each on 16 objects, including two printed training objects.
- **Score: Unrated.** The cited **88.3% SIM** training result belongs to the privileged teacher evaluation. A matching SIM result for the deployed distilled student is unavailable.
- **Evidence:** [§§3.1/4.1–4.2, Fig. 6 and Table 1](https://arxiv.org/pdf/2403.10760v1#page=7).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=TQE-Wku_2sk) · [Project](https://sites.google.com/view/contact-non-prehensile) · [Source with pretraining, PPO, distillation and hardware instructions](https://github.com/iMSquared/corn).
- **Last reviewed:** 2026-10-01.

### SGFT (2025)

**Rapidly Adapting Policies to the Real-World via Simulation-Guided Fine-Tuning**

Transfers simulated policies and value functions, then uses them to guide efficient physical reinforcement learning.

- **DOI / venue:** [10.48550/arXiv.2502.02705](https://doi.org/10.48550/arXiv.2502.02705) **(preprint DOI)** · [ICLR 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/e68274fc4f158dbcbd4dddc672f7ee9c-Abstract-Conference.html).
- **Robot / learning:** **FR3**, parallel-jaw gripper holding a hammer, two RealSense D455 cameras. **SAC** simulation pretraining; SGFT uses value-based reward shaping and short learned-model rollouts with SAC or TD-MPC2. The selected hammering simulator backend is **not explicit** in the inspected paper/release.
- **Transfer:** Hammer a nail into a board; physical RL updates follow SIM pretraining. This is adapted transfer, with 20 initial real rollouts described in Appendix C, not zero-shot success.
- **REAL:** §6.2 reports **100% hammering success within one hour** of fine-tuning; Fig. 4 plots physical learning progress. Evaluation-trial counts are not specified there.
- **Score: Unrated.** No matched quantitative SIM hammering evaluation supports a retention ratio. Real learning curves and sim-to-sim benchmarks are different comparisons.
- **Evidence:** [Published paper §6.2, Fig. 4 and Appendices B–C](https://proceedings.iclr.cc/paper_files/paper/2025/file/e68274fc4f158dbcbd4dddc672f7ee9c-Paper-Conference.pdf#page=9).
- **Video / GitHub:** [Official physical learning demonstrations](https://weirdlabuw.github.io/sgft/) · [Source](https://github.com/WEIRDLabUW/sgft), documented as a **TD-MPC2 sim-to-sim DMC example**, not the physical hammering stack.
- **Last reviewed:** 2026-10-01.

### HAMNet (2025)

**Hierarchical and Modular Network on Non-prehensile Manipulation in General Environments**

Learns modular manipulation strategies for moving objects through cabinets, drawers, bins and other constrained environments.

- **DOI / venue:** [10.15607/RSS.2025.XXI.154](https://doi.org/10.15607/RSS.2025.XXI.154) · [RSS 2025](https://www.roboticsproceedings.org/rss21/p154.html).
- **Robot / learning:** **FR3**, including the real-execution joint limits in Appendix C; narrow replacement gripper with high-friction covering, four RealSense D435 cameras, SAM/Cutie/FoundationPose. **Isaac Gym; UniCORN contact pretraining + modular PPO teacher → DAgger student**.
- **Transfer:** Training entirely in SIM; action clipping and a curriculum accommodate hardware limits. Selected task family: object pose rearrangement across nine physical environments.
- **REAL:** **71/90 = 78.89%**, reported as 78.9%; two objects/domain × five trials each. All physical objects are unseen during policy training.
- **Score: Unrated.** The **75.6% SIM** figure evaluates teacher training; the physical system uses a distilled student. Digital-twin benchmarks also do not supply a matching physical-student denominator.
- **Evidence:** [§IV-C, Table III and Appendix C](https://arxiv.org/pdf/2502.20843v2#page=9).
- **Video / GitHub:** [Official video](https://unicorn-hamnet.github.io/static/videos/rss-video.mp4) · [Project](https://unicorn-hamnet.github.io/). Its [GitHub code link](https://github.com/iMSquared/HAMNet) returned **404** when checked; [benchmark assets](https://huggingface.co/datasets/HAMNet/public/tree/main) are public. Assets do not establish a working code release.
- **Last reviewed:** 2026-10-01.

### DyWA (2025)

**DyWA: Dynamics-adaptive World Action Model for Generalizable Non-prehensile Manipulation**

Learns a policy and future-state predictions together so a physical arm can rearrange objects from one depth view.

- **DOI / venue:** [10.1109/ICCV51701.2025.01029](https://doi.org/10.1109/ICCV51701.2025.01029) · ICCV 2025.
- **Robot / learning:** **Panda**, explicitly labeled in Supplement §6/Fig. 7; gripper and a single RealSense D435. **Isaac Gym; PPO teacher → DAgger student**, combining dynamics adaptation, world modeling and FiLM conditioning.
- **Transfer:** Zero-shot physical policy. A goal point cloud is recorded before repositioning each object; no external pose tracker supplies execution-time object state. ICP evaluates the final pose.
- **SIM / REAL:** Unknown-state/single-view SIM: **82.2% seen / 75.0% unseen**. REAL: **34/50 = 68%**, five trials each on ten unseen objects, including slippery and nonuniform-mass objects.
- **Score: Unrated.** REAL explicitly relaxes orientation evaluation on symmetric objects; equivalent SIM handling is not established. These different object sets and criteria do not justify automatically dividing 68 by 75 or 82.2.
- **Evidence:** [§4.3, Tables 1/3 and Supplement §6](https://arxiv.org/pdf/2503.16806v2#page=7).
- **Video / GitHub:** [Official video](https://pku-epic.github.io/DyWA/medias/videos/supp/supp1.mp4) · [Project](https://pku-epic.github.io/DyWA/) · [Training/evaluation source and checkpoint instructions](https://github.com/jiangranlv/DyWA). Complete hardware coverage not established.
- **Last reviewed:** 2026-10-01.

### DAPL (2026)

**Emerging Extrinsic Dexterity in Cluttered Scenes via Dynamics-aware Policy Learning**

Learns when to avoid or exploit contact with surrounding objects while rearranging a target amid clutter.

- **DOI / venue:** [10.15607/RSS.2026.XXII.149](https://doi.org/10.15607/RSS.2026.XXII.149) · [RSS 2026](https://www.roboticsproceedings.org/rss22/p149.html).
- **Robot / learning:** **FR3** and three RealSense cameras; SAM2/XMem/FoundationPose perception, estimated masses and filtered velocities. **Isaac Lab/PhysX; dynamics representation learning + PPO/RSL-RL → student distillation** with noisy observations.
- **Transfer:** Physical parameter identification and conservative action mapping support transfer; no real task-policy fine-tuning reported.
- **REAL:** **24/50 = 48%**, five trials in each of ten scenes; target-pose error below 5 cm and 0.1 rad within 90 seconds. Human teleoperation achieves 52%, which is a physical baseline.
- **Score: Unrated.** Table I's SIM density benchmarks and the deployed student/physical scenes are not a matched evaluation. Teleoperation is not a SIM denominator.
- **Evidence:** [§IV-B, Table V and Supplement §D](https://arxiv.org/pdf/2603.09882v2#page=8).
- **Video / GitHub:** [Project and physical demonstrations](https://pku-epic.github.io/DAPL/) · [Official application video](https://pku-epic.github.io/DAPL/media/video_web/application.mp4). The [linked repository](https://github.com/SteveOUO/IsaacLab-nonPrehensile) describes a **DyWA-based Isaac Lab template**; the project labels DAPL code “In preparation.” Full DAPL release is not established.
- **Last reviewed:** 2026-10-01.

### GOMP (2026)

**Grasp-Oriented Non-Prehensile Manipulation via Learning a Graspability Field**

Learns to reconfigure initially ungraspable objects and switch autonomously to a predicted grasp.

- **DOI / venue:** [10.48550/arXiv.2606.30474](https://doi.org/10.48550/arXiv.2606.30474) **(preprint DOI)** · ECCV 2026, identified by the paper and official code; publisher DOI not located.
- **Robot / learning:** Physical **FR3**, standard parallel-jaw gripper and three RealSense D435IF cameras; simulated arm is Panda. **Isaac Lab/Isaac Sim** (release instructions specify Sim 5.0), **PPO teacher → online BC distillation** with graspability/grasp-pose prediction.
- **Transfer:** SIM-trained point-cloud student; no real task-policy fine-tuning or external pose tracker. Grasp initiation uses the learned transition signal.
- **SIM / REAL:** Student SIM grasp-preparation success: **75.5% seen / 68.1% unseen**. REAL, ten objects × five trials: manipulation **32/50 = 64%**, subsequent grasps **31/32 = 96.88%**, complete pipeline **31/50 = 62%**.
- **Score: Unrated.** SIM Table 1 explicitly excludes grasp execution. Conditional grasp success cannot substitute for end-to-end success or serve as retention.
- **Evidence:** [§§5.1–5.3, Tables 1/2, PDF pp. 10–13](https://arxiv.org/pdf/2606.30474v1#page=10).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=8WMs58qOctk) · [Project](https://zlicheng.com/gomp_page/) · [Training, distillation, evaluation and checkpoint instructions](https://github.com/Colmar-zlicheng/GOMP). Complete hardware code coverage not established.
- **Last reviewed:** 2026-10-01.

### PA-RL (2026)

**Potential-Field Action Representation for Reinforcement Learning in Contact-Rich Manipulation**

Learns potential-field parameters that guide compliant peg insertion through force-dependent corrections.

- **DOI / venue:** [10.48550/arXiv.2609.21609](https://doi.org/10.48550/arXiv.2609.21609) **(preprint DOI)** · arXiv preprint, 2026.
- **Robot / learning:** **Panda**, ATI force–torque sensor and cylindrical peg; 20 mm peg/23.6 mm hole. **MuJoCo, SAC**, with a 14-dimensional field-parameter action and a fixed Cartesian impedance controller.
- **Transfer:** SIM-trained policy deployed without physical fine-tuning; field feedback remains active between policy updates.
- **SIM / REAL:** SIM reaches **100%** at selected evaluations; **27 episodes per checkpoint per seed**, with three training seeds. REAL completes **9/9** insertions on a 3 × 3 start-offset grid; mean peak force **9.3 N** and completion time **7.18 s**.
- **Score: Unrated.** SIM uses goal offsets of ±50 mm, estimation noise and repeated trials. Fig. 7 does not establish matching physical offset magnitudes, noise or the corresponding deployed checkpoint. The two 100% figures alone do not establish retention.
- **Evidence / photos:** [§IV, Figs. 3/5/7, PDF pp. 5–8](https://arxiv.org/pdf/2609.21609v1#page=5).
- **Video / GitHub:** The paper references a supplementary video, but an official public URL and task-specific GitHub release were not located in the checked sources.
- **Last reviewed:** 2026-10-01.

### SimOpt (2019)

**Closing the Sim-to-Real Loop: Adapting Simulation Randomization with Real World Experience**

Uses physical rollouts to adjust simulation randomization, then retrains a simulated policy that opens a real drawer.

- **DOI / venue:** [10.1109/ICRA.2019.8793789](https://doi.org/10.1109/ICRA.2019.8793789) · ICRA 2019.
- **Robot / learning:** **Panda**, parallel-jaw gripper and DART depth-based tracking; **NVIDIA FleX, PPO**. The policy commands joint velocities and the gripper.
- **Transfer:** SimOpt updates the randomization distribution using three physical rollouts per iteration, followed by policy training in SIM. This uses real interaction data without direct physical task-policy optimization.
- **SIM / REAL:** Drawer opening succeeds in **20/20** physical trials after one SimOpt update. SIM learning curves do not supply a matching success rate for the deployed drawer policy. The paper's **90% swing-peg result belongs to ABB YuMi**, not Franka.
- **Score: Unrated.** Quantitative deployment is established; drawer-policy retention is unavailable.
- **Evidence:** [§IV-A/B/D, Fig. 8, PDF pp. 4–6](https://arxiv.org/pdf/1810.05687v4#page=4).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=nilcJY5Kdt8) · [Project](https://sites.google.com/view/simopt). Public task-specific source not located in the checked paper, project and title/author searches.
- **Last reviewed:** 2026-10-01.

### VGN (2020)

**Volumetric Grasping Network: Real-time 6 DOF Grasp Detection in Clutter**

Learns grasp quality, orientation and width from simulated trials, then clears physical clutter through repeated grasp proposals.

- **DOI / venue:** [10.48550/arXiv.2101.01132](https://doi.org/10.48550/arXiv.2101.01132) **(preprint DOI)** · [CoRL 2020; PMLR volume published 2021](https://proceedings.mlr.press/v155/breyer21a.html).
- **Robot / learning:** **Panda**, parallel-jaw gripper and wrist-mounted RealSense D435; **PyBullet**, self-supervised 3D CNN on simulated grasp outcomes. TSDF input; predicted grasps use a programmed approach, close and transport sequence.
- **Transfer:** SIM-trained network without real fine-tuning. REAL selects the highest eligible grasp and scans continuously; SIM samples eligible grasps and uses six rendered views.
- **SIM / REAL:** SIM five-object pile grasp success is **62.3%** at quality threshold **0.90**, over 200 rounds. REAL uses **ten six-object rounds**: **55 objects removed in 68 attempts**, with grasp success printed as **80%**, and **55/60 = 91.7%** objects removed, printed as 92%.
- **Score: Unrated.** Object counts, grasp selection and observation/execution protocols differ. The physical counts alone imply 80.9% per attempt; retain the paper's differing printed percentage explicitly.
- **Evidence:** [§§5.1–5.3, Table 1 and Fig. 4, PDF pp. 5–7](https://arxiv.org/pdf/2101.01132v1#page=5).
- **Video / GitHub:** [Official video](https://youtu.be/FXjvFDcV6E0) · [Data generation, training, SIM evaluation and Panda ROS instructions](https://github.com/ethz-asl/vgn).
- **Last reviewed:** 2026-10-01.

### CREST (2021)

**Causal Reasoning in Simulation for Structure and Transfer Learning of Robot Manipulation Policies**

Learns which scene variables matter for a stacking primitive and transfers its learned waypoint parameters to a Panda.

- **DOI / venue:** [10.1109/ICRA48506.2021.9561439](https://doi.org/10.1109/ICRA48506.2021.9561439) · ICRA 2021.
- **Robot / learning:** **Panda**, parallel-jaw gripper, Azure Kinect and FrankaPy impedance control. **PPO** trains a partitioned MLP in a **custom approximate internal simulator**. Isaac Gym is a separate target-domain benchmark, not the initial training engine.
- **Transfer:** Zero-shot PMLP block stacking; learned offsets parameterize a waypoint-based motion primitive. Block heights are supplied manually and perception estimates are manually checked.
- **SIM / REAL:** REAL achieves **6/10 actual stacks**. All **10/10** satisfy the paper's looser reward threshold, with mean reward **−0.014 ± 0.004**. SIM pretraining terminates on a reward criterion; the physical context distribution is reduced.
- **Score: Unrated.** The 10/10 reward result is not 100% stacking success, and no matched SIM stacking-success denominator is supplied.
- **Evidence:** [§VI-A, Table IV and Appendix D, PDF pp. 6/9](https://arxiv.org/pdf/2103.16772v2#page=6).
- **Video / GitHub:** [Official video](https://youtu.be/fjA7MS3-mjY) · [Project](https://sites.google.com/view/crest-causal-struct-xfer-manip). Public task-specific source not located.
- **Last reviewed:** 2026-10-01.

### GIGA (2021)

**Synergies Between Affordance and Geometry: 6-DoF Grasp Detection via Implicit Representations**

Jointly learns geometry and grasp affordances from simulated scenes, then removes physical objects using predicted grasps.

- **DOI / venue:** [10.15607/RSS.2021.XVII.024](https://doi.org/10.15607/RSS.2021.XVII.024) · [RSS 2021](https://roboticsproceedings.org/rss17/p024.html).
- **Robot / learning:** **Panda**, parallel-jaw gripper and fixed side-view depth camera; camera model not reported. **PyBullet**, self-supervised implicit grasp and occupancy networks trained on simulated grasp outcomes and meshes.
- **Transfer:** Zero-shot standard GIGA, **Packed** setting. A single-view TSDF produces a grasp proposal; the robot executes it and replans for the remaining clutter.
- **SIM / REAL:** SIM grasp success **83.5% ± 2.4%**, evaluated over 100 five-object rounds. REAL **65/78 = 83.3%**, across 15 five-object rounds; **65/75** objects removed.
- **Score: Unrated.** The object sets differ, and REAL success explicitly requires placing the object in a neighboring bin. SIM describes successful grasping followed by object removal without establishing the same bin-placement criterion. Similar headline percentages do not resolve that difference.
- **Evidence:** [§VI-A/B/E, Tables I/III and Fig. 6, PDF pp. 6–9](https://arxiv.org/pdf/2104.01542v2#page=6).
- **Video / GitHub:** [Official demonstrations](https://sites.google.com/view/rpl-giga2021) · [Data generation, training and evaluation source](https://github.com/UT-Austin-RPL/GIGA). Complete hardware release coverage not established.
- **Last reviewed:** 2026-10-01.

### RL with traditional controls (2023)

**Simulated and Real Robotic Reach, Grasp, and Pick-and-Place Using Combined Reinforcement Learning and Traditional Controls**

Executes a simulated RL agent's successive movements on a synchronized physical Panda through conventional robot control software.

- **DOI / venue:** [10.3390/robotics12010012](https://doi.org/10.3390/robotics12010012) · Robotics 12(1), 2023.
- **Robot / learning:** **Panda**, parallel-jaw gripper and vector end-effector feedback; **PyBullet 3.2.1, PPO**. Selected setting: dense-reward pick-and-place with obstacle avoidance.
- **Transfer:** The agent remains in PyBullet and waits after each step until the physical arm matches it through Franka-ROS/MoveIt. Physical target-object pose feedback is absent. This is synchronized SIM-driven execution, not an independently observed real-world rollout.
- **SIM / REAL:** Tables 3/4 report **85% SIM** and **70% REAL**, with **ten physical tests**. Two grasp attempts are allowed at each grasp position; physical and simulated object geometry differ.
- **Score: Unrated.** Retry allowances and the coupled evaluation protocol prevent a defensible matched retention calculation.
- **Evidence:** [§3.2 and Tables 3/4, PDF pp. 15–16](https://mdpi-res.com/d_attachment/robotics/robotics-12-00012/article_deploy/robotics-12-00012.pdf#page=15).
- **Video / GitHub:** [Official Video S1, ZIP download](https://mdpi-res.com/d_attachment/robotics/robotics-12-00012/article_deploy/robotics-12-00012-s001.zip). Public task-specific source not located. The publisher landing page restricts automated access; the PDF and video archive are accessible.
- **Last reviewed:** 2026-10-01.

### Plug-and-play grasping (2024)

**Toward a Plug-and-Play Vision-Based Grasping Module for Robotics**

Adapts simulation-optimized grasp trajectories to visual object poses and executes them on an FR3.

- **DOI / venue:** [10.48550/arXiv.2310.04349](https://doi.org/10.48550/arXiv.2310.04349) **(preprint DOI)** · [ICRA 2024 MoMa.v2 workshop](https://mobile-manipulation.net/events/moma2024/), not the main conference. The earlier preprint title is the same work.
- **Robot / learning:** **FR3**, parallel-jaw gripper and static RealSense D435i; **PyBullet**, MAP-Elites/ME-scs evolutionary optimization of grasp trajectories. Detic, MegaPose and ICG provide object pose estimates; MoveIt connects the motions.
- **Transfer:** Offline SIM-learned trajectories are transformed into the observed object frame. Camera calibration, favorable object orientations and manual pose-estimation reinitialization are part of the setup.
- **SIM / REAL:** FR3 experiments on ten YCB objects report **approximately 60% mean physical success**. SIM trajectory-adaptation feasibility is a different measurement; a matching physical-trial denominator is not clearly isolated.
- **Score: Unrated.** SIM feasibility cannot be divided into REAL grasp success.
- **Evidence:** [§§IV–V, Figs. 5/6, PDF pp. 4–5](https://arxiv.org/pdf/2310.04349v2#page=4).
- **Video / GitHub:** [Official project and qualitative illustrations](https://qdgrasp.github.io/object_pose_adaptation/) · [Paper-linked video, currently 404](https://cloud.isir.upmc.fr/s/sqXpAtrrkSiM3SX) · [Upstream QD trajectory-generation code](https://github.com/Johann-Huber/qd_grasp). A complete release of this perception/deployment integration was not located.
- **Last reviewed:** 2026-10-01.

### GraspLDM (2024)

**GraspLDM: Generative 6-DoF Grasp Synthesis using Latent Diffusion Models**

Learns a distribution of grasps from synthetic data and uses ranked grasp proposals to pick up unseen physical objects.

- **DOI / venue:** [10.1109/ACCESS.2024.3492118](https://doi.org/10.1109/ACCESS.2024.3492118) · IEEE Access, 2024.
- **Robot / learning:** **FR3**, Franka hand and eye-in-hand depth sensing. **VAE + latent denoising diffusion**, with a grasp classifier. Training uses **ACRONYM grasp labels generated in NVIDIA FleX**; **Isaac Gym is used for evaluation**. [ACRONYM's official description](https://github.com/NVlabs/acronym) identifies the data-generation simulator.
- **Transfer:** No real fine-tuning. SAM segments the observed point cloud; 100 sampled grasps are ranked, then IK/collision checks and RRT-Connect determine execution.
- **SIM / REAL:** Selected FR3 GraspLDM-P-63C result: **78.75% = 63/80**, covering 16 objects × five poses, without retries. The separate UR10e result is not Franka evidence.
- **Score: Unrated.** SIM statistics concern generated grasp distributions; REAL selects ranked, feasible grasps. The denominators are not equivalent.
- **Evidence:** [§IV-D/E, Table 2 and Fig. 10, PDF pp. 9–10](https://arxiv.org/pdf/2312.11243v2#page=9).
- **Video / GitHub:** [Author's official video](https://youtu.be/z3-otAp28XA) · [Training, generation and checkpoint instructions](https://github.com/kuldeepbrd1/graspLDM). Fig. 10 establishes the FR3 setup; do not assume every video scene uses Franka. The repository's project-page hyperlink is broken, but its embedded video identifier resolves.
- **Last reviewed:** 2026-10-01.

### DRIS reactive catching (2026)

**Zero-Shot Sim-to-Real Robot Learning: A Dexterous Manipulation Study on Reactive Catching**

Learns to catch a moving ball on an arm-mounted plate while accounting for randomized object dynamics.

- **DOI / venue:** [10.15607/RSS.2026.XXII.148](https://doi.org/10.15607/RSS.2026.XXII.148) · [RSS 2026](https://roboticsproceedings.org/rss22/p148.html).
- **Robot / learning:** **FR3**, 3D-printed plate with neoprene padding and two 80 FPS tracking cameras. **ManiSkill3, PPO**, with a learned domain-randomization instance-set encoder and FiLM-conditioned policy.
- **Transfer:** Deployed training uses **200 randomized ball instances**. Physical controller/dynamics identification precedes transfer; no physical task-policy fine-tuning is reported.
- **SIM / REAL:** Main ramp-fed evaluation: **41/60 = 68.3%**, across four balls × three ramps × five trials. Success requires retaining the ball on the plate for ten seconds. Hand-thrown and irregular-object demonstrations are separate qualitative evidence.
- **Score: Unrated.** SIM noise/randomization sweeps do not establish a matching deployed-policy reference for the physical ball/ramp distribution. The 0.89 SIM result for a 50-instance configuration is not the denominator for the 200-instance deployment.
- **Evidence:** [§§V–VI, Fig. 8 and Appendix A, PDF pp. 8–9/13](https://arxiv.org/pdf/2605.09789v1#page=8).
- **Video / GitHub:** [Official video](https://www.youtube.com/watch?v=-jifGtyr6zM), linked by the [author](https://charlierkj.github.io/). Public task-specific source not located.
- **Last reviewed:** 2026-10-01.

### Visual action-space benchmark (2026)

**Benchmarking Action Spaces in Reinforcement Learning for Vision-based Robotic Manipulation**

Compares simulated visual-control action spaces by transferring cuboid-picking policies to a Panda.

- **DOI / venue:** [10.48550/arXiv.2606.18594](https://doi.org/10.48550/arXiv.2606.18594) **(preprint DOI)** · arXiv preprint, 2026.
- **Robot / learning:** **Panda**, parallel-jaw gripper and wrist RealSense D405; **MuJoCo, PPO**, using 1,024 parallel environments and ten training seeds. Selected task: **PandaPickCuboid with joint-velocity actions**, lifting the cuboid at least 17 cm.
- **Transfer:** SIM-trained visual policy; action scaling, gripper thresholds and execution limits are adjusted for hardware. The two strongest SIM policies per action space are tested, and the best physical result is reported.
- **SIM / REAL:** SIM action-space results reach **98–100%**; selected REAL joint-velocity policy succeeds **12/12**, with median completion time **3.58 s**.
- **Score: Unrated.** The aggregate SIM results do not identify the corresponding success rate of the physically selected winner. Hardware additionally terminates episodes at workspace limits or after ten failed grasp attempts.
- **Evidence:** [§§IV–VI, Tables II/III, PDF pp. 3–6](https://arxiv.org/pdf/2606.18594v1#page=5).
- **Video / GitHub:** [Official video](https://youtu.be/MmXEexVRa18) · [Official source](https://github.com/RL-Sim-to-Real/training), containing PPO pick/push training and real visual evaluation scripts. Root setup documentation still emphasizes an earlier reaching example.
- **Last reviewed:** 2026-10-01.
