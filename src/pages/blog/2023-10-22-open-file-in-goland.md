---
layout: "../../layouts/BlogPost.astro"
title: Open file in Goland from terminal
datetime: "2023-10-22"
tags: [ shell, goland, productivity ]
---

A while back I wrote a small utility script to open a file in Goland from the terminal. It is very useful when for
quickly fixing tests or failing lint runs.

Unfortunately, I deleted the script by accident and had to recreate it. Here is how to do it:

1. Create a file ~/goland_with_line
2. Add the following content to the file:

```bash
#!/bin/sh

# Extract file path and line number
file_path=$(echo $1 | cut -d ':' -f 1)
line_number=$(echo $1 | cut -d ':' -f 2)

/Applications/GoLand.app/Contents/MacOS/goland --line $line_number $file_path
```

3. Run `chmod +x ~/goland_with_line`
4. Update `iterm` (or your terminal of choice)
    * Open `Preferences > Profiles > Advanced > Semantic History`
    * Run command: `~/goland_with_line \1:\2`

That's it! Now you can command click on a file path in the terminal and it will open in Goland.

# 🚀

