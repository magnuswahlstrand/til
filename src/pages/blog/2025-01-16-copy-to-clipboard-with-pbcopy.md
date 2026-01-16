---
layout: "../../layouts/BlogPost.astro"
title: "Copy query results to clipboard in psql with pbcopy"
datetime: "2025-01-16"
tags: [ psql, postgres, macos ]
---

Today I learned that you can copy query results directly to your clipboard in `psql` on macOS using `\copy` with the `PROGRAM` option.

## Basic usage

As you might know, you can copy a psql query to a destination, for example stdout as follows:
```
\copy (SELECT * FROM users LIMIT 10) TO STDOUT;
```

Or to a file
```
\copy (SELECT * FROM users LIMIT 10) TO '/tmp/out.txt'
```

BUT, you can also pipe it into a program, using `TO PROGRAM <program>`. 

```
\copy (SELECT payload FROM users LIMIT 1) TO PROGRAM 'jq';
```

On Mac, this means that we can copy to clipboard using `pbcopy`.

```
\copy (SELECT payload FROM users LIMIT 1) TO PROGRAM 'pbcopy';
```

## Bonus

We can also combine commands, for example
```
\copy (SELECT payload FROM users LIMIT 1) TO PROGRAM 'jq -c | pbcopy';
```

# 💪
