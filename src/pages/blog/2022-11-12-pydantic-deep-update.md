---
layout: "../../layouts/BlogPost.astro"
title: "Deep update dict with Pydantic"
datetime: "2022-11-12"
tags: [python, pydantic]
---

When I write integration tests in Python, I often end up function similar to the one below, to build up test data:


```python
def build_request(**kwargs):
    d = {
        "id": "abc123",
        "rows": [
            1, 2, 4
        ],
        "user": {
            "name": "Magnus",
            "age": 35,
            "eye_color": "red",
        }
    }
    d.update(**kwargs)
    return d
```

I can replace certain values as follows

```python
req = build_request(id="other123")
```
-->
```python
{
    'id': 'other123',
    'rows': [1, 2, 4],
    'user': {
        'name': 'Magnus',
        'age': 35,
        'eye_color': 'red'
    }
}
```

### An alternative - deep update
The function works well in most cases, but only works on the top level. If I want to update a complex nested object, I need to add **all** fields.
```python
req = build_request(user={
    "name": "John", # Replaced
    "age": 35,
    "eye_color": "red",
})
```

Yesterday, I discovered the `deep_update` function from pydantic. It will merge dicts rather than overwrite. Our new function:
```python
from pydantic.utils import deep_update

def build_request_v2(**kwargs):
    d = {
        "id": "abc123",
        "rows": [
            1, 2, 4
        ],
        "user": {
            "name": "Magnus",
            "age": 35,
            "eye_color": "red",
        }
    }
    return deep_update(d, kwargs) # Replaced
```

Now we can use that to replace only certain values in the user object:
```python
req = build_request_v2(user={"name":"John"})
```
-->
```python
{
    'id': 'abc123',
    'rows': [1, 2, 4],
    'user': {
        'name': 'John',
        'age': 35,
        'eye_color': 'red'
    }
}
```
Nice! 🔥
