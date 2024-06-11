---
layout: "../../layouts/BlogPost.astro"
title: "Using Github access tokens with Git"
datetime: "2024-06-11"
tags: [ git, github ]
---

Today I ran into a problem with github access tokens.  I had cloned the repo using `gh` cli. `gh` was in turned authenticated using a Github access token. When I tried to push to the repo, I got the following error:

```
git push
remote: Repository not found.
fatal: repository 'https://github.com/FOO/bar.git/' not found
```

At first I tried to use `gh` to push the changes, but it doesn't support `push`. 

Then, I found this [SO answer](https://stackoverflow.com/a/68783135) that suggested to remove the existing remote, and replace it with one using the access token for credentials:

```
git remote remove origin
git remote add origin https://[TOKEN]@github.com/FOO/bar.git/
git push
```

The downside is that the access token is now stored history, and in the git remote config. I'm not sure if that's a problem, but it's something to be aware of.

# 🤝
