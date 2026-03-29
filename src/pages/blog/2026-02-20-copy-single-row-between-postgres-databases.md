---
layout: "../../layouts/BlogPost.astro"
title: "Copy a single row between Postgres databases"
datetime: "2026-02-20"
tags: [ postgres, sql, database ]
---

Today I learned a clever way to copy a single row from one Postgres database to another using JSON as an intermediate format.

## The problem

Sometimes you need to test a fix for a production issue locally, or copy specific data to a test environment to validate a fix. Copying a single row between databases can be tricky, especially when dealing with complex data types.

## The solution

Use `row_to_json` to export, then `jsonb_populate_record` to import.

### Step 1: Export the row to JSON

In the source database (e.g., production):

```sql
\copy (
  SELECT row_to_json(t)
  FROM public.my_table t
  WHERE id = 123
) TO STDOUT;
```

**Output:**
```json
{"id":123,"name":"John Doe","email":"john@example.com","created_at":"2026-01-15T10:30:00"}
```

Copy this JSON output.

### Step 2: Import to target database

In the target database (e.g., local or test environment):

```sql
WITH j AS (
  SELECT '{"id":123,"name":"John Doe","email":"john@example.com","created_at":"2026-01-15T10:30:00"}'::jsonb AS doc
)
INSERT INTO public.my_table
SELECT (jsonb_populate_record(NULL::public.my_table, doc)).* 
FROM j;
```

## How it works

- `row_to_json(t)` converts the entire row to a JSON object
- `\copy TO STDOUT` outputs to your terminal for easy copying
- `jsonb_populate_record` reconstructs the row from JSON
- `NULL::public.my_table` provides the schema template

## Benefits

- **Works with complex types** – handles arrays, JSON columns, timestamps, etc.
- **Schema-aware** – ignores missing columns and applies defaults
- **No file needed** – copy/paste directly between terminals
- **Preserves data types** – JSON conversion handles type casting

## Gotchas

- Both databases must have matching schemas (or at least compatible ones)
- Missing columns in the target will use their default values
- Extra columns in the JSON that don't exist in the target are ignored

Perfect for testing production issues locally without full database dumps!

----------

That's it! Happy debugging.

# 🐘📋

