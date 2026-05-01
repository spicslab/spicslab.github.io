---
title: Privacy-Preserving AI Systems (PPAI)
image: images/research/icon_ppai.png
tags:
  - PETs
  - AI
  - Systems
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/ppai.png)

&nbsp;&nbsp;AI is now embedded in many parts of modern computing: conversational assistants, search engines, robots, autonomous vehicles, mobile applications, enterprise analytics, and many other intelligent services. As AI becomes more powerful and more widely deployed, a fundamental question becomes increasingly important: **Can we use AI without exposing sensitive data or proprietary models?**

&nbsp;&nbsp;Many AI services require ***mutual privacy***. Users want to keep their prompts, queries, documents, sensor data, and personal information private. At the same time, service providers often need to protect their models, system prompts, retrieval databases, and inference pipelines as valuable intellectual property. This tension appears not only in cloud-based AI services, but also in on-device AI, edge AI, hybrid AI pipelines, private RAG systems, and collaborative learning scenarios.

&nbsp;&nbsp;To address these challenges, researchers use Privacy-Enhancing Technologies (PETs), which form one of the core foundations of our lab's research. PETs can be broadly divided into two complementary categories. The first category relies on cryptographic techniques such as Homomorphic Encryption (HE), Multi-Party Computation (MPC), Zero-Knowledge Proofs (ZKP), and related protocols. These techniques provide strong privacy guarantees under well-defined security assumptions, but they often introduce significant performance overhead and may require careful system design to support complex AI workloads such as CNNs, Transformers, LLMs, and RAG pipelines. The second category relies on hardware and system security mechanisms such as Trusted Execution Environments (TEEs), sandboxing, isolation, memory protection, and access control. These techniques can support more general computation with lower overhead, but their security depends on the hardware platform, implementation details, and threat model assumptions.

### Core Research Themes

&nbsp;&nbsp;Our lab studies ***Privacy-Preserving AI (PP-AI) Systems*** that are both ***secure*** and ***practical***. Rather than treating privacy as a purely cryptographic problem, we view PP-AI as a full-system problem that spans algorithms, compilers, runtimes, hardware platforms, and real AI deployment scenarios. We tackle the privacy-utility-efficiency trade-off through the following research directions:

* **Private AI as a Service:** Protecting user queries, documents, prompts, and model outputs in cloud-based AI services using PETs such as HE, MPC, ZKP, and TEEs.
* **On-Device, Edge, and Hybrid AI:** Designing privacy-preserving mechanisms for AI systems that run across smartphones, IoT devices, edge servers, and cloud backends.
* **Privacy-Preserving LLM and RAG Systems:** Protecting sensitive user data, retrieved documents, embeddings, prompts, and generation pipelines in LLM-based applications.
* **Secure Training and Collaborative Learning:** Enabling multiple parties to train, fine-tune, or evaluate shared models without directly exposing their local datasets.

---

#### Key Sub-Topics & Keywords

To give you an idea of potential topics you may be interested in, our research includes, but is not limited to:

1. **FHE/MPC/TEE-based private inference for CNNs, Transformers, and LLMs**
2. **Privacy-preserving RAG and private vector search**
3. **On-device and hybrid AI security**
4. **Secure and efficient collaborative learning**
5. **Programming models, compilers, and runtimes for PET-based AI systems**

**Student Note:** Many organizations are increasingly interested in Privacy-Enhancing Technologies and privacy-preserving AI, including 
<a href="https://developers.googleblog.com/ko/expanding-our-fully-homomorphic-encryption-offering/">Google</a>, 
<a href="https://www.microsoft.com/en-us/research/research-area/security-privacy-cryptography/">Microsoft</a>, 
<a href="https://www.samsungsds.com/kr/enterprise-asset/homomorphic-encryption-on-financial-data.html">Samsung Electronics</a>, 
<a href="https://news.nate.com/view/20260305n23286">LG Electronics</a>, 
<a href="https://cpl.thalesgroup.com/blog/data-security/dora-compliance-privacy-preserving-techniques-generative-ai">Thales</a>, 
and many others. If you are interested in studying data privacy issues in real AI applications, understanding the limitations of existing PETs, and building practical systems that make privacy-preserving AI usable, this field may be a good fit for you.