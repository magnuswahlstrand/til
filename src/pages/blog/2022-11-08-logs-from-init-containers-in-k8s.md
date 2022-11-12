---
layout: "../../layouts/BlogPost.astro"
title: Getting logs from init-containers in K8s
description: "Lorem ipsum dolor sit amet"
datetime: "2022-11-08"
Tags: [kubernetes]
---


Today I had some problems with my Kubernetes (K8s). I had to figure out why one of the deployments stayed in `CrashLoopBackOff`. I tracked the problem to my [init-container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) that runs the database migrations. Here is how you get the logs from an init-container!

First, let's get the pod status.

```
kubectl get pod <pod-name>
```
```
NAME               READY                RESTARTS STATUS                         IP                  NODE              AGE           │
<pod-name>         0/1                         0 Init:CrashLoopBackOff          172.17.0.4          minikube          13m
```
`Init:CrashLoopBackOff` indicates that it is indeed the init-containers are failing. If you don't know the name of the init-container, you can get it by describing the pod.

```
kubectl describe pod <pod-name>
```
```
Init Containers:
  <init-container-name>:
    Container ID:    ...
    ...
    State:           Waiting
      Reason:        CrashLoopBackOff
    Last State:      Terminated
      Reason:        Error
      Exit Code:     1
      Started:       ...
      Finished:      ...
    Ready:           False
    Restart Count:   1023
    ...
```
Next we can just get the init-container logs:

```
kubectl logs <pod-name> <init-container-name>
```
```
Some error here, perhaps
...
```

That's it!
