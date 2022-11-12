---
layout: "../../layouts/BlogPost.astro"
title: "Starting a python program in debug mode"
datetime: "2022-11-11"
tags: [python, debug, pdb]
---

Today I learned ([source Stack overflow](https://stackoverflow.com/a/6980836)) that you can start a python in debug mode without adding a `breakpoint()` to the code.

### Using pdb
> python -m pdb your_script.py

```bash
> /some-repo/pdb-tutorial/main.py(1)<module>()
-> from dicegame.runner import GameRunner
(Pdb)
```

Nice! Then we can set a breakpoint on using `b <lineno>`, and continue debugging.

### Using pdb++
I prefer using [pdb++](https://github.com/pdbpp/pdbpp) which is a drop in replacement for pdb. In fact, it will replace the regular pdb, as long as we install it.

```
pip install pdbpp
```

Then the same command as before
> python -m pdb your_script.py

```bash
[2] > /some-repo/pdb-tutorial/main.py(1)<module>()
-> from dicegame.runner import GameRunner
(Pdb++)
```
Cool!
