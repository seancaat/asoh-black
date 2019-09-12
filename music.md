---
title: Music
permalink: "/music/"
albums:
- name: 96 Styles
  image: "/uploads/96%20styles.jpg"
- name: Listen To This Instead
  image: "/uploads/Listen%20to%20This%20Instead.jpg"
- name: Foolie
  image: "/uploads/Foolie.jpg"
- name: Joy
  image: "/uploads/joy.jpg"
- name: Sleepwalking Through Reality
  image: "/uploads/Sleepwalking%20Through%20Reality.jpg"
- name: Summer Playlists
  image: "/uploads/Summer%20Playlists.jpg"
- name: That's Not Fair
  image: "/uploads/that's%20not%20fair.jpg"
- name: Waste My Time
  image: "/uploads/waste%20my%20time.jpg"
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
