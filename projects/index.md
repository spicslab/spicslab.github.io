---
title: Resources
nav:
  order: 4
  tooltip: Open-source software, tools, and more
---

# {% include icon.html icon="fa-solid fa-box-open" %}Resources

The code behind our research, released so others can run it, check it, and build on it.
Here you'll find our open-source software, research prototypes, and other resources from the lab.

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

{%
  include pub-list.html
  title="Open-Sourced"
  id="open-sourced"
  data="projects"
  filter="group == 'open-sourced'"
  style="wide"
  component="card"
  size="5"
%}

{%
  include pub-list.html
  title="More"
  id="more"
  data="projects"
  filter="!group"
  component="card"
  style="wide"
  size="10"
%}
