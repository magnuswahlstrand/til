---
layout: "../../layouts/BlogPost.astro"
title: "Load pg_dump into Postgres Docker container"
datetime: "2026-01-29"
tags: [ postgres, docker, database ]
---

Today I learned how to create a `pg_dump` backup file and restore it into a fresh PostgreSQL Docker container.

## Steps

```bash
# 1. Create dump file (custom format)
pg_dump postgresql://user:password@localhost:5432/mydb -Fc -f dump.backup

# 2. Start PostgreSQL container
docker run --name pg17 \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=localdb \
  -p 5432:5432 -d postgres:17

# 3. Copy dump file to container
docker cp dump.backup pg17:/dump.backup

# 4. Restore the dump
docker exec -it pg17 pg_restore \
  -U postgres -d localdb \
  --clean --if-exists --no-owner --no-privileges \
  /dump.backup

# 5. Verify tables were restored
docker exec -it pg17 psql -U postgres -d localdb -c "\dt"
```

## Useful pg_restore flags

- `--clean` - Drop database objects before recreating them
- `--if-exists` - Prevent errors if objects don't exist
- `--no-owner` - Don't restore ownership
- `--no-privileges` - Don't restore access privileges

# 🐘
