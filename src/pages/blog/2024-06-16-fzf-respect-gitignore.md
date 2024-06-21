---
layout: "../../layouts/BlogPost.astro"
title: "Have fzf respect .gitignore"
datetime: "2024-06-16"
tags: [ productivity, terminal, fzf ]
---

Today I learned that you can configure `fzf` to respect `.gitignore` files. This can significantly speed up file search. The trick comes from the [Tips section](https://github.com/junegunn/fzf?tab=readme-ov-file#respecting-gitignore).

```shell
# Feed the output of fd into fzf
fd --type f --strip-cwd-prefix | fzf

# Setting fd as the default source for fzf
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix'

# CTRL + T triggers the same command
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
```

Let's try it by running `fzf` in over all my github repos:

`fzf` using the default configuration - 3.2 million files!
```shell
fzf
...
> demo/r3f-flex/tsconfig.node.json
 3216346/3216346
```

`fzf` using the setup above - 132k files (much faster)
```shell
fzf
...
> encore-websockets/encore.app
132681/132681/
```

I think this is mostly due to `node_modules` and`.git` is being ignored.

# Go to directory

We can also update the fzf-cd command that is activated using `ALT+C` in the terminal:

```shell
export FZF_ALT_C_COMMAND=" fd --type d --strip-cwd-prefix"
```

# 🔎
