---
layout: "../../layouts/BlogPost.astro"
title: "Analyze disk usage with ncdu"
datetime: "2026-02-06"
tags: [ shell, productivity, linux ]
---

Today I learned about `ncdu` (NCurses Disk Usage), an interactive disk usage analyzer that makes it easy to find what's eating up disk space.

> **ncdu** – NCurses Disk Usage analyzer

## Installation

```shell
# macOS
brew install ncdu

# Linux
apt install ncdu  # Debian/Ubuntu
yum install ncdu  # RedHat/CentOS
```

## Basic usage

Scan the current directory:

```shell
ncdu
```

Scan a specific directory:

```shell
ncdu /var/log
```

## Navigation

Once inside `ncdu`, you can navigate with:

- **Arrow keys** or **j/k** – Navigate up and down
- **Enter** – Enter directory
- **Left arrow** or **h** – Go back to parent directory
- **d** – Delete selected file or directory
- **g** – Show percentage and/or graph
- **?** – Help menu
- **q** – Quit

## Example output

```
ncdu 1.19 ~ Use the arrow keys to navigate, press ? for help
--- /Users/magnus/projects ------------------
  248.6 GiB [##########] /node_modules
   89.3 GiB [###       ] /docker
   12.1 GiB [          ] /.git
    4.2 GiB [          ] /dist
    1.8 GiB [          ] /logs
  892.0 MiB [          ] /src
   24.0 MiB [          ]  package-lock.json
```

## Why it's useful

Unlike `du`, `ncdu` provides:
- Interactive navigation through directories
- Visual representation of space usage
- Ability to delete files directly from the interface
- Fast scanning with progress indication

Perfect for finding and cleaning up disk space hogs!

----------

That's it! Time to free up some disk space.

# 💾

