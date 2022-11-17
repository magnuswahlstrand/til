---
layout: "../../layouts/BlogPost.astro"
title: "Handle Minikube out of disk"
datetime: "2022-11-16"
tags: [kubernetes, minikube, docker]
---

Today I had to troubleshoot why some containers didn't start in my local **minikube**. Inspecting the logs, all failing pods were all variations of "No space left on device".

```
│ 2022-11-16 10:41:32.806 GMT [1] FATAL:  could not write lock file "postmaster.pid": No space left on device
```

## Solution
I learnt how to ssh into **minikube**:
```
minikube ssh
```

And get information about the disk usage of docker
```
docker@minikube:~$ docker system df
```
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          165       19        22.61GB   17.28GB (76%)
Containers      45        36        220.6kB   40.46kB (18%)
Local Volumes   10        5         0B        0B
Build Cache     288       0         8.941GB   8.941GB
```

And finally remove unused Docker artifacts:
```
docker system prune -a
```
```
...
8ojhmert4ewho3j6dfkplta8u
jtmttv9xu4copicsui0doua5n
qj7xrce7t0wco0dpr8i7q3v1c
d607ubnfjo37lcm266hp11xag
drapxqsser0rn6lu4a6427oq4
jelnoxvtzgv6xe34gqzvxq7um
qkb21ruwrq2e9uvbmgbo2xqu3
ualqk8vx2b5opa85jkbmfxpdx
dw92d9j69v6eqq6g7rxztkrj2

Total reclaimed space: 24.91GB
```

I got the last two steps from [this article](https://platform9.com/kb/kubernetes/pods-stuck-in-container-creating-no-space-left-on-device) from **platform9**.

That is all ✨.
