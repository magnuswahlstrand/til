---
layout: "../../layouts/BlogPost.astro"
title: Copying files to a Kubernetes pod
datetime: "2023-02-09"
tags: [kubernetes, kubectl]
---

Today I learned how to copy files to a Kubernetes pod using `kubectl cp`.

First you need to find the name of pod

```
POD_NAME=$(kubectl get pods | grep my-service)
```

If I want to copy a file called `my-script.py` to `/app/`

Then you can copy files to the pod using the following command:

```
kubectl cp my-script.py $POD_NAME:/app/my-script.py
```

We can do it the other way around:

```
kubectl cp $POD_NAME:/app/my-script.py my-script.py
```

Awesome!

# 📋