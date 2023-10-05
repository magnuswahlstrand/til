---
layout: "../../layouts/BlogPost.astro"
title: Find MongoDB lists with length
datetime: "2023-09-25"
tags: [ mongodb, database ]
---

Today I learned from [this StackOverflow answer](https://stackoverflow.com/q/7811163) that you can find lists with more
than N elements.

Let's say we want order with more than 1 items, we can just check for the existance of the second item:

```python
db.orders.find({'items.1': {$exists: true}})
```

The following query will return orders with only one item ***or less***:

```python
db.orders.find({'items.2': {$exists: false}})
```

# 🍃

