---
layout: "../../layouts/BlogPost.astro"
title: "Clean up Docker disk usage"
datetime: "2024-05-31"
tags: [ docker ]
---

Today I learned that can list how much disk space Docker is using with the command `docker system df`. 

**Example output:**
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          256       1         20.91GB   20.55GB (98%)
Containers      1         1         0B        0B
Local Volumes   276       1         35.28GB   35.28GB (100%)
Build Cache     359       16        2.238GB   786.1MB
```

Then you can use the `docker volume prune` to remove all unused volumes.

**Example output:**
```
Deleted Volumes:
1d3550d9b4069933e3628f3e9e608cc2785e4774c16f678eecca5ca0f9d375ec
717a4b550b74d8c2f0abd0eeac5d8be9afc96dc79af0d45beae4c08b0728ab76
....
....
6a74c410dd085e5aafdbb4faea6cc695a5991bb4406590249d54a6dd425e1662
bdd2ed69e7827fb3c4d4425945b7b887614699d1b6c23829a7fb698399287fe0

Total reclaimed space: 35.28GB
```

Back to work!

# 🌴

