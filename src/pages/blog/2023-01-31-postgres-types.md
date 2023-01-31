---
layout: "../../layouts/BlogPost.astro"
title: Postgres types
datetime: "2023-01-31"
tags: [postgres]
---

Today I learned how to create, list and delete postgres types.

#### Create an type

```
CREATE TYPE fruit_names AS ENUM ('APPLE', 'BANANA', 'KIWI', 'PEAR', 'ORANGE');
```

#### List all types

```
postgres=> \dT;
List of data types
-[ RECORD 1 ]----------
Schema      | public
Name        | fruit_names
Description |

```

#### List all types and their values

```
postgres=> \dT+;
List of data types
-[ RECORD 1 ]-----+--------------------
Schema            | public
Name              | fruit_names
Internal name     | fruit_names
Size              | 4
Elements          | APPLE     +
                  | BANANA    +
                  | KIWI      +
                  | PEAR      +
                  | ORANGE
Owner             | my-service
Access privileges |
Description       |
```

#### List a single types and its values

```
postgres=> \dT+ fruit_names;
List of data types
-[ RECORD 1 ]-----+--------------------
Schema            | public
Name              | fruit_names
Internal name     | fruit_names
Size              | 4
Elements          | APPLE     +
                  | BANANA    +
                  | KIWI      +
                  | PEAR      +
                  | ORANGE
Owner             | my-service
Access privileges |
Description       |
```

#### Add a value to a type

```
ALTER TYPE fruit_names ADD VALUE 'BETTER_BANANA';
```

#### Remove the type completely

```
DROP TYPE fruit_names;
```

# 🐘