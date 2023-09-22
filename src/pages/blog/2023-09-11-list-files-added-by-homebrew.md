---
layout: "../../layouts/BlogPost.astro"
title: List files added by Homebrew
datetime: "2023-09-11"
tags: [ mac, homebrew ]
---

Today I learned how to list files that was added by `homebrew` during installation. For example:

1. ```brew install cpr```

2. ```brew list cpr```

3. Output:
```
/opt/homebrew/Cellar/cpr/1.10.4/include/cpr/ (50 files)
/opt/homebrew/Cellar/cpr/1.10.4/lib/libcpr.1.10.4.dylib
/opt/homebrew/Cellar/cpr/1.10.4/lib/cmake/ (4 files)
/opt/homebrew/Cellar/cpr/1.10.4/lib/ (3 other files)
```

# 🍻

