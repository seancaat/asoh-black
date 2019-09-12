---
title: Music
permalink: "/music/"
videos:
- name: 96 Styles
  image: "/uploads/ninetysix.jpg"
  link: https://www.youtube.com/embed/2yDlgEKLHVQ
- name: Listen To This Instead
  image: "/uploads/Listen%20to%20This%20Instead.jpg"
  link: https://www.youtube.com/embed/UBhC56OUxq0
- name: Foolie
  image: "/uploads/Foolie.jpg"
  link: https://www.youtube.com/embed/R02Cq-Xs0b
- name: Joy
  image: "/uploads/joy.jpg"
  link: https://www.youtube.com/embed/r7nPS6RhawI
- name: Sleepwalking Through Reality
  image: "/uploads/Sleepwalking%20Through%20Reality.jpg"
  link: https://www.youtube.com/embed/Mb9FP27Hd8E
- name: Summer Playlists
  image: "/uploads/Summer%20Playlists.jpg"
  link: https://www.youtube.com/embed/QVH_bXoCKBM
- name: That's Not Fair
  image: "/uploads/thatsnotfair.jpg"
  link: https://www.youtube.com/embed/ZjnxnaEV-qU
- name: Waste My Time
  image: "/uploads/waste%20my%20time.jpg"
  link: https://www.youtube.com/embed/z1O3t9x91W8
layout: default
---

<div class="container music">
  <ul class="videos">
    {% for vid in page.videos %}
    <li class="vid">
      <div class="vid-container">
        <button data-src="{{vid.link}}" class="video-overlay-trigger">
          <img class="vid-image" src="{{ vid.image }}" />
          <span class="vid-name">{{ vid.name }}</span>
        </button>
      </div>
    </li>
    {% endfor %}
  </ul>
  <div class="video-overlay hidden">
    <button class="video-overlay-close">{% asset close-white.svg %}</button>
    <div class="youtube-embed">
      <iframe class="youtube-embed-iframe" frameborder="0" scrolling="auto"></iframe>
    </div>
  </div>
</div>
{% asset overlay.js defer %}
