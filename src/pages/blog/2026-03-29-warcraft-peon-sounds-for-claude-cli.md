---
layout: "../../layouts/BlogPost.astro"
title: "Warcraft peon sounds for Claude CLI"
datetime: "2026-03-29"
tags: [ mac, claude, cli, tools ]
---

[peon-ping](https://github.com/PeonPing/peon-ping) plays Warcraft peon sounds when Claude finishes a task. Instead of staring at the terminal waiting, you can go do something else and get an audio cue when work is complete.

## Setup

```bash
brew install PeonPing/tap/peon-ping
peon-ping-setup
```

That's it. The setup command walks you through configuration and installs the sound packs.

## How it works

peon-ping hooks into Claude CLI and plays sounds for different events:

- **Task complete** — a peon says something like "Work, work." or "Be happy to."
- **Input required** — notifies you when Claude is waiting for your response
- **Errors** — distinct sound when something goes wrong

## Useful commands

```bash
peon preview task.complete   # preview the completion sounds
# peon-ping: previewing [task.complete] from Orc Peon
#   ▶ Ready to work?
#   ▶ Something need doing?
#   ▶ I can do that.
#   ▶ Be happy to.
#   ▶ Work, work.
#   ▶ OK.
peon toggle                  # mute/unmute
peon volume 0.5              # set volume (0.0–1.0)
peon packs list              # see available sound packs
peon notifications standard  # use standard system notifications instead of overlay banner
peon notifications test      # send a test notification
```
