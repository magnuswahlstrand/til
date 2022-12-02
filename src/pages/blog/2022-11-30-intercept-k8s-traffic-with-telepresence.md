---
layout: "../../layouts/BlogPost.astro"
title: "Intercepting Kubernetes traffic with telepresence"
datetime: "2022-11-30"
tags: [kubernetes, telepresence]
---

Today I learned how to use **telepresence** ([telepresence.io](https://telepresence.io/)) to intercept traffic to a service in a kubernetes
cluster.

First up, we need to connect to our cluster

```
telepresence connect
```

Then we can intercept traffic coming to a specific deployment, and send it to our local machine. 
```
> telepresence intercept user-service --port 8000:http
```

```
Using Deployment user-service
intercepted
   Intercept name         : user-service
   State                  : ACTIVE
   Workload kind          : Deployment
   Intercepting           : HTTP requests with headers
         'x-telepresence-intercept-id: 34e3daf0-8773-4dd5-b605-5edf841fe131:user-service'
   ...
```
Now all requests with with this header (`x-telepresence-intercept-id: 34e3daf0-8773-4dd5-b605-5edf841fe131:user-service`) will be intercepted, and routed to `:8000` on our local machine. The header is auto-generated and added by default, if not logged in.

### Other options:
* `--http-header` - We can specify own header on the format `<NAME>=<VALUE>`. If we write`all`, we intercept all traffic, and with `auto` we auto-generated header, as above.  
* `--http-path-equal` - Only intercept traffic with paths equal to the flag value. E.g. `/docs`
* `--http-path-prefix` -  Only intercept traffic with paths starting with the value. E.g. `/users/<USER_ID>` matches `/users/<USER_ID>/profile` and `/users/<USER_ID>/email` 
* `--http-path-regexp` - Intercept anything matching the regex. 

# 📞
