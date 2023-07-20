---
layout: "../../layouts/BlogPost.astro"
title: "Useful animations with Tailwind CSS"
datetime: "2023-07-19"
tags: [ frontend, tailwind, css ]
---

Today I learnt that Tailwind has utility classes for [animating elements](https://tailwindcss.com/docs/animation).  The classes are called `animate-{name}` and can be used like this:

```html
<div class="animate-spin w-6 h-6">🌀</div>
```

Here are the four predefined animations:

<div class="grid grid-cols-12 gap-x-4 font-bold w-72 items-center">
    <div class="animate-spin px-1 w-6 h-6">🌀</div>
    <div class="col-span-11">animate-spin</div>
    <div class="animate-bounce w-6 h-6 mx-1">🔵</div>
    <div class="col-span-11">animate-bounce</div>
    <div class="relative flex h-3 w-3 mx-1.5">
      <div class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></div>
      <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></div>
    </div>
    <div class="col-span-11">animate-bounce</div>
    <div class="rounded bg-indigo-200 pr-5 pl-1">
        <div class="animate-pulse">🔵</div>
    </div>
    <div  class="col-span-11">animate-pulse</div>
</div>

Looks great! As with all classes, you can [customize the animations](https://tailwindcss.com/docs/animation#customizing-your-theme) or define [arbitrary values](https://tailwindcss.com/docs/grid-template-columns#arbitrary-values). For example
```html
<div class="animate-[bounce_2s_ease-in-out]">
  <!-- ... -->
</div>
```

# <div class="animate-pulse">🔵</div>