---
layout: "../../layouts/BlogPost.astro"
title: Use TABLE instead of SELECT * in Postgres
datetime: "2026-09-16"
tags: [ postgres, sql ]
---

Today I learned that Postgres has a shorthand for `SELECT * FROM`. Instead of

```sql
select * from customers;
```

you can write

```sql
table customers;
```

It also supports `order by`, `limit` and `offset`, so it's handy for quickly peeking at a table:

```sql
table customers order by created_at desc limit 5 offset 10;
```

```
mydb=> table customers limit 5;
 id  |         name         | country |       created_at
-----+----------------------+---------+-------------------------
 101 | Acme AB              | SE      | 2026-02-03 14:34:32.66
 102 | Example Industries   | SE      | 2026-02-26 02:00:47.299
 103 | Foo & Bar Consulting | NO      | 2026-06-17 02:05:43.247
 104 | Nordic Widgets Oy    | FI      | 2026-08-31 08:54:24.665
 105 | Test Customer 42     | SE      | 2026-09-15 02:05:09.7
(5 rows)
```

However, `where` is **not** supported, so for filtering you still need `select`:

```
mydb=> table customers where country = 'SE';
ERROR:  syntax error at or near "where"
```

Over and out!

# ✅
