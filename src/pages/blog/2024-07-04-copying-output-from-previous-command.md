---
layout: "../../layouts/BlogPost.astro"
title: "Copy output from previous command in terminal"
datetime: "2024-07-04"
tags: [ terminal, productivity ]
---

Today I learned that you can copy the output from the previous command in the terminal. 

```sh
> ls
file1.txt file2.txt file3.txt
```
Then use

* `Cmd + Shift + A` - Select previous command output
* `Cmd + C` - Copy

The following should be added to your clipboard:

`file1.txt file2.txt file3.txt`

Success!

**Note:** this doesn't always work, for some reason. Might be if you interact with the terminal in some other way. 

# 📺
