---
layout: "../../layouts/BlogPost.astro"
title: "Improved pdb setup"
datetime: "2022-11-18"
tags: [python, debug, pdb]
---

My colleague showed me that you can configure the python debugger, using a `.pdbrc.py` file. 

What can we configure? We can really do anything we can do in python, but here are few examples. 

1. Set `sticky` as default
2. Set a color scheme
3. Define useful functions

This can be something like this

##### ~/.pdbrc.py
```python
from pygments.token import (
    Token,
    Whitespace,
    Error,
    ...
)

TERMINAL_COLORS = {
    Token: ("", ""),
    Whitespace: ("lightgray", "darkgray"),
    ...
    Error: ("_red_", "_red_"),
}

def json_dump(self, obj_name):
    obj = self._getval(obj_name)
    filename = 'dump.json'
    with open(filename, 'w') as outfile:
        json.dump(obj, outfile, indent=2)
        print("Content dumped to:", outfile.name)


class Config(pdb.DefaultConfig):
    sticky_by_default = True        # 1. Sticky by default
    colorscheme = TERMINAL_COLORS   # 2. Color scheme

    def setup(self, pdb):
        super().setup(pdb)
        Pdb = pdb.__class__
        Pdb.do_json_dump = json_dump # 3. New function
```

Now `sticky` is on by default (only pdb++), and we can json_dump things.
```
(Pdb++) obj={"name":"Magnus"}
(Pdb++) json_dump(obj)
Content dumped to: dump.json
```
There is now a file at `dump.json`!

I didn't find much documentation about the config file, but ironically there is [another example of .pdbrc.py](https://github.com/pdbpp/pdbpp/issues/36), in the github issue complaining about the lack of documentation.

# 🍉
