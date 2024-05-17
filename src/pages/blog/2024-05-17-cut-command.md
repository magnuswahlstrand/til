---
layout: "../../layouts/BlogPost.astro"
title: "Cut command"
datetime: "2024-05-18"
tags: [ shell, productivity, linux ]
---

Today I learned a few things about the `cut`. It is used to extract parts of a string or a file.

> **cut** – cut out selected portions of each line of a file

### 1. Whitespace delimiter

Use the `-w` flag to cut on arbitrary whitespace.

```shell
echo "name      age  location" | cut -w -f 1
```

**Output**

```
name
```

### 2. Cut characters from each line

Use the `-c` cut characters.

```shell
echo "Magnus\nJohn\nSven" | cut -c 1,3-
```

**Output**

```
Mgnus
Jhn
Sen
```

### 3. Get pod name from kubectl

Use the `-c` cut characters.

```shell
kubectl get pods |grep my-app | cut -w -f 1
```

**Output**

```
my-app-54d67589b8-x87pr
```

### 4. Get username from /etc/password

Use the `-c` cut characters.

```shell
cat /etc/passwd |grep nobody | cut -d ':' -f 1
```

**Output**

```
nobody
```

----------


That's it! Use with care, and no running.

# ✂️

