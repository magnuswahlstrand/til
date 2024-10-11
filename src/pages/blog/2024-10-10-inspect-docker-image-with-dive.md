---
layout: "../../layouts/BlogPost.astro"
title: Inspecting docker images with dive
datetime: "2024-10-10"
tags: [ docker ]
---

I've been trying to figure out why caching isn't working for some of my Docker builds. In my quest, I stumbled upon a
tool called [dive](https://github.com/wagoodman/dive).

It is written in Go and is a completely amazing tool to inspect Docker images. You can inspect the Docker layers, their
file system additions and hashes. Absolutely wonderful!

![dive.png](/til/img/dive.png)

# 🐳