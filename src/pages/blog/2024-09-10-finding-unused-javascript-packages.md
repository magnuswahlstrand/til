---
layout: "../../layouts/BlogPost.astro"
title: "Finding unused javascript packages"
datetime: "2024-09-10"
tags: [ node, javascript]
---

Today I learnt that you can use [https://www.npmjs.com/package/depcheck](`depcheck`) to find unused packages in your javascript package.

```npx depcheck```

```
Unused devDependencies
* @types/node
* chai
* eslint
* prettier-plugin-packagejson
* tsx
```

Then we can go ahead and remove them from `package.json`.

# 🗑️
