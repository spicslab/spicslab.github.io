---
title: Optimizations for Privacy Enhancing Techniques
image: images/research/unified_pets.png
tags:
  - PETs
  - System
  - Optimization
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/unified_pets.png)

&nbsp;&nbsp;A major barrier to the adoption of privacy-preserving computing is usability. Currently, implementing systems that utilize PETs requires deep domain expertise in cryptography and hardware security. If you are not yet familiar with PETs but are interested in, I suggest you read <a href="https://developers.googleblog.com/ko/expanding-our-fully-homomorphic-encryption-offering/">this page</a> first. Software developers who simply want to build a secure application are forced to manually manage cryptographic keys, handle ciphertext memory limits, and rewrite their standard code into highly constrained formats.

&nbsp;&nbsp;Our ultimate vision is a unified platform that abstracts away this complexity. We aim to build intelligent compilers, automated frameworks, and hybrid architectures that allow developers to write "normal" unencrypted code, which the system automatically translates into secure, privacy-preserving executions. By integrating various PETs seamlessly, we can choose the right tool for the right job—balancing security, privacy, and speed autonomously.

&nbsp;&nbsp;As other systems are, PET computing systems also consist of several layers, the front-end that transpiles a general code into a PET applied code, 

* "Privacy-Enhancing Compilers:" Developing automated tools that translate standard plaintext code into optimized cryptographic circuits or TEE-compatible binaries.
* "Unified PET Platforms:" Creating middleware that dynamically orchestrates different privacy techniques (combining FHE and TEEs) based on the specific security and performance requirements of the task.
* "Developer-Friendly Security:" Designing APIs and frameworks that hide mathematical complexity while mathematically guaranteeing data protection.

---

#### Key Sub-Topics & Keywords
To give you an idea of potential topics you may be interested in (but not bounded to):
1.  **FHE Compilers and Schedulers**
2.  **Integrating multiple PETs (e.g., FHE+MPC+TEE)**
3.  **Mitigating Side-Channel Attacks on TEEs**
4.  **Real-Time Privacy Monitoring Techniques**

**Student Note:** A lot of organizations are highly interested (some are actively hiring) Privacy Enhancing Techniques researchers -- <a href="https://developers.googleblog.com/ko/expanding-our-fully-homomorphic-encryption-offering/">Google</a>, <a href="https://www.microsoft.com/en-us/research/research-area/security-privacy-cryptography/">Microsoft</a>, <a href="https://www.samsungsds.com/kr/enterprise-asset/homomorphic-encryption-on-financial-data.html">Samsung Electronics</a>, <a href="https://news.nate.com/view/20260305n23286">LG Electronics</a>, <a href="https://cpl.thalesgroup.com/blog/data-security/dora-compliance-privacy-preserving-techniques-generative-ai">Thales</a>, and much more.
If you are interested in studying about data privacy issues in different AI applications as well as how to overcome the limitations of PETs, this field is for you.