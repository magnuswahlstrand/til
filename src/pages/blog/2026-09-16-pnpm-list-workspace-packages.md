---
layout: "../../layouts/BlogPost.astro"
title: List all packages in a pnpm workspace
datetime: "2026-09-16"
tags: [ pnpm, monorepo ]
---

Today I learned how to list all packages in a pnpm workspace, without their dependencies.

```bash
pnpm -r list --depth -1
```

`-r` runs the command recursively in every workspace package, and `--depth -1` skips the dependencies so only the packages themselves are shown.

```
my-monorepo@1.0.0 /Users/me/code/my-monorepo (PRIVATE)

my-lambda@0.1.0 /Users/me/code/my-monorepo/lambdas/my-lambda
```

That's it!

# 📄
