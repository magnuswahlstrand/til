---
layout: "../../layouts/BlogPost.astro"
title: Ranking with window functions
datetime: "2024-01-21"
tags: [ bigquery, sql, database ]
---

Today I learned how to use window functions in SQL, from the excellent [PostgresGuides](https://www.postgresguide.com/tips/window/) website.

## `Rank()`

If I have this data:
```sql
SELECT * FROM employees ;
```

```sql
 last_name | salary | department
-----------+--------+------------
 Larsson   |  48000 | Accounting
 Bergstrom |  52000 | Sales
 Hakansson |  46000 | Marketing
 Svensson  |  39000 | Accounting
 Lindberg  |  56000 | Sales
 Nyström   |  58000 | Sales
 Holm      |  43000 | IT
 Engström  |  50000 | Marketing
 Matsson   |  58000 | Sales    
```

We can rank the employees by department and salary using the `RANK()` function, and then choose number 1 from each department:

```sql
SELECT 
    * 
FROM (
    SELECT 
        *, 
        rank() over (partition by department order by salary desc)
    FROM 
        employees) t 
WHERE rank = 1;
```

```sql
 last_name | salary | department | rank
-----------+--------+------------+------
 Larsson   |  48000 | Accounting |    1
 Svensson  |  39000 | Accounting |    2
 Holm      |  43000 | IT         |    1
 Engström  |  50000 | Marketing  |    1
 Hakansson |  46000 | Marketing  |    2
 Matsson   |  58000 | Sales      |    3
 Nyström   |  58000 | Sales      |    1
 Lindberg  |  56000 | Sales      |    2
 Bergstrom |  52000 | Sales      |    3
```

## `DENSE_RANK()`

RANK() will skip numbers if there are ties. E.g. ranks will be 1,1,3,4. If we want to avoid that, we can use `DENSE_RANK()` instead:

```sql
SELECT *, rank() over (partition by department order by salary desc)  FROM employees WHERE department='Sales';
```

```
 last_name | salary | department | rank
-----------+--------+------------+------
 Nyström   |  58000 | Sales      |    1
 Matsson   |  58000 | Sales      |    1
 Lindberg  |  56000 | Sales      |    3
 Bergstrom |  52000 | Sales      |    4
```

With `dense_rank()`:

```sql
SELECT *, dense_rank() over (partition by department order by salary desc)  FROM employees WHERE department='Sales';
```

```sql
 last_name | salary | department | dense_rank
-----------+--------+------------+------------
 Nyström   |  58000 | Sales      |          1
 Matsson   |  58000 | Sales      |          1
 Lindberg  |  56000 | Sales      |          2
 Bergstrom |  52000 | Sales      |          3
```

Not exactly sure when I would use this, but it's good to know 🤓

# 🍻