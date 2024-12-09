---
layout: "../../layouts/BlogPost.astro"
title: Debugging sketchybar in macOS
datetime: "2024-12-09"
tags: [ productivity, sketchybar ]
---

Today I learned how to debug [sketchybar](https://github.com/FelixKratz/SketchyBar) in macOS.

The trick is to always monitor the logs. You can do this by running the following commands:
```bash
tail -f /opt/homebrew/var/log/sketchybar/sketchybar.err.log
tail -f /opt/homebrew/var/log/sketchybar/sketchybar.out.log
```

That's all for now!

# 🍫
