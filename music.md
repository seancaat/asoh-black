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
   <a href="{{album.link}}">
      <img class="album-image" src="{{ album.image }}" />
      <span class="album-name">{{ album.name }}</span>
  </a>
  </li>
  {% endfor %}
</ul>

<div class="video-overlay hidden">
  <button class="close">{% asset close.svg %}</button>
  <div class="youtube-embed">
    <iframe src="" class="nivo-lightbox-youtube" frameborder="0" vspace="0" hspace="0" scrolling="auto"></iframe>
  </div>
  <span class="nivo-lightbox-title-wrap"></span>
</div>
