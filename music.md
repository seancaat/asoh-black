---
title: Music
permalink: "/music/"
albums:
- name: 96 Styles
  image: "/uploads/96%20styles.jpg"
  link: https://youtu.be/2yDlgEKLHVQ
- name: Listen To This Instead
  image: "/uploads/Listen%20to%20This%20Instead.jpg"
  link: 
- name: Foolie
  image: "/uploads/Foolie.jpg"
  link: https://youtu.be/R02Cq-Xs0b8
- name: Joy
  image: "/uploads/joy.jpg"
  link: https://youtu.be/r7nPS6RhawI
- name: Sleepwalking Through Reality
  image: "/uploads/Sleepwalking%20Through%20Reality.jpg"
  link: https://www.youtube.com/watch?v=Mb9FP27Hd8E&list=PLB5ZpBxB9l_a8phdgUPgGUJ72iVDsx_5Z
- name: Summer Playlists
  image: "/uploads/Summer%20Playlists.jpg"
  link: https://youtu.be/QVH_bXoCKBM
- name: That's Not Fair
  image: "/uploads/that's%20not%20fair.jpg"
  link: https://youtu.be/ZjnxnaEV-qU
- name: Waste My Time
  image: "/uploads/waste%20my%20time.jpg"
  link: https://youtu.be/z1O3t9x91W8
layout: default
---

<div class="container music">
<ul class="albums">
  {% for album in page.albums %}
  <li class="album">
    <div class="album-container">
      <a href="{{album.link}}">
        <img class="album-image" src="{{ album.image }}" />
        <span class="album-name">{{ album.name }}</span>
      </a>
    </div>
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
