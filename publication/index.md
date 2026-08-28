---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %} Publications

Email [nzm0095@auburn.edu](mailto:nzm0095@auburn.edu) if you need access to the full text.

{% 
  include list.html 
  data="citations" 
  component="citation" 
  filters="type: ^(?!old_paper$)" 
  style="rich" 
%}

{% include section.html %}
### Previous publications
{% 
  include list.html 
  data="citations" 
  component="citation" 
  filters="type: old_paper" 
  style="rich" 
%}

{% include section.html %}
Papers from the Mizumoto Lab appear in these [journals](https://docs.google.com/spreadsheets/d/1tNzj1UMuvO9vShVRI0QanOSFvRSSd8Q5cm1ndOqWjYg/).
