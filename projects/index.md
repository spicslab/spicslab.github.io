---
title: Links
nav:
  order: 4
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

TBA

{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}

## Open-Sourced

{% include list.html component="card" data="projects" filter="group == 'open-sourced'" %}

{% include section.html %}

## More

{% include list.html component="card" data="projects" filter="!group" style="small" %}
