---
layout: "../../layouts/BlogPost.astro"
title: Rerun only failed tests with pytest
datetime: "2023-01-04"
tags: [python, pytest]
---

Today I learned that you can tell pytest to re-run only the tests that failed last run. For example:

```
pytest --last-failed tests
```

There choose to run all tests, but run the previously failing tests first with `--ff`
```
> pytest --help                                                                                                                                                                                           1 ↵

--lf, --last-failed   Rerun only the tests that failed at the last run (or all if none failed)
--ff, --failed-first  Run all tests, but run the last failures first. This may re-order tests and thus lead to repeated fixture setup/teardown.
```

# 🐍
