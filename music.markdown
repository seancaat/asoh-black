---
title: Music
permalink: "/music/"
date: 2019-11-12 19:44:00 Z
songs:
- url: https://ffm.to/jjov2w7.owe
layout: default
---

<div class="container">
  <ul class="songs">
    {% for song in page.songs %}
    <li>
     <iframe width="300" height="250" frameborder="0" src="{{ song.url}} | remove: 'owe'/widget?width=300&height=250&note="></iframe>
    </li>
    {% endfor %}
  </ul>
</div>