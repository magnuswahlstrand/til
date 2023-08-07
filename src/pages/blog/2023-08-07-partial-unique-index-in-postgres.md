---
layout: "../../layouts/BlogPost.astro"
title: "Partial unique index in Postgres"
datetime: "2023-08-07"
tags: [ database, sql, postgres ]
---

Today I learnt that you can use conditional unique indexes in Postgres ignore, for example, deactivated entries.

Example:

```sql
CREATE TABLE users
(
    user_id   SERIAL PRIMARY KEY,
    email     VARCHAR(255),
    is_active BOOLEAN NOT NULL,
    name      VARCHAR(255)
);

CREATE UNIQUE INDEX idx_unique_active_email ON users (email) WHERE is_active = TRUE;
```

1. Create initial user

```sql
> INSERT INTO users (email, is_active, name) VALUES ('magnus@mail.com', True, 'Magnus');
```

2. Try to create another user with the same email

```sql
> INSERT INTO users (email, is_active, name) VALUES ('magnus@mail.com', True, 'John');
ERROR
:  duplicate key value violates unique constraint "idx_unique_active_email"
DETAIL:  Key (email)=(magnus@mail.com) already exists.
```

3. Deactivate original user

```sql
> UPDATE users SET is_active = False WHERE user_id = 1;
```

4. Try to create another user with the same email

```sql
> INSERT INTO users (email, is_active, name) VALUES ('magnus@mail.com', True, 'John');
```

5. Inspect the table

```SQL
> SELECT * FROM users;

user_id
|      email      | is_active |  name
---------+-----------------+-----------+--------
1 | magnus@mail.com | f         | Magnus
3 | magnus@mail.com | t         | John
```

### Tada! 🎉

# 📚