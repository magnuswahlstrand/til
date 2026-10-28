---
layout: "../../layouts/BlogPost.astro"
title: Show the environment in the psql prompt using an env var
datetime: "2026-10-28"
tags: [ postgres, psql ]
---

Today I learned that you can put the output of a shell command in the `psql` prompt. That makes it easy to show which environment you're connected to, so you don't accidentally run something against prod.

Add this to your `~/.psqlrc`:

```
\set PROMPT1 '%/ %[%033[1;31m%](%`echo $PSQL_ENV`)%[%033[0m%]%R%# '
```

- `%/` is the database name
- `` %`echo $PSQL_ENV` `` runs a shell command and inserts its output
- `%[%033[1;31m%]` turns on bold red, and `%[%033[0m%]` resets it. The `%[ ... %]` tells psql that the characters are invisible, so line editing doesn't get confused
- `%R%#` gives the usual `=>` (or `=#` as superuser)

Then set the variable when connecting:

```bash
PSQL_ENV=TEST psql "$TEST_DATABASE_URL"
```

```
edge-gateway (TEST)=> exit
```

For prod, I also want the session to be read only. That can be done with `PGOPTIONS`:

```bash
PSQL_ENV="PROD ro" PGOPTIONS="-c default_transaction_read_only=on" psql "$PROD_DATABASE_URL"
```

```
edge-gateway (PROD ro)=> delete from customers;
ERROR:  cannot execute DELETE in a read-only transaction
```

Wrap them in aliases and you're good to go!

Over and out!

# ✅
