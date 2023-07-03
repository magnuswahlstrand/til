---
layout: "../../layouts/BlogPost.astro"
title: "Parameter expansion in bash"
datetime: "2023-07-02"
tags: [ bash ]
---

Today I learnt a few more things about parameter expansion in bash. Here is a good guide
on [parameter expansion](http://mywiki.wooledge.org/BashGuide/Parameters#Parameter_Expansion.

Let's say I have a variable `NAME="user-1 user-2 user-3"`.

| Syntax                | Description                                                                | Example        | Result             |
|-----------------------|----------------------------------------------------------------------------|----------------|--------------------|
| ${parameter#pattern}  | Search for the parameter from the beginning and matches the shortest match | ${NAME#user*}  | `-1 user-2 user-3` |
| ${parameter##pattern} | Search for the parameter from the beginning and matches the longest match  | ${NAME##user*} | <empty>            |
| ${parameter%pattern}  | Search for the parameter from the end and matches the longest match        | ${NAME%user*}  | `user-1 user-2 `   |
| ${parameter%%pattern} | Search for the parameter from the end and matches the longest match        | ${NAME%%user*} | <empty>            |

# ❎