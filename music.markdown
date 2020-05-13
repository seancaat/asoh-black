---
title: Asoh Black! | Music
date: 2019-11-12 19:44:00 Z
permalink: "/music/"
songs:
- name: Black Ocean
  image: music03.jpg
  url: https://ffm.to/jjov2w7.owe
- name: AP Watch
  image: "/uploads/music02.jpg"
  url: www.ffm.to/apwatch 
- name: Foolie
  image: "/uploads/music01.jpg"
  url: https://www.fanlink.to/foolie 
- name: 'Coffee Beans Remix '
  image: "/uploads/music04.jpg"
  url: https://audiomack.com/song/asoh-black/coffeebeans
- name: Wasted Lullabies
  image: "/uploads/music05.jpg"
  url: www.fanlink.to/wastedlullabies
- name: Chill, Vibe
  image: "/uploads/music07.jpg"
  url: www.fanlink.to/chill_vibe 
- name: Trailblazer
  image: "/uploads/music08.jpg"
  url: www.fanlink.to/trailblazer 
- name: That's Not Fair
  image: "/uploads/music09.jpg"
  url: www.fanlink.to/thatsnotfair 
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