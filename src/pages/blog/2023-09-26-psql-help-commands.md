---
layout: "../../layouts/BlogPost.astro"
title: psql help commands
datetime: "2023-09-25"
tags: [ mongodb, database ]
---

Today I listened to [postgres.fm: psql vs GUIs](https://postgres.fm/episodes/psql-vs-guis)) and learned that there are two useful help commands in `psql`.

### Help for psql commands: `\?`
Shows help for all \-commands. Example:

**Input:**
```
\?
```
**Output:**
```
Help
  \? [commands]          show help on backslash commands
  \? options             show help on psql command-line options
  \? variables           show help on special variables
  \h [NAME]              help on syntax of SQL commands, * for all commands

...
Input/Output
  \copy ...              perform SQL COPY with data stream to the client host
  \echo [-n] [STRING]    write string to standard output (-n for no newline)
  \i FILE                execute commands from file
  \ir FILE               as \i, but relative to location of current script
  \o [FILE]              send all query results to file or |pipe
  \qecho [-n] [STRING]   write string to \o output stream (-n for no newline)
  \warn [-n] [STRING]    write string to standard error (-n for no newline)

...

Informational
  (options: S = show system objects, + = additional detail)
  \d[S+]                 list tables, views, and sequences
  \d[S+]  NAME           describe table, view, sequence, or index
  \da[S]  [PATTERN]      list aggregates
```

### Help for all SQL commands: `\h COMMAND` 
Shows help for any SQL command. For example:

**Input:**
```
\h SELECT
```
**Output:**
```
Command:     SELECT
Description: retrieve rows from a table or view
Syntax:
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    [ * | expression [ [ AS ] output_name ] [, ...] ]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY [ ALL | DISTINCT ] grouping_element [, ...] ]
    [ HAVING condition ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
```

# 🎁

