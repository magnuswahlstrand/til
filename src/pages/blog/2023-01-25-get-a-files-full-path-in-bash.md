---
layout: "../../layouts/BlogPost.astro"
title: Get full path of file in bash
datetime: "2023-01-25"
tags: [bash, linux]
---

Today I learned that you can get a file's full path in bash using `realpath`. This is useful when you need the absolute
path for a configuration file, for example.

### Input

```
realpath myapp.log
```

### Result

```
/Users/magnus/services/myservice/myapp.log
```

# 🚗