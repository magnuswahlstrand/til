---
layout: "../../layouts/BlogPost.astro"
title: Diffing directories with diff
datetime: "2024-10-10"
tags: [ bash, productivity ]
---

I have used `diff` before to compare files line by line. Today I learned that you can compare whole **directories** file
by file and line by line.

I like two differen
`diff -bru undici-types@5.26.5 undici-types@6.19.8`

![diff-bru.png](/til/img/diff-bru.png)

Breakdown:

* `-b` - Ignore space change
* `-r` - Recursive
* `-u` - Produces a unified diff with 3 lines of context

You can also replace `u` with `y` to get diffs side by side.
`diff -bry undici-types@5.26.5 undici-types@6.19.8`

![diff-bry.png](/til/img/diff-bry.png)

# 📁