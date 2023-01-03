---
layout: "../../layouts/BlogPost.astro"
title: "Troubleshoot managed certificates with GKE on GCP"
datetime: "2022-12-21"
tags: [kubernetes, gcp]
---

It is no secret that understanding Kubernetes can be difficult. Combine it with running it in a public cloud, provisioning SSL certificates, and you are in for hours of troubleshooting.

Today I created a new service, and was troubleshooting why my the subdomain that I had (at least I thought so), didn't show up in the Google Cloud console.

After an hour of updating kubernetes manifests and pushing to the deploy pipeline, I found this page:
[GCP: Use Google-managed SSL certificates - Troubleshooting](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs#troubleshooting).

Here I found the excellent command

```
kubectl get managedcertificate
```

Output:

```
NAME                           AGE    STATUS
my-service-cert                27m    Provisioning
old-service-1-cert             281d   Active
old-service-2-cert             126d   Active
old-service-3-cert             126d   ProvisioningFailedPermanently
```

Turns out that my certificate was still being provisioned.

# 🤯
