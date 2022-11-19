---
layout: "../../layouts/BlogPost.astro"
title: "Using an emoji as favoicon"
datetime: "2022-11-19"
tags: [emoji, web]
---

One of the hardest thing in web development is creating a favicon. 

Today, I was looking for a way of generating one from emojis. I got the solution from this [StackOverflow answer](https://stackoverflow.com/a/61238584). Turns out that you can do it directly as an SVG!

This is the `favicon.svg` file of this website:
```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <text y="16" font-size="16">🤔</text>
  <text y="28" x="16" font-size="16">💡</text>
</svg>
```

That's it! **FYI**: I usually use [Emojipedia](https://emojipedia.org/) to browse emojis.
# 🤔💡
