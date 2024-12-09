---
layout: "../../layouts/BlogPost.astro"
title: Add prefix to all files
datetime: "2024-11-07"
tags: [ bash, scripting ]
---

Today I learned how to add a prefix to all files in a directory.

```bash
for f in *; do mv "$f" "prefix-$f"; done
```

That's it!

# 🚀
