---
layout: "../../layouts/BlogPost.astro"
title: Update item in MongoDB list 
datetime: "2023-11-12"
tags: [ mongodb, database ]
---

The other day I was implement a simple cart system using MongoDB. I solved tracking of the items in the cart by using a dictionary.
Today I learned that you can instead use a list for the items. For example, let's say we have the following document:

```json
{
  "id": "Magnus",
  "countries": [
    {
      "name": "Sweden",
      "last_visit": datetime.datetime(2021, 1, 1),
    },
    {
      "name": "Norway",
      "last_visit": datetime.datetime(2021, 1, 1),
    },
  ]
}
```

To find a document with a specific country, we can use the following query:
```python
`db.users.find({'countries.name': 'Sweden'})`
```

But how do we update it? Turns out we can use the `$`-operator, a.k.a. the [positional operator](https://www.mongodb.com/docs/manual/reference/operator/update/positional).

```python
visit = collection.visits.find_one_and_update(
    filter={"id": "Magnus", "countries.name": "Sweden"},
    update={
        "$set": {"countries.$.last_visit": datetime.datetime(2023, 1, 2)}
    },
    new=True
)
```

Now we can verify that the document was updated:
```python
{
    "id": "Magnus",
    "countries": [
        {
            "name": "Sweden",
            "last_visit": datetime.datetime(2023, 1, 1),
        },
        {
            "name": "Norway",
            "last_visit": datetime.datetime(2021, 1, 1),
        },
    ]
}
```

**Note: This will only update the first match!** - If you have multiple countries with the same name, only the first one will be updated.

## More

There are a two more related operators. 

**The "all" operator `$[]`** - sets all elements in an array

```python
{"countries.$[].last_visit": datetime.datetime(2023, 1, 2)}
```

**The "filtered positional"operator `$[<identifier>]`.** Works together with an array filter. If we want to set all countries with the name "Sweden", we can use the following query: 

```python
update={"$set": {"countries.$[elem].last_visit": datetime.datetime(2023, 1, 2)}}
array_filters=[{"elem.name": "Sweden"}],
```

Now I can re-implement my cart!

# 😎

