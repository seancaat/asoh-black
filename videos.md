---
title: Videos
permalink: "/videos/"
videos:
- name: Foolie
  image: "/uploads/Foolie.jpg"
  link: https://www.youtube.com/embed/R02Cq-Xs0b
  bgcolor: "#53327c"
- name: 96 Styles
  image: "/uploads/ninetysix.jpg"
  link: https://www.youtube.com/embed/2yDlgEKLHVQ
  bgcolor: "#b858ba"
- name: Summer Playlists
  image: "/uploads/Summer%20Playlists.jpg"
  link: https://www.youtube.com/embed/QVH_bXoCKBM
  bgcolor: "#4c68da"
- name: Joy
  image: "/uploads/joy.jpg"
  link: https://www.youtube.com/embed/r7nPS6RhawI
  bgcolor: "#e09b6a"
- name: Waste My Time
  image: "/uploads/waste%20my%20time.jpg"
  link: https://www.youtube.com/embed/z1O3t9x91W8
  bgcolor: "#4ef8ab"
- name: That's Not Fair
  image: "/uploads/thatsnotfair.jpg"
  link: https://www.youtube.com/embed/ZjnxnaEV-qU
  bgcolor: "#9af3ff"
- name: Listen To This Instead
  image: "/uploads/Listen%20to%20This%20Instead.jpg"
  link: https://www.youtube.com/embed/UBhC56OUxq0
  bgcolor: "#ad4150"
- name: Sleepwalking Through Reality
  image: "/uploads/Sleepwalking%20Through%20Reality.jpg"
  link: https://www.youtube.com/embed/Mb9FP27Hd8E
  bgcolor: "#37338f"
- name: 20/20
  image: "/uploads/20-20.png"
  link: https://www.youtube.com/embed/JiqXn0_M-4E
  bgcolor: "#F4D26F"
layout: default
---

<div class="container music">
  <ul class="videos">
    {% for vid in page.videos %}
    <li class="vid" style="background-color:{{ vid.bgcolor }}">
      <div class="vid-container">
        <div class="aspect-ratio--16x9 aspect-ratio">
          <button aria-label="Watch Asoh's {{ vid.name }} video" class="aspect-ratio--object cover video-overlay-trigger" style="background-image:url({{ vid.image }})" data-src="{{vid.link}}">
            <span class="vid-name">{{ vid.name }}</span>
          </button>
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
  <div class="video-overlay hidden">
    <button class="video-overlay-close">{% asset close-white.svg alt="Close overlay" %}</button>
    <div class="youtube-embed">
      <iframe class="youtube-embed-iframe" frameborder="0" scrolling="auto"></iframe>
    </div>
  </div>
</div>
{% asset overlay.js defer %}
