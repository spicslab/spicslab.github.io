---
title: AI Security/Safety
image: images/research/ai_safety.png
tags:
  - AI
  - Analysis
---

![High-Level Architecture of PP-AI System](/spicslab.github.io/images/research/ai_safety.png)

&nbsp;&nbsp;While recent advances in AI have transformed language models from passive assistants into systems that can plan, retrieve information, call tools, and act on behalf of users, their limitations have also emerged on the surface. Fundamentally, modern AI systems no longer merely generate text; they increasingly interact with external data sources, APIs, files, memory, and even other agents. This expanded capability creates a much broader attack surface than conventional software, spanning prompts, retrieved context, tool interfaces, model behavior, and agent-to-agent communication.

Not only single-chatbot deployments, but most modern AI systems suffer from the same problem -- copilots, RAG pipelines, coding assistants, tool-using agents, and multi-agent systems all rely on probabilistic reasoning over potentially untrusted inputs. As a result, attacks such as jailbreaking, direct and indirect prompt injection, sensitive information disclosure, data/model poisoning, tool misuse, and excessive agency can cause the system to violate policy, leak confidential data, or perform unintended actions. Once external tools or MCP-based integrations are attached, a seemingly small prompt-level failure can escalate into a system-level security incident.

To make AI systems trustworthy in practice, we must move beyond ad-hoc prompting and one-off filtering, and instead focus on engineering. This requires a deep, cross-stack approach -- from prompt and policy design to runtime enforcement, access control, sandboxing, monitoring, evaluation, and secure system integration. By optimizing how models interact with tools, memory, policies, and infrastructure, we can reduce failure modes and bridge the gap between impressive demos and dependable deployment. Our lab focuses on making AI systems safe, secure, and deployable through three main lenses:

---

####Key Sub-Topics & Keywords

To give you an idea of potential topics you may be interested in (but are not limited to):

1. Jailbreaking / Prompt Injection / Guardrail Robustness

2. RAG Poisoning / Vector & Memory Security

3. Multi-Agent Integrity / MCP Security

**Student Note:** AI security is a field that seems to be a bit off 'engineering' but they are highly in trend as much as we use LLM services more and more in our daily lives. We cannot guarantee its trend to be lengthy, but we cannot overlook the importance of these topics.

<strong style="color:#37C435">Our lab is part of a Joint Task Force that specializes in secure end-to-end AI as a Service, collaborating with multiple university labs and companies. The AI Safety track involves RAG poisoning, guardrails, authenticating interactions between AI agents, etc. If interested, please contact the PI.</strong>

