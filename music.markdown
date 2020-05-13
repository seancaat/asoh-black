---
title: Asoh Black! | Music
date: 2019-11-12 19:44:00 Z
permalink: "/music/"
songs:
- name: Black Ocean
  image: music03.jpg
  url: https://ffm.to/jjov2w7.owe
layout: default
---

<div class="container music">
  <section class="intro"></section>
  <ul class="songs">
    {% for song in page.songs %}
    <li>
      <a target= "_blank" href="{{ song.url }}">
        <div class="song" style='background-image: url({% asset "{{ song.image }}" @path %});'>
          <p class="song-title">{{song.name}}</p>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>

</div>