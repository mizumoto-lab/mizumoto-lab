---

---

<!-- Announcement -->
{% include alert.html type="info" content="**We are recruiting two PhD students for Fall 2027.** One position focuses on field and experimental research on termite collective nest building; the other focuses on comparative data analysis and termite social evolution. [View both positions](recruitment/)." %}

# Termite x Behavior x Evolution
Mizumoto Lab is interested in the evolution of termite collective behavior. What are the rules for behavioral coordination? How did they originate in the history of life? We answer these questions by integrating field work, behavioral observations, computational tracking, and phylogenetic comparative analysis. See our [Publications](publication) and [Research](research) for details.

{% capture content %} 
We intentionally restricted our research (mainly) to termites for inspiration. Do you have a research question? We can answer it with termites! 
{% endcapture %} 
{%
  include feature.html
  image = "images/Shelter-tubes.jpg"
  alt = "Termite shelter tubes constructed across a surface"
  title = "Termites"
  text  = content
  flip  = true
%}

{% capture content %} 
Videos of insect behaviors have much information. We especially try to understand how termites coordinate their actions for collective behavior.
{% endcapture %} 
{%
  include feature.html
  image = "images/pub/Mizumoto-etal-2020-JAE.gif"
  alt = "Animated visualization of termite movement used for computational behavioral analysis"
  title = "Computational behavioral analysis"
  text  = content
%}

{% capture content %} 
There are > 3,000 species of termites in the world, showing a great diversity of collective behavior. Comparison among them allows us to infer the history of evolution. We also love cool fossils.
{% endcapture %} 
{%
  include feature.html
  image = "images/pub/Mizumoto-etal-2022-PNAS.jpg"
  alt = "Research figure illustrating the evolution of termite tandem-running behavior across species"
  title = "Phylogeny and Evolution"
  text  = content
  flip  = true
%}


{% include section.html %}

## Latest news

{% for post in site.posts limit:3 %}
  {% include post-excerpt.html lookup=post.slug %}
{% endfor %}

[View all news]({{ "/news/" | relative_url }})