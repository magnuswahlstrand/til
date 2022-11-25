---
layout: "../../layouts/BlogPost.astro"
title: "How to list pytest fixtures"
datetime: "2022-11-21"
tags: [python, pytest]
---

Working with [fixtures](https://docs.pytest.org/en/6.2.x/fixture.html) in pytest can both be a great or a terrible experience. Sometimes both. Troubleshooting them can be really hard. This is partly due to the fact that they are magically imported, and are silently overridden if defined multiple times.

Today colleague showed me how to list all fixtures that are available.

```bash
pytest --fixtures
```
Output:
```
pytest --fixtures
=============================================================================================== test session starts ================================================================================================
platform darwin -- Python 3.10.4, pytest-7.1.2, pluggy-1.0.0

...

monkeypatch -- .../_pytest/monkeypatch.py:29
    A convenient fixture for monkey-patching.

...

------------------------------------------------------------------------------------------ fixtures defined from conftest ------------------------------------------------------------------------------------------
username -- conftest.py:4
    no docstring available
```
Here we can see pytest's built-in `monkeypatch`, and a local fixture called `username`.

# 🐍
