---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Interested in SPICS? Feel free to contact me through the email below. You also may have lots of questions on not only the lab, but also on various stuff about life and future. Do not hesitate to contact me. After all, you only get to know stuff by asking and learning.

SPICS 연구실에 관심이 생기셨나요? 아래 메일로 연락주시기 바랍니다. 또한 연구실 외에도 진로 등 다양한 고민이 많으실 수 있습니다. 고민하지 말고 편하게 연락해주세요. 제가 할 수 있는 선에서 최대한 조언해드릴 수 있도록 노력하겠습니다.

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
