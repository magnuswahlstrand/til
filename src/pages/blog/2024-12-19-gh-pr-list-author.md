---
layout: "../../layouts/BlogPost.astro"
title: List Github PRs filtered by author
datetime: "2026-09-03"
tags: [ git, github, productivity ]
---

Today I learned how to use `gh pr list`.

I normally just use `gh pr view -w` to open the PR in the browser. Now with AI coding, it is easy to create A LOT of PRs, that sometimes need to be pruned.

To list PRs in a repo use `gh pr list`. To check your own PRs, use `gh pr list --author @me`.

By default, the commands are opened in an interactive mode. This can be quite annoying. We can use `GH_PAGER=cat` to force the output be displayed directly, without interactive mode.

# ⏱️