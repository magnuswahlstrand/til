---
layout: "../../layouts/BlogPost.astro"
title: Jump to next match during search in Neovim
datetime: "2025-01-01"
tags: [ vim, neovim, productivity ]
---

Today I learned that you can delete up to arbitary search terms using something like `d/end` ([described here](/til/blog/2025-01-01-fine-tuned-search-in-neovim-with-search-offset)).

Now I ALSO learned that you can expand this area to the 2nd (or 3rd, etc) occurance by using `ctrl-o`. This is actually the normal search behaviour in play.
If you need to go back one step, you can use `ctrl-t` to go to the previous match instead.

### Example

```
A
B
C
D #1

A
B
C
D #2
```

* `d/D` - will delete up to the first D
* `d/D - <c-o>` - will delete up to the second D

Very cool!

# 🕵️‍♂️ 
