---
layout: "../../layouts/BlogPost.astro"
title: "Access the shell from PSQL"
datetime: "2024-03-14"
tags: [ psql, postgres, database ]
---

Happy 🍕 day!

Today I learned that you can access the shell from PSQL by using the `\!` command. For example, if you are want to know what the current working directory on your local machine, you can use `\! pwd`. This can be useful if you need to know where SQL dumps are stored, or if you want to run a script from the shell.

```
\! pwd

/Users/magnus/
```

## \\! 

We can also execute SQL scripts from the shell using `\i` to `include them: 

```
\i script.sql

 ?column?
----------
        1
(1 row)
```

# 🐚

