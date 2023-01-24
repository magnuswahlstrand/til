---
layout: "../../layouts/BlogPost.astro"
title: Setting up a poetry project
datetime: "2023-01-22"
tags: [python, poetry]
---

Today I learned how to create a python module using [poetry](https://python-poetry.org/).

1. Initialize the project

```
poetry new my-module
cd my-module
```

2. Add dependencies

```
poetry add sentry_sdk
```

3. Add code to `my_module/__init__.py`
4. Start using locally in another

```
pip install -e ../my-module
```

Done!

# 💬
