---
layout: "../../layouts/BlogPost.astro"
title: Rename fields in MongoDB
datetime: "2023-08-22"
tags: [ mongodb, db ]
---

Today I learned that you can rename fields in MongoDB using the `$rename` operator. For example:

```py
collection.orders.find_one_and_update(
    {"_id": order["id"]},
    {"$rename": {"craeted_at": "created_at"}},
)
```

This changes the `craeted_at` field to `created_at`. If the field doesn't exist, it does nothing.

# ㏈