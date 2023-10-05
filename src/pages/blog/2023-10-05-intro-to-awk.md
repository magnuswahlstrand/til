---
layout: "../../layouts/BlogPost.astro"
title: Intro to AWK
datetime: "2023-10-05"
tags: [ shell, awk ]
---

Today I started learning about AWK. The general pattern is as follows

```bash
awk 'pattern { action }' file
# or
cat file | awk 'pattern { action }'
```

* If `pattern` is specified, only matching lines will be processed
* `action` defines what to do with each line. It is enclosed in curly braces.

### Usage
We will use the following file (**./text.txt**):
```bash
word1 word2 word3
word4 word5 word6
word7 word8 word9 word10
```

### Examples

**Passthrough**
```bash
> cat text.txt |awk '{print $0}' 
word1 word2 word3
word4 word5 word6
word7 word8 word9 word10
```

**Print 2nd word**
```bash
> cat text.txt |awk '{print $2}'
word2
word5
word8
```

**Print only lines with a match**
```bash
> cat text.txt |awk '/word5/ {print $0}'
word4 word5 word6
```

**Line number and number of fields**
```bash
> cat text.txt |awk '{print NR, NF}'
1 3
2 3
3 4
```


**Skip first row**
```bash
> cat text.txt |awk 'NR>1'
word4 word5 word6
word7 word8 word9 word10
```

**Skip rows with fewer words row**
```bash
> cat text.txt |awk 'NF>3'
word7 word8 word9 word10
```

**Bonus: print only rows whose word count is unique**

```bash
cat text.txt |awk '!seen[NF]++'
word1 word2 word3
word7 word8 word9 word10
```

# 📝

