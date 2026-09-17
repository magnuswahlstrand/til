---
layout: "../../layouts/BlogPost.astro"
title: Fix Enter showing up as ^M in the terminal
datetime: "2026-09-17"
tags: [ terminal, shell ]
---

Today I learned how to fix a terminal where pressing Enter just prints `^M` instead of submitting the line. I got stuck on a prompt like this:

```
Do you want to continue (Y/n)?  ^M^M^M
```

`^M` is a carriage return (`\r`). Normally the terminal translates it into a newline (`\n`), but some program changed the TTY settings and didn't restore them when it exited.

The fix is to reset the TTY settings:

```bash
stty sane
```

Enough!

# 🔧
