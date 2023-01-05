---
layout: "../../layouts/BlogPost.astro"
title: Formatting lists from the git command
datetime: "2023-01-05"
tags: [git]
---

It turns out that you can format the output of `git` commands. For example, we can list branches

git branch -v

```
  dev            b9f685b add payment method
  feat-1-repairs 885540c add repairs option
* main           0a58b15 stable release
```

#### Add date and object size

We can add more information, such as committerdate and size of branch (objectsize)
```
git branch --format="%(committerdate)   %(refname)   $(objectsize)"
```
```
Thu Jan 5 19:09:16 2023 +0100   refs/heads/dev
Thu Jan 5 19:09:52 2023 +0100   refs/heads/feat-1-repairs
Thu Jan 5 19:08:46 2023 +0100   refs/heads/main
```

#### Relative dates, short ref name
We can format the values by adding, for example, `:relative` to the dates, or `:short` to a refname.

```
git branch --sort=creatordate --format "%(creatordate:relative)   %(refname:short)   %(objectsize)"
```

```
10 minutes ago   main   177
10 minutes ago   dev   229
9 minutes ago   feat-1-repairs   229
```

```
10 minutes ago   main   177
10 minutes ago   dev   229
9 minutes ago   feat-1-repairs   229
```

#### Get nice columns

Using the `column` command, we can get column separated output:

```
git branch --sort=creatordate --format "%(creatordate:relative);%(refname:short);%(objectsize)" | column -s ";" -t                                                                                     130 ↵
```
```
13 minutes ago  main            177
13 minutes ago  dev             229
12 minutes ago  feat-1-repairs  229
```

# ✨
