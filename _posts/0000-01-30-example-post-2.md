---
title: Cryptographic Engineering & Optimization
image: images/photo.jpg
tags:
  - Cryptography
  - System
  - Accelerator
---

&nbsp;&nbsp;While classic cryptography hae reigned for decades, their limitations have recently emerged on the surface. Fundamentally, data were decrypted while being processed, which may lead to privacy issues. Moreover, the advent of Quantum computing increased the urge for Post-Quantum Cryptography (PQC). Novel cryptographic schemes and protocols were devised to fulfill the new duties, however, they introduce massive computational overhead. A single operation in ciphertext can be orders of magnitude slower than in plaintext, and the memory footprint expands significantly. This "performance wall" is the primary bottleneck preventing the widespread, real-world deployment of cryptographic privacy solutions.

&nbsp;&nbsp;To make secure computation practical, we must move beyond pure mathematics and focus on engineering. This requires a deep, cross-stack approach—from algorithmic refinements to low-level hardware-software co-design. By optimizing how these algorithms interact with underlying architectures, we can drastically reduce latency and bridge the gap between theoretical cryptography and practical deployment.

### Core Research Themes
&nbsp;&nbsp;Our lab focuses on making the "impossible" practical by accelerating PETs through three main lenses:

* **Hardware Acceleration:** Designing highly optimized implementations of cryptographic primitives for GPUs, FPGAs, and other retrofitted platforms such as Processing-in-Memory.
* **System-Level Integration:** Introduce efficient compilers (transpilers), schedulers, and other SW-level optimizations that enhances the performance by reducing the bottlenecks of the computation.
* **Algorithmic Adaptation to a given environment:** Different environments have different amount of memory, bandwidth, Flops, etc. We seek how we can 'morph' a given cryptosystem to make the computation more suited for a given environment while keeping its functionality.

---

#### Key Sub-Topics & Keywords
To give you an idea of potential topics you may be interested in (but not bounded to):
1.  **FHE Transpilers/Compilers/Schedulers**
2.  **Computation & Network Scheduling for MPC**
3.  **Performance/Area/Power Efficient PQC Accelerator Design**

> **Student Note:** Security usually comes at a cost of performance getting sluggish. This naturally means actually, optimization techniques are essential for security and privacy research.