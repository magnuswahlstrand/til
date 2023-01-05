---
layout: "../../layouts/BlogPost.astro"
title: List git branches in date order
datetime: "2023-01-05"
tags: [git]
---

Today I learned that you can list branches in order. This is not the order of creation, but the time of the latest
commit.

```
git branch --sort=committerdate
```

```
  some-old-feature
  main
  some-feature
* newest-feature
```

You can also get descending order with `--sort=-committerdate` or `--sort=committerdate --reverse`

```
git branch --sort=-committerdate
```

```
* newest-feature
  some-feature
  main
  some-old-feature
```

# 𝍂
