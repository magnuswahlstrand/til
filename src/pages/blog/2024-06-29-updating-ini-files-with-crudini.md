---
layout: "../../layouts/BlogPost.astro"
title: "Updating .ini files with crudini"
datetime: "2024-06-29"
tags: [ bash, tools ]
---

Today I learned that you can update `.ini` files with a cli tool called [crudini](https://github.com/pixelb/crudini) (
CRUD + ini).

## Installation

`crudini` is a python package, so you can install it with pip:

```
pip install crudini
```

## Usage

The tool is simple to use. Here are some examples:

**Set parameter**

```bash
crudini --set config.ini section first_parameter 1
crudini --set config.ini "very long name" other_parameter true
# Set top level parameter
crudini --set config.ini "" top_level_param 123 
```

`>> cat config.ini`

```ini
top_level_param = 123
[section]
first_parameter = 1

[very long name]
other_parameter = true
```

**Get parameter**

```
crudini --get config.ini "" top_level_param

123
```

## Diffing ini files

Create a better file:

```bash
cp config.ini config-improved.ini
crudini --set "" top_level_param 321
```

Diff line by lines

```bash
diff <(crudini --get --format=lines config.ini |sort) \                                                                                                                                                       1 ↵
     <(crudini --get --format=lines config-improved.ini|sort)
```

```diff
-< [ DEFAULT ] top_level_param = 123
+> [ DEFAULT ] top_level_param = 321
```

# 🟩🟥
