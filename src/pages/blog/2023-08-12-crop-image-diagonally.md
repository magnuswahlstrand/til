---
layout: "../../layouts/BlogPost.astro"
title: Crop images diagonally with (Tailwind) CSS
datetime: "2023-08-12"
tags: [ tailwind, css, frontend ]
---

Today I learned how to crop images diagonally by placing a rotated div on top of the image.

1. **Add a cropping div below the image.** Make the div absolute, to remove its height from the document flow. Its
   relative parent anchors the absolute child.

<div class="mb-24">
    <img src="https://placekitten.com/300/250" alt="" class="w-full m-0" />
    <div class="relative">
      <div class="absolute -top-40 h-40 w-full">
        <div class="absolute top-20 h-36 -left-[10%] w-[120%] bg-red-500 opacity-75"></div>
      </div>
    </div>
</div>

```html

<div class="absolute -top-40 h-40 w-full">
    <div class="absolute top-20 h-36 -left-[10%] w-[120%] bg-red-500 opacity-75"></div>
</div>
```

2. **Rotate the div.**

<div class="mb-40">
    <img src="https://placekitten.com/300/250" alt="" class="w-full m-0" />
    <div class="relative">
      <div class="absolute -top-40 h-40 w-full">
        <div class="absolute top-20 h-36 -left-[10%] w-[120%] -rotate-12 bg-red-500 opacity-75"></div>
      </div>
    </div>
</div>

```html

<div class="absolute -top-40 h-40 w-full">
    <div class="absolute top-20 h-36 -left-[10%] w-[120%] -rotate-12 bg-red-500 opacity-75"></div>
</div>
```

3. **Hide overflow and make white** - Add `overflow-hidden` to the parent div, and`bg-white`.
<div class="mb-18">
    <img src="https://placekitten.com/300/250" alt="" class="w-full m-0" />
   <div class="relative">
       <div class="absolute -top-40 h-40 w-full overflow-hidden">
           <div class="absolute top-20 h-36 -left-[10%] w-[120%] -rotate-12 bg-white"></div>
       </div>
   </div>
</div>

```html

<div class="absolute -top-40 h-40 w-full overflow-hidden">
   <div class="absolute top-20 h-36 -left-[10%] w-[120%] -rotate-12 bg-white"></div>
</div>
```

4. **DONE!**

# 💨⛵