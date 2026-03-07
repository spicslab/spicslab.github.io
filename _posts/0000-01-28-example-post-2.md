---
title: Next-Generation Cryptography
image: images/research/crypto.png
tags:
  - Cryptography
  - System
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/crypto.png)

&nbsp;&nbsp;While classic cryptography have reigned for decades, their limitations have recently emerged on the surface. Fundamentally, data were decrypted while being processed, which may lead to privacy issues. Moreover, the advent of Quantum computing increased the urge for Post-Quantum Cryptography (PQC). Novel cryptographic schemes and protocols were devised to fulfill the new duties, however, they introduce massive computational overhead. A single operation in ciphertext can be orders of magnitude slower than in plaintext, and the memory footprint expands significantly. This "performance wall" is the primary bottleneck preventing the widespread, real-world deployment of cryptographic privacy solutions.

&nbsp;&nbsp;Not only PQC, but most of the next-generation cryptosystems suffer from the same problem -- Homomorphic Encryption, Multi-Party Computing Protocols, and Zero-Knowledge Proofs all involve complicated cryptographic computation with colossal overhead.

&nbsp;&nbsp;To make such cryptosystems practical, we must move beyond pure mathematics and focus on engineering. This requires a deep, cross-stack approach—from algorithmic refinements to low-level hardware-software co-design. By optimizing how these algorithms interact with underlying architectures, we can drastically reduce latency and bridge the gap between theoretical cryptography and practical deployment. Our lab focuses on making the "impossible" practical by accelerating cryptosystems through three main lenses:

* **Algorithmic Optimization:** Modifying, or devising a new cryptosystem that offers better performance or higher security for general / domain-specific usage.
* **Hardware Acceleration:** Designing highly optimized implementations of cryptographic primitives for GPUs, FPGAs, and other retrofitted platforms such as Processing-in-Memory.
* **System-Level Integration:** Introduce efficient compilers (transpilers), schedulers, and other SW-level optimizations that enhances the performance by reducing the bottlenecks of the computation.

---

#### Key Sub-Topics & Keywords
To give you an idea of potential topics you may be interested in (but not bounded to):
1.  **FHE Transpilers/Compilers/Schedulers**
2.  **Computation & Network Scheduling for MPC**
3.  **Performance/Area/Power Efficient PQC Accelerator Design**

**Student Note:** FHE and PQC are considered to be the game-changers in the very near future. This is not an exaggeration -- they are currently being standardized just as AES and RSA were in the past. (<a href="https://homomorphicencryption.org/">HE standard</a>, <a herf="https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization">PQC standard</a>). The White House has declared to overhaul the existing computation and network infrastructure to become fit for these new changes. If you want to take a step in these fields earlier than others, do not hesitate.