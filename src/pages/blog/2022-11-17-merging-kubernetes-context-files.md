---
layout: "../../layouts/BlogPost.astro"
title: "Merging multiple Kubernetes context files"
datetime: "2022-11-17"
tags: [kubernetes, kubectl]
---

Last night, a colleague sent me the config file of a new Kubernetes cluster. How do I use it, while keeping my old cluster information? 

This [StackOverflow answer](https://stackoverflow.com/a/46184649) shows how merge multiple context files in to one.

### Some takeaways:

1. The Kubernetes context configuration files your `kubectl` command uses is located at `$KUBECONFIG` or `~/.kube/config`by default. 

2. You can list your current configuration with `kubectl config view` or
3. List your contexts (clusters and auth information) using `kubectl config get-contexts`. For example:
```
CURRENT   NAME                      CLUSTER                   AUTHINFO                NAMESPACE
          gke_cluster_1_default     gke_cluster_1_default     gke_cluster_1_default
          gke_cluster_2_default     gke_cluster_2_default     gke_cluster_2_default
*         minikube                  minikube                  minikube                default
```

4. You can use **multiple** configuration files at once by colon-separating them. E.g.
```
export KUBECONFIG=~/.kube/config:~/my-new-file.conf
```

### Merging configuration files
Finally, we can also _**merge**_ the two files. 

**NOTE:** This is probably not a good idea. Why not keep them separate and use trick #4 above to use both config files at once? 🤔

But if we still want to, we can do the following, as suggested by the StackOverflow answer above.

1. Point `kubectl` to use both config files.
2. Use `kubectl config view --flatten` to output the combined configuration
```
export KUBECONFIG=~/.kube/config:~/new.conf
kubectl config view --flatten > merged.conf
```
# 💫
