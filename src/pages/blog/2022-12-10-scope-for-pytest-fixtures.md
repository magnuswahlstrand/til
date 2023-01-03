---
layout: "../../layouts/BlogPost.astro"
title: "Scopes for fixtures with pytest"
datetime: "2022-12-10"
tags: [python, pytest]
---

Today I learned that you can set a [scope](https://docs.pytest.org/en/6.2.x/fixture.html#fixture-scopes) on your pytest fixture to decide how long they are valid for. This can be used for `before/after test` and `before/after suite` behaviours.

Scopes are set like so:
```python
@pytest.fixture(scope="session")
def db():
    # the returned fixture value will be shared for
    # all tests requesting it
    ...
```

There are [five values for scope](https://docs.pytest.org/en/6.2.x/fixture.html#fixture-scopes). From the docs:

* **function**: the default scope, the fixture is destroyed at the end of the test.
* **class**: the fixture is destroyed during teardown of the last test in the class.
* **module**: the fixture is destroyed during teardown of the last test in the module.
* **package**: the fixture is destroyed during teardown of the last test in the package.
* **session**: the fixture is destroyed at the end of the test session.
             
I have mainly used **session** and **function** (the default). Session can be used to run a database migration before, and after the test has been run.

In newer versions of pytest, we can also set [dynamic scope](https://docs.pytest.org/en/6.2.x/fixture.html#dynamic-scope), but I haven't tested that yet.

# 🧪
