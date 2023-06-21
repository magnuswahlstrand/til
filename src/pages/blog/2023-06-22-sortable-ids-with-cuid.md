---
layout: "../../layouts/BlogPost.astro"
title: "Sortable IDs with CUID"
datetime: "2023-06-22"
tags: []
---

Today I learnt that there is another way to generate unique IDs, other than KSUID and UUIDv4 for my IDs, from [Theo's stream](https://www.twitch.tv/theo). The format is called CUID, presumably Collision-resistant unique ID.

It is:
* **Collision resistant** - about 4,000,000,000,000,000,000 IDs for a 50% chance of a collision
* **base36 encoded** - that is numbers and lowercase letters.
* **Sortable** - It is sortable by time.

Example IDs:
* clj6aocf2000008l50p2mezzf
* clj6aoo4w000108l53ukw6q0v
* clj6aorrb000208l5hqa2fisp

The first CUID library for javascript is not maintained, but there is a new version called [cuid2](https://github.com/paralleldrive/cuid2).  

# 0️⃣🅰️️