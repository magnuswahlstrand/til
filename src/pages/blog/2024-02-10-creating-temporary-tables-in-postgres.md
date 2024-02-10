---
layout: "../../layouts/BlogPost.astro"
title: Creating temporary tables in Postgres
datetime: "2024-02-10"
tags: [ postgres, sql, database ]
---

Today I learned that you can create temporary tables in Postgres. 

Sometimes, I find myself building a query that is too complex to update inline, in a tool such as `psql`. 
To simplify quick prototyping, we can create a temporary table to store the result of a query, and then query the temporary table.

```sql
SELECT * FROM employees WHERE department='Sales';
```

```sql
 last_name | salary | department
-----------+--------+------------
 Bergstrom |  52000 | Sales
 Lindberg  |  56000 | Sales
 Nyström   |  58000 | Sales
```

We can create a temporary table with the `CREATE TEMPORARY TABLE` statement:

```sql
CREATE TEMP TABLE sales_employees AS (
    SELECT * FROM employees WHERE department='Sales'
);
```

And then query that table:

```sql
SELECT * FROM sales_employees;
```

```sql
 last_name | salary | department
-----------+--------+------------
Bergstrom |  52000 | Sales
Lindberg  |  56000 | Sales
Nyström   |  58000 | Sales
```

If we exit the session, the temporary table is dropped.

# ⏳🐘