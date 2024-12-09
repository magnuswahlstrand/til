---
layout: "../../layouts/BlogPost.astro"
title: Ternary expressions in bash
datetime: "2024-11-21"
tags: [ bash, scripting ]
---

Today I learned that you can use ternary expressions in bash. 

```bash
OUTPUT=$([[ -n "$VAR" ]] && echo "${VAR}-BOT" || echo "UNKNOWN")
```

That's all!

# ⁉️
