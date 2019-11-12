---
title: Listen
date: 2019-11-12 19:44:00 Z
Link: https://ffm.to/jjov2w7.owe
---

<div class="container music">
  <ul class="songs">
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