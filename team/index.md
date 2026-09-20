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

## Interns

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'intern'" %}


{% include section.html %}

<!--
{% include section.html background="images/background.jpg" dark=true %}
-->

### Working/ed with diverse collaborators research-wise

{% capture content %}

{% include figure.html image="images/companies/centralesupelec.png" width="80px" %}
{% include figure.html image="images/companies/tenessee.png" width="80px" %}
{% include figure.html image="images/companies/privyworks.jpg" width="80px" %}
{% include figure.html image="images/companies/datarmor.png" width="80px" %}
{% include figure.html image="images/companies/snu.png" width="80px" %}
{% include figure.html image="images/companies/mit.png" width="80px" %}
{% include figure.html image="images/companies/yale.png" width="80px" %}
{% include figure.html image="images/companies/unist.png" width="80px" %}


{% endcapture %}

{% include grid.html style="square" cols="8" content=content %}
