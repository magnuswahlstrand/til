---
layout: "../../layouts/BlogPost.astro"
title: Prefix and join strings in bash
datetime: "2024-10-12"
tags: [ bash, scripting ]
---

Today I was working with turbo repo, and wanted to build a filter of packages to build. I wanted to turn

```
peach
apple
pear
```

into

```bash
--filter=peach --filter=apple --filter=pear
```

Turns out we can easily do this with `sed` and `tr`. If the input is in file `input.txt`, we can do

```bash
cat input.txt | sed 's/.*/--filter=&/' | tr '\n' ' '
```

Sed explained:

2. `.*` matches on anything
3. `--filter=&` prefixes with `--filter=` and `&` outputs complete match from steps 1.

Finally we replace newlines with spaces.

Result: 
```bash
--filter=peach --filter=apple --filter=pear
```

# ✂️




