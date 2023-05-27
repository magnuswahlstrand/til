---
layout: "../../layouts/BlogPost.astro"
title: "Useful MongoDB commands"
datetime: "2023-05-16"
tags: [mongodb, mongosh]
---

Today I re-learned that you can find a document in MongoDB if a key exists using `$exists`.

```python
db.collection.find_one({ key: { $exists: true }})
```

If I'm only interested in specific fields, I can use `$exists` in a projection.

```python
id = db.collection.find_one(
    { key: { $exists: true }}, 
    { _id: 1 }
)
```

If I want to update a specific field, I can use `$set`.

```python
db.collection.update_one(
    { _id: ObjectId(id) }, 
    { $set: { key: "value" } }
)
```

If I want to update a specific field, and push a value to an array, I can use `$push`.

```python
db.collection.update_one(
    { _id: ObjectId(id) },
    { $set: { key: "value" }, $push: { events: {name: 'connected_event'} }}
)
```

That's it!

# 🥴