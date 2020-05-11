---
title: Asoh Black! | Info
permalink: "/info/"
bio-image: "/uploads/about.jpeg"
bio:
- Asoh Black! is one of F.A.M\$' prominent musical artists. He's had a passion for
  hip-hop since high school when he discovered artists like Kanye West, Big Sean,
  and many more. Despite living in a household that didn't celebrate this music, Asoh
  developed a knack for writing lyrics and crafting feel-good records.
- '  In June 2015, he released his debut EP "20 | 20,” and has since been following
  his vision with the hopes of inspiring others to do the same. Asoh was named one
  of Plug Society’s “50 Artists to Watch in 2017,” and has been featured in publications
  like Lyrical Lemonade. Look out for this hungry hitmaker.'
layout: default
---

<div class="container info">
<section class="intro"></section>
<article class="bio">
  <h1 class="tracked-tight">About Asoh</h1>

  <img src={{bio-image}} alt="Asoh Black standing in an alley" class="bio-image"/>
 {% for paragraph in page.bio %}
  <p>
    {{paragraph}}
  </p>

  {% include get-updates-link.html %}
  <div class="modal-container">
    {% include get-updates.html %}
  </div>
</article>



</div>
