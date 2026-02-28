---
title: Team
nav:
  order: 1
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Members and close collaborators of the group.

## Principal Investigator

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}


## PhD Students

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'phd'" %}

## MS Students

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'ms'" %}

## Undergrad Students



{% include section.html background="images/background.jpg" dark=true %}

We are collaborating with diverse people around the world, in diverse organizations.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
