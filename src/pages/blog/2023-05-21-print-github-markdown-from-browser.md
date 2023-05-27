---
layout: "../../layouts/BlogPost.astro"
title: "Print Github markdown from browser"
datetime: "2023-05-21"
tags: [markdown, github, javascript]
---

Today I learned that you can print Github markdown from the browser using the following javascript in the console.

For example:
https://github.com/magnuswahlstrand/matematikpov/blob/main/prov_1.md

```javascript
let selector = '.markdown-body'
document.querySelector(selector).setAttribute('style', 'position: absolute; top: 0; left: 0; bottom: 0; z-index: 100; margin: 0; min-width: 100%; padding: 20px 100px; background-color: white')
document.querySelector('body').appendChild(document.querySelector(selector))
window.print()
```

# 🖨