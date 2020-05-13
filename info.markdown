---
title: Asoh Black! | Info
permalink: "/info/"
bio-image: "/uploads/about.jpeg"
bio:
- NYC native, Asoh Black!, is one of Free.All.Mind$ most prominent musical artists. He's had a passion for hip-hop since high school when he discovered artists like Kanye West, Lil Wayne, Childish Gambino, Big Sean, and many more. After getting more into the music, Asoh developed a knack for writing lyrics and crafting feel-good records himself.
- 'In February 2020, he released his debut mixtape “Black Ocean: Season One” and has since been following his vision with the hopes of inspiring others to do the same. Asoh was named one of Pigeons and Plane’s “Best New Artists” in March 2020 and has been featured and interviewed in publications like Lyrical Lemonade, Hip Hop DX, DJ Booth, Flaunt Magazine and more. He’s also been featured as the playlist cover for Spotify’s “Fresh Finds: Hip Hop” and TIDAL’s “Rising” playlist. Be sure to look out for this hungry hitmaker.'
layout: default
---

<div class="container info">
<section class="intro"></section>
<article class="bio">
  <h1 class="tracked-tight">About Asoh</h1>
  <img src="{{page.bio-image}}" alt="Asoh Black standing in an alley" class="bio-image"/>
  {% for paragraph in page.bio %}
    <p>
      {{paragraph}}
    </p>
  {% endfor %}
  {% include get-updates-link.html %}
  <div class="modal-container">
    {% include get-updates.html %}
  </div>
</article>



</div>
