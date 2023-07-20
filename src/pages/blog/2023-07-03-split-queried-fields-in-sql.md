---
layout: "../../layouts/BlogPost.astro"
title: "Split queried fields in SQL"
datetime: "2023-07-03"
tags: [ database, sql ]
---

Today I learnt how to split fields in a SQL query. Let's say I have a table of users with fullname and email, and I want
to instead have (best effort) first name, last name and email.
Using `split_part` I can do this:

```sql
SELECT split_part(fullname, ' ', 1) AS first_name, split_part(fullname, ' ', 2) AS last_name, email
FROM users;
```

```bash
first_name | last_name  | email
----------------+-------------------+---------------------------------------------------------------
Magnus     | Wahlstrand | wahl@mail.com
Foognus    | Barstrand  | foo@mail.com
Barnus     | Foostrand  | bar@mail.com
```

## Bonus
We can also store this content to a local file using `psql`:

```sql
\copy (
  SELECT split_part(fullname, ' ', 1) AS first_name, 
         split_part(fullname, ' ', 2) AS last_name, 
         email 
  FROM users 
  ORDER BY created_at DESC
) TO '/path/to/output.csv' WITH (FORMAT CSV, HEADER);
```


# 📚