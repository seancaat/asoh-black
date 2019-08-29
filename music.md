---
title: Music
permalink: "/music/"
albums:
- name: Sleepwalking Through Reality
  image: "/uploads/artworks-000178840342-vlq6ls-t500x500-85e30b.jpg"
- name: Listen To This Instead
  image: "/uploads/4e470be18cc832bb2fca2a18d90e2a62.300x300x1.jpg"
- name: 
  image: 
- name: 
  image: 
layout: default
---

---
layout: default
---

{% for album in page.albums %}
{{ album.name }}
<img src="{{ album.image }}" />
{% endfor %}