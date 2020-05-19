---
title: Asoh Black! | Videos
permalink: "/videos/"
videos:
- name: Staying Sober
  url: https://www.youtube.com/embed/znfSaln_5KA
- name: Debut Title + Date Announcement Short FIlm
  url: https://www.youtube.com/embed/DYo_JL6kj3I
- name: Coffee Beans (blackm!x)
  url: https://www.youtube.com/embed/EVuZgHBS3JU
- name: Foolie
  url: https://www.youtube.com/embed/R02Cq-Xs0b8
- name: 96 Styles
  url: https://www.youtube.com/embed/2yDlgEKLHVQ
- name: Waste My Time
  url: https://www.youtube.com/embed/z1O3t9x91W8
- name: Joy
  url: https://www.youtube.com/embed/r7nPS6RhawI
- name: Thats Not Fair ft Limbo
  url: https://www.youtube.com/embed/ZjnxnaEV-qU
- name: Chill, Vibe
  url: https://www.youtube.com/embed/uR1PAqJZUHY
- name: My Bounce
  url: https://www.youtube.com/embed/zbf-obfwKNA
- name: HITS
  url: https://www.youtube.com/embed/mleIYNQCDZE
- name: Summer Playlists
  url: https://www.youtube.com/embed/QVH_bXoCKBM
- name: Lettuce
  url: https://www.youtube.com/embed/5EPNG5D6H6c
- name: Love What You Live For
  url: https://www.youtube.com/embed/82OQ0UCYEPk
layout: default
---

<div class="container video">
  <section class="intro"></section>
  <ul class="videos">
    {% for vid in page.videos %}
    <li class="vid">
      <div class="vid-container">
        <div class="embed-container">
          <iframe
            src="{{ vid.url }}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
