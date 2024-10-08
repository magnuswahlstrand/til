---
layout: "../../layouts/BlogPost.astro"
title: "Split and select text in bash"
datetime: "2024-10-04"
tags: [ bash, linux ]
---

Today I needed to update my personal access token (PAT) for git. E.g.

```
> git remote -v

origin	https://<PAT>@github.com/TV4/user-backend-services.git (fetch)
origin	https://<PAT>@github.com/TV4/user-backend-services.git (push)
```

To script this, I need to extract only the middle part. The problem is that the whitespace is a mix of tabs and spaces. 
Today I learned that `cut` has an option (`-w`) to cut on either!

```
> git remote -v | cut -w -f2 | head -n1

https://<PAT>@github.com/TV4/user-backend-services.git
```

### Replacing the PAT

**Note:** For these export commands, I prefix them with a whitespace. This means that they are not stored in `history`.

The full command will be as follows.

```
 export OLD_PAT=<OLD_PAT>
 export NEW_PAT=<NEW_PAT>
export NEW_REMOTE=$(git remote -v | cut -w -f2 | head -n1 | sed "s/$OLD_PAT/$NEW_PAT/g")
git remote remove origin
git remote add origin $NEW_REMOTE
```

Success!

# 🪙