---
---

# Welcome to SPICS Lab

<div id="site-notice" class="notice">
  <button class="notice-close" onclick="closeNotice()">×</button>
  <strong style="color:#7245BA">2 Announcements</strong><br>
  <strong style="color:#e74d3c">1. Open positions for corporate internship</strong> on Cloud-based AI system Security(8월-12월 예상, 개발 경험 풍부 우대, 문의는 PI 메일로)
  ----------------------------------------------------------
  2. Our lab is part of a Joint Task Force (w. several university and company research labs) that works on the realization of end-to-end Secure AI as a service. There are two main tracks, <strong style="color:#7245BA">AI Safety</strong> and <strong style="color:#1941D4">PETs for data privacy</strong>. If interested, same with other research fields -- read the contact page, and send the PI an email.
  
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
  text-align: left;
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

Hi! Welcome to Secure and Private Intelligence Computing Systems (SPICS) Lab. 
Our research focuses on :

<li><strong style="color:#e74d3c"> Privacy-Preserving AI Systems </strong></li>
<li><strong style="color:#e74d3c"> Secure AI Agent Harness/Guardrail (e.g., AI-DLP) </strong></li>
<li><strong style="color:#e74d3c"> Next-Generation Cryptography HW/SW </strong></li>
<li><strong style="color:#e74d3c"> AI for Security </strong></li>

In particular, we study how to protect sensitive data, securely control AI-agent workflows, and defend AI-driven systems against emerging threats such as prompt injection, RAG poisoning, and unsafe tool use.

<strong>We are looking for self-motivated and passionate students who are interested in security, privacy, cryptography, and AI.</strong> 
We have several projects collaborating with various research groups, in which you may participate after a short practice period. 
Please first read <a href="https://spicslab.github.io/contact/">this page</a>, then send the PI an email. 
We look forward to meeting you.



{% include section.html %}

## Highlight News
<li><strong>[Sep. 2026]</strong> Prof Nam gave a talk at ETRI (한국전자통신연구원 수도권연구센터).</li>
<li><strong>[Sep. 2026]</strong> Prof Nam joins the Program Committee of DATE 2027.</li>
<li><strong>[Aug. 2026]</strong> Prof Nam gave a talk at OSIA Workshop.</li>
<li><strong>[Aug. 2026]</strong> Prof Nam gave a talk at KIISC WDSC Workshop.</li>
<li><strong>[Aug. 2026]</strong> Prof Nam joins the Program Committee of Usenix Security 2027.</li>
<details>
  <summary>Show More</summary>
<li><strong>[Jun. 2026]</strong> Prof Nam joins the Program Committee of ASIACCS 2027.</li>
<li><strong>[Mar. 2026]</strong> HEPIC is accepted to ASPLOS 2026. See you in Pittsburgh.</li>
  <li><strong>[Mar. 2026]</strong> SPICS Lab Website is being renovated (under heavy re construction).</li>
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
