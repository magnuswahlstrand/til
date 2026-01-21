---
layout: "../../layouts/BlogPost.astro"
title: "Print the 2nd line of a file with sed"
datetime: "2026-01-21"
tags: [ shell, sed, terminal ]
---

Today I learned how to print the 2nd line of a file with sed:

```bash
sed -n '2p' file
```

## How it works

- `2` → line number 2
- `p` → print that line
- `-n` → suppress regular output (every line)

This will go through every line of the file. If the file is large, we can quit on line 2:

```bash
sed -n '2p;2q' file
```

## Alternative with head/tail

```bash
head -2 file | tail -1
```

Get the first 2 lines, then get the last line of that.

# 🎯
