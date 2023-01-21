---
layout: "../../layouts/BlogPost.astro"
title: "Delete kubernetes pods based on name with wildcard"
datetime: "2023-01-03"
tags: [kubernetes, kubectl]
---

Sometimes it is useful to kill all pods for a certain deployment, and have a deployment create new ones. The problem is that the pods usually have a hash at the end, that makes them harder to target.
Here is how you can grep for multiple pods and then delete them.

```
kubectl get pods   --no-headers=true | awk '{print $1}' | grep my-app |xargs kubectl delete pod
```

# ❌
