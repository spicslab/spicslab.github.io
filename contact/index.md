---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

**A note from the PI:** If you are interested and want to get to know more about Data Privacy, Privacy-Enhancing Techniques including next generation cryptography and system security measurements, feel free to send me an email.
You may also want to talk about different topics -- what to do to get a good job, agonies about graduation, which field to dig in, etc. I know that it may be awkward to initiate the interaction, but please do contact me -- I don't bite, I will do as much as I can to help you out. After all, you only get to know stuff by asking and learning.

데이터 프라이버시, 차세대 암호기술 및 시스템 보안 기술들을 포함한 프라이버시 보호 기술들에 대해 궁금하신 점이 있다면 아래 메일로 연락주시기 바랍니다. 또한 연구실 외에도 진로 등 다양한 고민이 많으실 수 있습니다. 첫 연락은 어렵게 느껴지실 수 있으나, 걱정말고 연락주시면, 제가 할 수 있는 선에서 최대한 조언해드릴 수 있도록 노력하겠습니다.


###For Those Interested in 

{%
  include button.html
  type="email"
  text="kvnam@khu.ac.kr"
  link="kvnam@khu.ac.kr"
%}
{%
  include button.html
  type="phone"
  text="TBA"
  link="TBA"
%}
{%
  include button.html
  type="address"
  tooltip="Woo-Jung-Won B6031"
  link="https://www.google.com/maps"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
