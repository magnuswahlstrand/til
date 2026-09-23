---
layout: "../../layouts/BlogPost.astro"
title: Copy a row between Postgres databases via the clipboard
datetime: "2026-09-23"
tags: [ postgres, psql, sql ]
---

Today I learned that you can copy a single row from one Postgres database to another using `psql`'s `\copy`, CSV format and the clipboard.

In the source database, copy the row to the clipboard with `pbcopy`:

```sql
\copy (select * from inventory_reservations where id = 5614) to program 'pbcopy' with (format csv);
```

Then, connected to the target database (e.g. prod), insert it from the clipboard with `pbpaste`:

```sql
\copy inventory_reservations from program 'pbpaste' with (format csv);
```

`\copy` runs the program on the client side, so `pbcopy`/`pbpaste` run on your own machine rather than on the database server. It also requires the columns to be the same in both tables.

Over and out!

# ✅

**Note:** this works for multiple rows as well!
