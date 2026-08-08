---
title: Research topics
---

# {% include icon.html icon="fa-solid fa-wrench" %} Research topics - building behavior

Here are further explanations of research topics. Good examples of what type of research we do here.



{% include section.html %}
## Complex relationship between building behavior and outcome
{% capture content %}
  {% include figure.html image="images/topic/Mizumoto-etal-2020-AmNat.png" alt="Comparison of termite excavation behaviors and the tunnel structures produced by different species" width="450px" %}
{% endcapture %}
{%
  include float.html
  content=content
  flip=true
%}
　The nests of social insects vary widely in pattern and complexity. One might expect that these different outcomes come from distinct behavioral rules for social interactions. However, my research on tunnel excavation on three termite species in Arizona revealed that this is not true. I found that two related species excavate tunnels with a shared transportation mechanism but build tunnels with distinct branching patterns. On the other hand, I found that a third species has independently evolved a similar tunnel structure to one of the first two species, but builds it using a distinct transportation mechanism (bucket brigade by legs). These results emphasize the importance of the comparative study of collective behaviors at both individual and group levels, and raise a question about the origin of distinct behavioral rules for the same collective behavior. <br>
[Mizumoto et al. 2019 Am Nat](https://doi.org/10.1086/711020) <br>
[Mizumoto et al. 2020 AESA](https://doi.org/10.1093/aesa/saaa017) <br>
[Mizumoto 2022 Ecol Evol](https://doi.org/10.1002/ece3.10394)



{% include section.html %}
## Colony variation of shelter-tube construction by termites
{% capture content %}
  {% include figure.html image="images/topic/1_emp.png" alt="Examples of shelter-tube structures showing differences among termite colonies" caption="Colony specificity of structure patterns." width="250px" %}
{% endcapture %}
{%
  include float.html
  content=content
  flip=true
%}
Social insects build sophisticated and complex structures such as large nests and underground galleries. Studies have shown that this building rule can produce various structures by changing the environmental conditions or group size. Then, will social insects construct the same structures under the same environmental conditions and with the same group size? In other words, is there the personality of nesting structures? Here, we found that termite termites show distinct colony-specificity. When we divided a colony into multiple groups of individuals, groups drawn from the same colony built similar patterns, whereas groups from different colonies exhibited different patterns ([Mizumoto and Matsuura 2013 Insect Soc](https://doi.org/10.1007/s00040-013-0319-1)).

{% capture content %}
  {% include figure.html image="images/topic/1_behav.jpg" alt="Termite workers adding material during shelter-tube construction" caption="Shelter tube construction by termites." width="250px" %}
{% endcapture %}
{%
  include float.html
  content=content
  flip=true
%}
As the colony differences of structures are created under the same environmental conditions and with the same number of individuals, we can expect that termite workers differ among colonies in their responses. To explore the factors that affect construction, we developed a lattice model mimicking termite behaviors ([Mizumoto et al. 2015 RSOS](https://doi.org/10.1098/rsos.150360)).

{% capture content %}
  {% include figure.html image="images/topic/1_sim.png" alt="Diagram of the lattice simulation used to model termite shelter-tube construction" caption="The scheme of simualations" width="300px" %}
{% endcapture %}
{%
  include float.html
  content=content
  flip=true
%}
Termite workers carry a piece of wood to the end of the shelter tube and attach it one after another. This process continues again and again, and shelter tubes are constructed. Here, termite workers share the information under construction and locally interact with each other indirectly using cement pheromone, which is attached to materials. We mimic this behavioral algorithm in the lattice model. We analyzed the model by changing various factors that can affect the building process. We compared the simulation results with the results of empirical experiments.<br>
As a result, we could recreate similar patterns of colony variation by simply changing two behavioral parameters of group members, even with the same building algorithm. It was mainly attributed to the extent of positive feedback and the number of individuals engaged in building. Thus, a single algorithm can create variation within a species by tuning exogenous factors such as environment or group size and endogenous factors such as individual responses.<br>

