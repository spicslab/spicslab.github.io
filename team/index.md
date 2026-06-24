---
title: Team
nav:
  order: 1
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

**NOTE** : Undergrad students who wish to participate in internship programs are also welcome. The programs will be tailored for each individuals according to their current status. For example :
- Non-experienced students but are willing to get familiar with what research are
- Familiar with research but are new to security and privacy topics
- Familiar with security/privacy research and want to participate in on-going grad. student level projects
- and so on. But please consult the PI first.

## Principal Investigator

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}


## PhD Students

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

## MS Students

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'ms'" %}

{% include section.html background="images/background.jpg" dark=true %}

## Interns

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
