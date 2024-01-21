---
layout: "../../layouts/BlogPost.astro"
title: Generating data with SQL - part 2
datetime: "2024-01-21"
tags: [ bigquery, sql, database ]
---

Follow up to [Generating data with UNNEST and ARRAY_AGG in BigQuery](/til/blog/2024-01-17-creating-data-with-big-query/).

Today I learned some more tricks to generate data with SQL.

## Using VALUES

We can use VALUES to generate data:

```sql
select * from (values(1, ('a','b','c'))) v(id,b);
```
```
 id |    b
----+---------
  1 | (a,b,c)
```

If we try to UNNEST the array, we get an error:


```bash
ERROR:  record type has not been registered
```

This is because Postgres (in this case) doesn't know what type `values(1, ('a','b','c'))` is. We can fix this by making it an ARRAY. 

```sql
select id, letter from (values(1, ARRAY['a','b','c'])) v(id,b), unnest(v.b) as letter;
```
```
 id | letter
----+--------
  1 | a
  1 | b
  1 | c
```

#### Multiple arrays
We can generate even _**more**_ data, if we have two arrays to UNNEST 🤓
    
```sql
select id,latter, letter from (values(1, ARRAY['a','b','c'], ARRAY['x','y','z'])) v(id,b,c), unnest(v.b) as latter, unnest(v.c) as letter;
```

```
 id | latter | letter
----+--------+--------
  1 | a      | x
  1 | a      | y
  1 | a      | z
  1 | b      | x
  1 | b      | y
  1 | b      | z
  1 | c      | x
  1 | c      | y
  1 | c      | z
```

## Using dates

First out, we can select the current date and modify it using `INTERVAL`:

```sql 
select current_date, DATE(current_date - INTERVAL '1 MONTH') as previous_month;
```
```
 current_date | previous_month
--------------+------------
 2024-01-21   | 2023-12-21
```


We can also generate a series of dates, using `generate_series`:

```sql
select date(current_date - s * INTERVAL '1 MONTH') from generate_series(0,9) as s;
```

```
    date
------------
 2024-01-21
 2023-12-21
 2023-11-21
 2023-10-21
 2023-09-21
 2023-08-21
 2023-07-21
 2023-06-21
 2023-05-21
 2023-04-21
```
    
Finally, we can do conditionals on the generated dates:

```sql
with dates as (
    select 
        date(current_date - s * INTERVAL '1 MONTH') 
    from 
        generate_series(0,10) as s
    )
select date, case when extract(month from date) = 12 then 'Christmas!' else '' end  from dates;
```

```
    date    |    case
------------+------------
 2024-01-21 |
 2023-12-21 | Christmas!
 2023-11-21 |
 2023-10-21 |
 2023-09-21 |
 2023-08-21 |
 2023-07-21 |
 2023-06-21 |
 2023-05-21 |
 2023-04-21 |
 2023-03-21 |
```

That's it!

# 🐘