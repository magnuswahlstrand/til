---
layout: "../../layouts/BlogPost.astro"
title: Jump to next match during search in Neovim
datetime: "2025-01-08"
tags: [ vim, neovim, productivity ]
---

Today I learned that you can enable Vim motions in the terminal using `set -o vi`. 

This let's me navigate the history using `j/k` and then edit the command as I'm used to. I needed to enable this because the standard commands I use to navigate and manipulate text (e.g. go to beginning of line with ctrl-a) collided with my `tmux` setup. 
You can switch back to the standard key binding anytime with:

`set -o emacs`

# 🕵️‍♂️ 
