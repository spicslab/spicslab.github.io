---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Publications

You can also refer to google scholar etc.

{% include section.html %}

## Summary

<span>&#8224;</span> refers to co-correspondance
<span>&#8225;</span> refers to equal contribution

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

{%
  include pub-list.html
  title="International Conferences"
  id="international-conferences"
  data="citations"
  filter="category == 'international-conference'"
  component="citation"
  style="rich"
  size="5"
%}

{%
  include pub-list.html
  title="International Journals"
  id="international-journals"
  data="citations"
  filter="category == 'international-journal'"
  component="citation"
  style="rich"
  size="5"
%}

{%
  include pub-list.html
  title="Domestic"
  id="domestic"
  data="citations"
  filter="category == 'domestic'"
  component="citation-compact"
  size="10"
%}
