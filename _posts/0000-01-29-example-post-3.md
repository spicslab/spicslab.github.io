---
title: Confidential Computing w. HW/SW Security Measurements
image: images/research/confidential_computing.png
tags:
  - System
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/confidential_computing.png)

&nbsp;&nbsp;Cryptographic PETs are considered to be game-changers in terms of security and privacy, but they are yet sufferring from crucial downsides to be adopted right now. In the meanwhile, reearchers in HW/SW fields have also been working on a similar topic called ***Confidential Computing***. Confidential computing is clearly distinct with PETs in that their goal is to devise HW/SW techniques to provide security when running a code, by isolating the memory map and offerring integrity in a multi tenency status.

&nbsp;&nbsp;These solutions are not ideally secure or perfect in terms of privacy. Trusted Execution Environments (TEEs), for example, are vulnerable to side-channel attacks, and several private computing cores assume trusting a 3rd party such as the cloud owner, or OS provider. Yet, they are highly efficient compared to cryptographic PETs in terms of performance, for which reason we are pursuing this track of devising HW/SW security tricks to provide 'similar' functionality as PETs when running target applications. This is crucial for resource-constrained applications such as on-device AI.

---

#### Key Sub-Topics & Keywords
To give you an idea of potential topics you may be interested in (but not bounded to):
1.  **Two-way Sandboxing for mutual private computation**
2.  **Extending the functionality of TEEs (e.g., GPU extention)**
3.  **AI Integrity Check and Model Code Isolation**

**Student Note:** If you are interested in devising solutions for private computation using HW/SW security measurements, this topic is for you.