---
layout: "../../layouts/BlogPost.astro"
title: More awk
datetime: "2023-10-05"
tags: [ shell, awk ]
draft: true
---

### Examples

**Making columns**

**file** 
```bash
main HEAD@{65 minutes ago}
branch-123 HEAD@{69 minutes ago}
branch-foo HEAD@{3 hours ago}
```

**Result**
```
> awk -F'HEAD@' '{printf "%-40s %s\n", $1, $2}' file
main                                     {75 minutes ago}
separate-v1-v2-endpoints-add-calc-v2     {80 minutes ago}
use-different-caputure-method-for-us-eu  {3 hours ago}
```

# 👩‍👩‍👧‍👦

