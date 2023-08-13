---
layout: "../../layouts/BlogPost.astro"
title: Debugging CSS with outline
datetime: "2023-08-13"
tags: [ tailwind, css, frontend ]
---

Today I learned that you can add an outline to all your elements or divs, to make debugging easier. Outline, as opposed
to border does not affect the element size.

If you want to apply it globally, you can put the following in your globals.css

```css
/* Without tailwind */
* {
    outline: 1px solid red;
}

/* With tailwind */
* {
    @apply outline outline-1 outline-red-700
}
```

Result:
<div class="h-64 w-64 outline outline-1 outline-red-700">
    <div class="h-32 w-32 outline outline-1 outline-red-700"></div>
    <div class="h-16 w-16 outline outline-1 outline-red-700"></div>
</div>

Done!

# 🟥