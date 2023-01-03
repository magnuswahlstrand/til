---
layout: "../../layouts/BlogPost.astro"
title: "Install local package with pip"
datetime: "2022-12-14"
tags: [python, pip]
---

Today I learned that you can install a local python package with pip, with the `pip install -e` command!

```
pip install --help                                                                                                                                                                                        130 ↵

Install Options:
  ...
  -e, --editable <path/url>   Install a project in editable mode (i.e. setuptools "develop mode") from a local project path or a VCS url.
```

This is very convenient when you are developing a package and want to test it before creating an actual release. For example, if I have the following structure:

```
repos
├── my-python-app
└── my-python-package
```

I can go to `my-python-app` and run `pip install -e ../my-python-package`. Any updates I make inside `my-python-package` are directly used by `my-python-app`

# 👾
