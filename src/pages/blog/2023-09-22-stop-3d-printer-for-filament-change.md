---
layout: "../../layouts/BlogPost.astro"
title: G-code for Ender 3 v2 for filament change
datetime: "2023-09-22"
tags: [ 3d-printing ]
---

Today I re-learned how to stop my Ender 3 v2 for filament change. The default G-code for color change is `M600`. This does in fact stop the printer for color change, but there is no way to resume the print 🤦‍♀️.
You can install a new firmware that supports `M600` ([details here](https://www.reddit.com/r/ender3v2/comments/kp6xjc/howto_enable_m600_command_on_ender_3_v2/), but you can also use another G-code: `M25`.

* `Printer settings > Expert > Custom G-code > Color Change G-code`
* Replace `M600` with `M25`

![emoji search](/til/img/g-code.png)

That's it! Now you can print multi color prints with your Ender 3 v2.

# 🖨

