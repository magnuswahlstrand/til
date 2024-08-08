---
layout: "../../layouts/BlogPost.astro"
title: "ASCII and .asc"
datetime: "2024-08-08"
tags: [ general ]
---

Today I was generating a GPG key and exported it, using `gpg --armor --key-id <id> > key.asc`. I hadn't actually thought about what the `--armor` flag does, or what the `.asc` extension means. So I looked it up.

## `--armor`

The `--armor` flag tells `gpg` to output the key in ASCII format, rather than the default binary format. For example:

```gpg --armor --export <key-id>```
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZrR4YBYJKwYBBAHaRw8BAQdAJgOffqunQTyJOWOs79tDF36EiMvE08HML6QK
D6mUb/C0L01hZ251cyBXYWhsc3RyYW5kIDxtYWdudXMud2FobHN0cmFuZEBnbWFp
bC5jb20+iJMEExYKADsWIQSV968jaQB/ro15mdwD4sANiKto8AUCZrR4YAIbAwUL
CQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRAD4sANiKto8MvLAQCy/A2CqoBY
lqix25hv1IpHwSk54FgCZrV70y/Qqma3OgEA4+smiqS7gDL1ckSdmgOa7C9c/i4J
TAput5hy2unXnQe4OARmtHhgEgorBgEEAZdVAQUBAQdAfuKUj+STqAJyIRRLTFJI
ie32n2dWfRvzIxuU4CNydRoDAQgHiHgEGBYKACAWIQSV968jaQB/ro15mdwD4sAN
iKto8AUCZrR4YAIbDAAKCRAD4sANiKto8LApAQD40mQ0VNeZTCIoP6tYG5ZSVcRE
Ou9c+N9Y+/xY6y5gzAEA6rqPJAlv251x9MIvcKJCYzHrt40Kmni4/JCOGngrJAE=
=QoIf
-----END PGP PUBLIC KEY BLOCK-----
```

So what is ASCII? It means American Standard Code for Information Interchange, and was developed in the 60s to standardize encoding of characters. The reason for outputting the key in ASCII is that it is easily sharable over email or direct messages.

## `.asc`

The `.asc` extension is short for ASCII and just says that the file contains ASCII-encoded data. It is a common format for sharing various keys.

# 🔡
