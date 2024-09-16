---
layout: "../../layouts/BlogPost.astro"
title: "List profiles with the AWS cli"
datetime: "2024-09-16"
tags: [ aws ]
---

Today I learnt how you list profiles using the `aws` cli. This is _**extremely**_ useful when your infrastructure setup at work as very long and complicated names 🤠.

```
aws configure list-profiles
```

```
default
longname-developer@prod1
longname-developer@prod2
longname-developer@prod3
longname-developer@dev1
longname-developer@dev4
longname-developer@stage1
longname-developer@stage3
```

Enjoy!

# 🙅‍♂️
