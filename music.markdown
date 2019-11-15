---
title: Music
date: 2019-11-12 19:44:00 Z
permalink: "/music/"
songs:
- url: https://ffm.to/jjov2w7.owe
layout: default
---

<div class="container music">
  <ul class="songs">
    {% for song in page.songs %}
    <li>
     <iframe frameborder="0" src="{{ song.url}} | remove: 'owe'/widget?width=400&height=400&note="></iframe>
    </li>
    {% endfor %}
  </ul>
</div>