---
layout: "../../layouts/BlogPost.astro"
title: "Monitoring Github PR checks from the terminal"
datetime: "2024-06-11"
tags: [ git, github, productivity ]
---

Today I learned that you can monitor the status of Github PR checks from the terminal using the `gh` cli.

```
gh pr checks
```
**Example output:**
```
Some checks are still pending
0 cancelled, 0 failing, 0 successful, 0 skipped, and 2 pending checks

   NAME                                         DESCRIPTION  ELAPSED  URL
*  Run tests (pull_request)                                           https://github.com/FOO/bar/actions/runs/9464422903/job/26071729502
✓  Run lint (pull_request)                                   3s       https://github.com/FOO/bar/actions/runs/9464422916/job/26071729474
```

We can also run it in watch mode to get live updates:

```
gh pr checks --watch
```

# ⏱️
