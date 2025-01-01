---
layout: "../../layouts/BlogPost.astro"
title: Fine-tuned search in Neovim with search offset
datetime: "2025-01-01"
tags: [ vim, neovim, productivity ]
---

I'm on a journey to learn Neovim (I already use it, btw). Today I learned that you can improve the search matching with [search offset](https://vimhelp.org/pattern.txt.html#search-offset).

Let's say we this text:

```
|Hello,
world!

Hello,
you!
```

`d/rld` - deletes up UNTIL rld
`d/rld/e` - deletes up until AFTER rld
`d/rld/e1` - deletes 1 after rld, e.g. including !
`d/rld/+3` - deletes 3 lines after match

Thanks to username [ princker on Reddit for the hint ](https://www.reddit.com/r/vim/comments/qwnjvh/comment/hl4dh7v/)


# 🦸‍♂️
