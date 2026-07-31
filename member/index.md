---
title: People
nav:
  order: 1
  tooltip: Current and past lab members
---

# {% include icon.html icon="fa-solid fa-users" %} People

{% include list.html data="members" component="portrait" filters="status: current,role: pi" %}
{% include list.html data="members" component="portrait" filters="status: current,role: postdoc" %}
{% include list.html data="members" component="portrait" filters="status: current,role: phd" %}
{% include list.html data="members" component="portrait" filters="status: current,role: master" %}
{% include list.html data="members" component="portrait" filters="status: current,role: research_assistant" %}
{% include list.html data="members" component="portrait" filters="status: current,role: undergrad" %}

## Lab alumni

{% include list.html data="members" component="portrait" filters="status: alumni" %}

{% include section.html background="images/background.jpg" dark=true %}