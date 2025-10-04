---
layout: "../../layouts/BlogPost.astro"
title: Markdown alerts in Astro
datetime: "2025-10-04"
tags: [ markdown, astro ]
---

Today I learned that you can add alerts (a.k.a. callouts) to markdown rendering:
> [!IMPORTANT]
> Such as this one!

This is a useful way to highlight an important note or to give a warning to the reader. 


> [!NOTE]
> You can read the documentation of the syntax described here [Github: Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts).


## How to

1. Install the plugin
```
npm i remark-github-alerts
```

2.  Import the styles into your base layout, in my case `./src/components/BaseHead.astro`

```ts
import 'remark-github-alerts/styles/github-colors-light.css';
import "remark-github-alerts/styles/github-base.css";
 ``

3. Add the plugin to your `./astro.config.mjs`
```ts
 export default defineConfig({
...
  markdown: {
    remarkPlugins: [remarkGithubAlerts],
  },
 });
```

4. Add the annotations to your markdown files
```
> [!NOTE]
> Important notes
```

Et voilà:

> [!NOTE]
> Important notes

# 🚨

