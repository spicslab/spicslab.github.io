---
---

# Welcome to SPICS Lab

<div id="site-notice" class="notice">
  <button class="notice-close" onclick="closeNotice()">×</button>
  <strong style="color:#7245BA">Spoiler Alert</strong><br>
  Our lab is part of a Joint Task Force (w. several university and company research labs) that works on the realization of end-to-end Secure AI as a service. There are two main tracks, <strong style="color:#7245BA">AI Safety</strong> and <strong style="color:#1941D4">PETs for data privacy</strong>. If interested, same with other research fields -- read the contact page, and send the PI an email.
</div>

<style>
.notice-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.notice {
  position: relative;
  width: min(560px, 90vw);
  background: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 20px 16px 16px 16px;
  text-align: center;
}

.notice-close {
  position: absolute;
  top: 8px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
}
</style>

<script>
function closeNotice() {
  document.getElementById("site-notice").style.display = "none";
}
</script>

<strong style="color:#e74d3c">The website is currently under major reconstruction.</strong>

Hi! We are the Secure and Private Intelligence Computing Systems (SPICS) Lab. 
We build secure and private computing systems for the AI era by combining 
<strong style="color:#e74d3c">privacy-enhancing technologies, next-generation cryptography, and system security</strong>.

Our research focuses on 
<strong style="color:#e74d3c">Privacy-Preserving AI Systems, Secure AI Agent Harnesses, Next-Generation Cryptography, and AI for Security</strong>. 
In particular, we study how to protect sensitive data, securely control AI-agent workflows, and defend AI-driven systems against emerging threats such as prompt injection, RAG poisoning, and unsafe tool use.

<strong>We are looking for self-motivated and passionate students who are interested in security, privacy, cryptography, systems, and AI agents.</strong> 
We have several projects collaborating with various research groups, in which you may participate after a short practice period. 
Please first read <a href="https://spicslab.github.io/contact/">this page</a>, then send the PI an email. 
We look forward to meeting you.

보안 & 프라이버시 지능 시스템 연구실 홈페이지에 방문해주셔서 감사합니다. 
SPICS Lab은 <strong style="color:#e74d3c">AI 시대의 컴퓨팅 시스템을 안전하고 프라이버시 친화적으로 만들기 위한 연구</strong>를 수행합니다. 
저희는 차세대 암호, 프라이버시 보호 기술, 그리고 시스템 보안 기술을 결합하여 민감한 데이터를 보호하고, AI 에이전트의 행동을 안전하게 통제하며, 실용적인 보안 컴퓨팅 시스템을 구현하는 것을 목표로 합니다.

주요 연구 분야는 
<strong style="color:#e74d3c">프라이버시 보호 AI 시스템, Secure AI Agent Harness, 차세대 암호, 그리고 AI를 활용한 보안 분석</strong>입니다. 
특히 AI 에이전트가 데이터베이스, 도구, 메모리, 다른 에이전트와 상호작용하는 과정에서 발생하는 데이터 프라이버시 문제, 시스템 흐름 보안 문제, 그리고 prompt injection, RAG poisoning과 같은 AI 특화 보안 문제를 함께 다룹니다.

<strong>보안, 프라이버시, 암호, 시스템, AI 에이전트에 관심이 있는 열정적인 학생들을 찾고 있습니다.</strong> 
현재 다양한 산학연 그룹들과 여러 프로젝트를 진행하고 있으며, 사전 연습 기간을 거쳐 이들 프로젝트에 직접 참여해보실 수 있습니다. 
우선 <a href="https://spicslab.github.io/contact/">연락 전 확인할 사항들</a>을 읽어보시고, PI에게 메일을 보내주세요.



{% include section.html %}

## Highlight News

<li><strong>[July. 2026]</strong> Prof Nam joins the Program Committee of Usenix Security 2027.</li>
<li><strong>[Jun. 2026]</strong> Prof Nam joins the Program Committee of ASIACCS 2027.</li>
<li><strong>[Mar. 2026]</strong> HEPIC is accepted to ASPLOS 2026. See you in Pittsburgh.</li>
<li><strong>[Mar. 2026]</strong> SPICS Lab Website is being renovated (under heavy re construction).</li>
<details>
  <summary>Show More</summary>
  <li><strong>[Mar. 2026]</strong> Joined Kyung Hee University as an Assistant Professor.</li>
</details>

<!--
## Highlights

{% capture text %}

We conduct various but yet well-weaved topics on the security and privacy aspects of AI systems. We also pursue research on the other direction -- using AI for security.

{%
  include button.html
  link="research"
  text="See our research topics"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

SPICS Lab is looking for new members. Come and Join !!

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}

{% capture text %}

TBA

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}
-->
