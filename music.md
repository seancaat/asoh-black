---
title: Music
permalink: "/music/"
albums:
- name: Sleepwalking Through Reality
  image: "/uploads/artworks-000178840342-vlq6ls-t500x500.jpg"
- name: Listen To This Instead
  image: "/uploads/4e470be18cc832bb2fca2a18d90e2a62.300x300x1.jpg"
- name: 20/20
  image: "/uploads/Asoh_Black_2020-front-large.jpg"
- name: "\\#ASOHATTACKS, Volume 1"
  image: "/uploads/artworks-000434053146-l97zrf-t500x500.jpg"
layout: default
---

<div class="container music">
<ul class="albums">
  {% for album in page.albums %}
  <li class="album">
    {{ album.name }}
    <img src="{{ album.image }}" />
  </li>
  {% endfor %}
</ul>
</div>