---
layout: "../../layouts/BlogPost.astro"
title: "Monkeypatch a dictionary in Python"
datetime: "2023-05-08"
tags: [python, pytest]
---

Today I learned that you can monkeypatch a dictionary in Python using `monkeypatch.setitem`.

```python
def test_monkeypatch_dictionary(monkeypatch):
    from someplace import DEFAULT_PRICES
    
    key_to_patch = "EUR"
    value_to_patch = {"amount": 1000, "currency": "EUR"}
    monkeypatch.setitem(DEFAULT_PRICES, key_to_patch, value_to_patch

    assert DEFAULT_PRICES[key_to_patch] 
           == {"amount": 1000, "currency": "EUR"}
```

# 