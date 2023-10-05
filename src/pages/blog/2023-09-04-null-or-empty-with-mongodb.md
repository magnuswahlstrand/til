---
layout: "../../layouts/BlogPost.astro"
title: Null or empty with MongoDB
datetime: "2023-09-04"
tags: [ mongodb, database ]
---

A common problem I run into when working with MongoDB with document fields that can be either null or empty. E.g.

## Scenario A (field is null)

```json
{
  ...
  "payment": null
}
```

## Scenario B (field is missing)

```json
{
  ...
}
```

This is easy to overlook when running migration scripts or general queries. Today I learned how to handle that inside
MongoDB `$cond` operator. A first faulty version could look like this:

```json
{
  $cond: {
    if: {
      $eq: [
        "$payment",
        null
      ]
    },
    then: "has paid",
    else: "has NOT paid 😡"
  }
}
```

This will only work for the case when the field exists and is `null` (Scenario A). What we need to do is to use
the `$isNull`-operator like so:

```json
{
  $ifNull: [
    "$payment",
    null
  ]
}
```

This takes the field `$payment`, and if it is `null` OR missing. Otherwise it returns the value of `$payment`. Our full,
working query becomes:

```js
db.customers.updateMany(
    {},
    [
        {
            $set: {
                has_paid: {
                    $cond: {
                        if: {
                            $eq: [{$ifNull: ["$payment", null]}, null],
                        },
                        then: "has paid",
                        else: "has NOT paid 😡"
                    }
                }
            }
        }
    ]
);
```

# 🎡