---
layout: "../../layouts/BlogPost.astro"
title: Rerun last failed tests stepwise
datetime: "2023-01-04"
tags: [python, pytest]
---

Sometimes you want to go through and fix one test at a time. This can be done with the `--stepwise` flag for tests.

```
pytest --stepwise
```

This runs all tests initially, but exits on first failure. On next run, it starts with that failing test.

# 🪜
