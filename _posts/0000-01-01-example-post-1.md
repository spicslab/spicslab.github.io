---
title: Privacy-Preserving AI
image: images/photo.jpg
tags:
  - PETs
  - AI
  - Systems
---


![High-Level Architecture of PP-AI System](photo.jpg)
*Figure 1: Our approach combines Hardware (TEEs) and Software (PETs) to create a multi-layered defense.*

### Background
&nbsp;&nbsp;AI became integrated into every aspect of our lives -- ChatGPT, Web Engines, Robots, Automated Cars, and almost EVERYTHING relies on AI, at least partly. Having said that, a fundamental question arises "Is it safe?" AI services are applications that requires ***mutual privacy*** -- the client wants to avoid his data from being leaked, while the service provider considers the AI model as Intellectual Property.

&nbsp;&nbsp;To address such concern, researchers have began to devise and use Privacy Enhancing Techniques (PETs). In brief, there are two categories of PETs, each with clear pros and cons. The first one incorporates cryptography, such as Homomorphic Encryption (HE), Multi-Party Computation (MPC), Zero-Knowledge Proofs (ZKP), and more. Based on cryptographic building blocks, they are fundamentally secure, however, the benefit comes at a cost of massive additional performance overhead, as well as several limitations such as being unable to express non-arithmetic operations exactly. The second category consists of hardware and system security measurements, such as sandboxing, tagging, and isolation. Trusted Execution Environments, for example, offer straight-forward security against malicious parties in the same system, however, their functionality highly depends on the HW platform, along with some threat model assumptions.

### Core Research Themes
&nbsp;&nbsp;Our lab focuses on devising ***Privacy-Preserving AI (PP-AI)*** solutions that are both ***Secure*** and ***Efficient***. We tackle the privacy-utility-efficiency trade-off through three main lenses:

* **Machine Learning as a Service (MLaaS):** Protecting user queries and model weights during cloud-based inference using PETs.
* **On-Device & Hybrid AI:** Designing lightweight security protocols for AI running on edge devices (smartphones, IoT) using PETs.
* **Secure Training & Collaborative Learning:** Enabling multiple parties to train a shared model without sharing their local datasets.

---

#### Key Sub-Topics & Keywords
To give you an idea of our day-to-day research, we focus on:
1.  **FHE-based CNN/Transformers/LLM**
2.  **Privacy-Preserving RAG:** Secure Retrieval-Augmented Generation for private LLMs.
3.  **Confidential Computing for on-device AI:**
4.  **Efficient Federated Learning**
5.  
> **Student Note:** If you are interested in studying about data privacy issues in different AI applications as well as how to overcome the limitations of PETs, this field is for you.
