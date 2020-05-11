---
title: Asoh Black! | Music
date: 2019-11-12 19:44:00 Z
permalink: "/music/"
songs:
- name: Black Ocean
  image: 'background-image: asset_url(''music03.jpg'');'
  url: https://ffm.to/jjov2w7.owe
layout: default
---

<div class="container music">
  <section class="intro"></section>
  <ul class="songs">
    {% for song in page.songs %}
    <li>
      <a target= "_blank" href="{{ song.url }}">
        <div class="song" style="{{ song.image }}"></div>
        <p class="song-title">Song Title</p>
      </a>
    </li>
    {% endfor %}
  </ul>
</div>