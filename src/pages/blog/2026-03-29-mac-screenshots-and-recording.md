---
layout: "../../layouts/BlogPost.astro"
title: "Mac screenshots and screen recording"
datetime: "2026-03-29"
tags: [ mac, screenshot ]
---

## Screenshots

| Shortcut | What it does |
|----------|--------------|
| `Cmd+Shift+3` | Full screen |
| `Cmd+Shift+4` | Select an area |
| `Cmd+Shift+4` → `Space` | Click to capture a specific window |
| `Cmd+Shift+4` → `Space` → `Option` | Capture window without drop shadow |

Add `Ctrl` to any shortcut to copy to clipboard instead of saving to desktop.

## Screen recording

`Cmd+Shift+5` opens the screenshot toolbar with all options — area, window, fullscreen, and screen recording.

## Showing keystrokes during recording

macOS doesn't show keypresses in recordings natively. [KeyCastr](https://github.com/keycastr/keycastr) is a free, open source tool that overlays keystrokes on screen.

```bash
brew install --cask keycastr
```
