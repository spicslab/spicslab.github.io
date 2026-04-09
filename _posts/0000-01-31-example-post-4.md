---
title: Privacy-Preserving Programming/Coding
image: images/research/unified_pets.png
tags:
  - PETs
  - System
  - Optimization
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/unified_pets.png)

&nbsp;&nbsp;A major barrier to the adoption of privacy-preserving computing is usability. Currently, implementing systems that utilize PETs requires deep domain expertise in ***cryptography*** OR ***HW/SW security***. Representative PETs are :

**Cryptographic**
* Fully Homomorphic Encryption
* Multi-Party Computation
* Zero-Knowledge Proofs
* and other lightweight cryptographic hacks

**HW/SW Level**
* Process Isolation
* Trusted Execution Environments (highly related with side-channel attacks)
* System Privileges

There are also other domain specific PETs such as ***Differential Privacy*** and ***Federated Learning***.

&nbsp;&nbsp;As you can see, there are a lot of different PETs available, but they are far from being adopted for common use. Our ultimate vision is a unified platform that abstracts away this complexity. We aim to build intelligent tools that allow developers to write "normal" unencrypted code, which the system automatically translates into secure, privacy-preserving executions. By integrating various PETs seamlessly, we can choose the right tool for the right job—balancing security, privacy, and speed autonomously.

---

#### Key Sub-Topics & Keywords
To give you an idea of potential topics you may be interested in (but not bounded to):
1.  **Integrating multiple PETs (e.g., FHE+MPC+TEE)**
2.  **Mitigating Side-Channel Attacks on TEEs**
3.  **Real-Time Privacy Monitoring Techniques**
4.  **Attacks and Defenses in Federated Learning Applications**

**Student Note:** A lot of organizations are highly interested (some are actively hiring) Privacy Enhancing Techniques researchers -- <a href="https://developers.googleblog.com/ko/expanding-our-fully-homomorphic-encryption-offering/">Google</a>, <a href="https://www.microsoft.com/en-us/research/research-area/security-privacy-cryptography/">Microsoft</a>, <a href="https://www.samsungsds.com/kr/enterprise-asset/homomorphic-encryption-on-financial-data.html">Samsung Electronics</a>, <a href="https://news.nate.com/view/20260305n23286">LG Electronics</a>, <a href="https://cpl.thalesgroup.com/blog/data-security/dora-compliance-privacy-preserving-techniques-generative-ai">Thales</a>, and much more.
If you are interested in studying about data privacy issues in different AI applications as well as how to overcome the limitations of PETs, this field is for you.