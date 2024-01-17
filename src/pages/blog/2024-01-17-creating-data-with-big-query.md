---
layout: "../../layouts/BlogPost.astro"
title: Generating data with UNNEST and ARRAY_AGG in BigQuery
datetime: "2024-01-17"
tags: [ bigquery, sql ]
---

Today I started working with [BigQuery](https://cloud.google.com/bigquery) again. Here are a few tips and tricks I
learned to generate data with `UNNEST` and `ARRAY_AGG`.

## UNNEST

For example

```sql
SELECT *
FROM UNNEST(["Stockholm", "Gothenburg", "Solna"])
         AS city
```

#### Output

| Row | city       |
|-----|------------|
| 1   | Stockholm  |
| 2   | Gothenburg |
| 3   | Solna      |

### ARRAY_AGG

We can also do the reverse, by using ARRAY_AGG:

```sql
SELECT ARRAY_AGG(city)
FROM UNNEST(["Stockholm", "Gothenburg", "Solna"]) AS city
```

#### Output

| Row | city       |
|-----|------------|
| 1   | Stockholm  |
|     | Gothenburg |
|     | Solna      |

### ARRAY_AGG with GROUP BY

We can use ARRAY_AGG with GROUP BY:

```sql
SELECT name_length,
       ARRAY_AGG(city)
FROM (SELECT LENGTH(city) as name_length, city
      FROM UNNEST(["Stockholm", "Gothenburg", "Solna", "Sundbyberg", "Malmö"]) AS city)
GROUP BY name_length
```

#### Output

| Row | city       |
|-----|------------|
| 9   | Stockholm  |
| 10  | Gothenburg |
|     | Sundbyberg |
| 5   | Solna      |
|     | Malmö      |

### SELECT on an array

We can generate data by selecting on an array:

```sql
SELECT [1,2,3,4,5]
```

#### Output

| Row | f0_ |
|-----|-----|
| 1   | 1   |
|     | 2   |
|     | 3   |
|     | 4   |
|     | 5   |

And UNNEST it
    
    ```sql
    SELECT *
    FROM UNNEST([1,2,3,4,5])
    ```

#### Output

| Row | f0_ |
|-----|-----|
| 1   | 1   |
| 2   | 2   |
| 3   | 3   |
| 4   | 4   |
| 5   | 5   |

### STRUCT

We can also use STRUCT to generate data:

```sql
SELECT STRUCT("Magnus" as name, 36 as age) as _STRUCT
```

#### Output

| Row | _STRUCT.name | _STRUCT.age |
|-----|--------------|-------------|
| 1   | Magnus       | 36          |


Or UNNEST multiple rows:

```sql
SELECT *
FROM UNNEST([STRUCT("Magnus" as name, 36 as age), STRUCT("Gandalf" as name, 99)])
```

#### Output

| Row | name    | age |
|-----|---------|-----|
| 1   | Magnus  | 36  |
| 2   | Gandalf | 99  |


That was all for today!

# 🖨