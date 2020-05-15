---
title: Asoh Black! | Music
permalink: "/music/"
songs:
- name: Black Ocean
  image: "/uploads/music03.jpg"
  url:  http://ffm.to/blackocean 
- name: AP Watch
  image: "/uploads/music02.jpg"
  url: http://ffm.to/apwatch
- name: Foolie
  image: "/uploads/music01.jpg"
  url: https://www.fanlink.to/foolie 
- name: 'Coffee Beans Remix '
  image: "/uploads/music04.jpg"
  url: https://audiomack.com/song/asoh-black/coffeebeans
- name: Wasted Lullabies
  image: "/uploads/music05.jpg"
  url: http://fanlink.to/wastedlullabies
- name: Chill, Vibe
  image: "/uploads/music07.jpg"
  url: http://fanlink.to/chill_vibe 
- name: Trailblazer
  image: "/uploads/music08.jpg"
  url: http://fanlink.to/trailblazer 
- name: That's Not Fair
  image: "/uploads/music09.jpg"
  url: htttp://fanlink.to/thatsnotfair 
- name: Dat My Baby
  image: "/uploads/music10.jpg"
  url: http://www.fanlink.to/datmybaby
- name: Move like Meechie
  image: "/uploads/music11.jpg"
  url: https://fanlink.to/movelikemeechie
- name: Joy
  image: "/uploads/music12.jpg"
  url: https://soundcloud.com/asohblack/joy?in=asohblack/sets/asohattacks-volume-1
- name: Word of Nowledge
  image: "/uploads/music13.jpg"
  url: www.fanlink.to/wordofnowledge 
- name: 3 Million
  image: "/uploads/music15.jpg"
  url: https://soundcloud.com/asohblack/3million?in=asohblack/sets/asohattacks-volume-1
- name: Hits
  image: "/uploads/music16.jpg"
  url: https://soundcloud.com/asohblack/hits?in=asohblack/sets/asohattacks-volume-1
- name: Zen Gems
  image: "/uploads/music17.jpg"
  url: https://open.spotify.com/album/6pG7f5qLxMW1S3e2LCRQxo?si=wDo6pRgaRa6c-ERwFOrWCg
- name: Economics (Bricks)
  image: "/uploads/music18.jpg"
  url: www.fanlink.to/economics 
- name: Rayven (unmastered)
  image: "/uploads/music19.jpg"
  url: www.fanlink.to/rayven
- name: Friday Night
  image: "/uploads/music20.jpg"
  url: www.fanlink.to/fridaynight 
- name: Listen to this Instead
  image: "/uploads/music21.jpg"
  url: www.fanlink.to/listentothisinstead 
- name: Summer Playlists
  image: "/uploads/music22.jpg"
  url: https://soundcloud.com/zensupremacy/asoh-black-summer-playlists-prod-by-swell
- name: 96' Styles
  image: "/uploads/music23.jpg"
  url: www.fanlink.to/96styles 
- name: House Party
  image: "/uploads/music24.jpg"
  url: https://open.spotify.com/track/2PzLZ786Kg73lHdbZM4fq1
- name: No Games
  image: "/uploads/music25.jpg"
  url: www.fanlink.to/nogames 
- name: DWDA
  image: "/uploads/music26.jpg"
  url: https://www.youtube.com/watch?v=OCpsGi7qH20
- name: Bump
  image: "/uploads/music27.jpg"
  url: www.fanlink.to/bumpmyshit
layout: default
---

<div class="container music">
  <section class="intro"></section>
  <ul class="songs">
    {% for song in page.songs %}
    <li>
      <a target= "_blank" href="{{ song.url }}">
        <div class="song" style='background-image: url("{{ song.image }}");'>
          <small class="song-title">{{song.name}}</small>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>

</div>