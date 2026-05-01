---
title: Next-Generation Cryptosystems
image: images/research/cryptosystems.png
tags:
  - Cryptography
  - PETs
  - PQC
  - MPC
  - Systems
---

![High-Level Architecture of Next-Generation Cryptosystems](/spicslab.github.io/images/research/cryptosystems.png)

&nbsp;&nbsp;Cryptography has traditionally been used to protect **data at rest** and **data in transit**. For example, symmetric-key encryption such as AES protects stored files and databases, while public-key cryptography such as RSA has played a central role in secure communication, authentication, and key exchange. These cryptosystems remain essential, but modern computing systems now face a broader challenge: sensitive data is not only stored or transmitted — it is continuously processed, analyzed, shared, and used by cloud services, AI models, and distributed applications.

&nbsp;&nbsp;This creates the need to protect **data in use**. Privacy regulations and compliance requirements such as GDPR, HIPAA, and other data protection frameworks have increased the importance of minimizing unnecessary data exposure throughout the entire computing lifecycle. At the same time, AI-driven services often require access to sensitive user queries, medical records, financial data, enterprise documents, or personal context. If useful computation always requires plaintext access, then privacy and utility remain in conflict. Next-generation cryptosystems aim to resolve this tension by enabling computation, collaboration, verification, and learning while reducing exposure of sensitive information.

&nbsp;&nbsp;Another major shift comes from quantum computing. Large-scale quantum computers may eventually break widely deployed public-key cryptosystems based on integer factorization or discrete logarithms. This motivates the study of **Post-Quantum Cryptography (PQC)**, which aims to provide cryptographic mechanisms that remain secure even against quantum-capable adversaries. In other words, next-generation cryptography is needed not only for privacy-preserving computation today, but also for long-term security in the post-quantum era.

&nbsp;&nbsp;Our lab studies ***Next-Generation Cryptosystems*** that can serve as practical foundations for secure and private computing. We are interested not only in cryptographic primitives, but also in how they can be designed, optimized, implemented, and integrated into real systems. This includes Fully Homomorphic Encryption (FHE), Multi-Party Computation (MPC), Post-Quantum Cryptography (PQC), Zero-Knowledge Proofs (ZKP), and emerging privacy frameworks such as PAC privacy.

&nbsp;&nbsp;Fully Homomorphic Encryption allows computation directly over encrypted data, making it a powerful tool for protecting data in use. MPC enables multiple parties to compute jointly without revealing their private inputs. ZKP allows one party to prove that a statement or computation is correct without revealing the underlying secret information. PAC privacy explores privacy guarantees from a learning-theoretic perspective: instead of asking only whether individual records are hidden, it considers what an adversary can reliably infer from released data or model behavior. This perspective is increasingly relevant for AI systems, where privacy leakage may occur through predictions, embeddings, prompts, or learned representations rather than through direct data disclosure.

### Core Research Themes

&nbsp;&nbsp;Our lab explores ***Next-Generation Cryptosystems*** through the following research directions:

* **Fully Homomorphic Encryption Systems:** Designing and optimizing FHE-based systems that support practical privacy-preserving computation, including AI inference, secure data analytics, and encrypted database operations.
* **Secure Multi-Party Computation Protocols:** Studying efficient MPC protocols for collaborative computation, private data sharing, federated analytics, and distributed AI workloads.
* **Post-Quantum Cryptography:** Investigating cryptographic mechanisms that remain secure against quantum-capable adversaries and can be deployed in practical computing systems.
* **Zero-Knowledge and Verifiable Computation:** Exploring mechanisms that allow systems to prove correctness, compliance, or authorization without revealing sensitive internal data.
* **PAC Privacy and Emerging Privacy Models:** Studying privacy guarantees that capture what can be learned, inferred, or predicted from data-driven and AI-driven systems.
* **Efficient Cryptographic Implementations:** Optimizing cryptographic workloads across software, hardware, accelerators, and heterogeneous computing platforms.

---

#### Key Sub-Topics & Keywords

To give you an idea of potential topics you may be interested in, our research includes, but is not limited to:

1. **Fully Homomorphic Encryption for AI and secure computation**
2. **MPC protocols for collaborative and distributed computing**
3. **Post-quantum cryptographic systems and deployment**
4. **Zero-knowledge proofs and verifiable computation**
5. **PAC privacy and learning-theoretic privacy guarantees**
6. **Hardware-aware and system-level optimization of cryptographic workloads**
7. **Cryptographic compilers, runtimes, and programming models**
8. **Integration of FHE, MPC, ZKP, PQC, and TEE-based systems**

**Student Note:** If you are interested in systems, security, and performance optimization, this field may be a good fit for you. You will study how modern cryptographic techniques can protect sensitive data not only when it is stored or transmitted, but also when it is being used. You will also learn why practical cryptography is not only about mathematics and proving security, but also about making secure systems efficient, deployable, and usable in real-world AI, cloud, and distributed computing environments.