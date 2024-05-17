---
layout: "../../layouts/BlogPost.astro"
title: "Parameterize SQL scripts"
datetime: "2024-05-17"
tags: [ sql, database, postgres ]
---

Today I learned that you can parameterize SQL scripts in PSQL. This is useful if you want to run the same script with different parameters, for example an `order_id`.


```sql
\set order_id '70a36b0d-f29d-4b06-a4b6-934736430c5f'
SELECT * FROM orders WHERE id = :order_id;

--- <output>
```

The code above only works if your order_id is a `numeric` value. If it is a `string`, you might get an error like:
```sql
ERROR:  syntax error at or near "70a3"
LINE 1: WHERE order_id = 70a36b0d-f29d-4b06-a4b6-934736430c5f;
```

If you need to use strings, use single quotes around the parameter:

```sql
SELECT * FROM orders WHERE id = :'order_id'

--- <output>
```

----------

This can be combined with the `\i` command to include the script in another script, as described [here](/blog/2024-03-14-access-the-shell-from-psql.md). 

```sql
\set order_id '70a36b0d-f29d-4b06-a4b6-934736430c5f'
\i script.sql

--- <output>
```

Good luck! 
# 🤦‍

