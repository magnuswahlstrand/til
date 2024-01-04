---
layout: "../../layouts/BlogPost.astro"
title: Trigger cronjob from kubectl
datetime: "2024-01-04"
tags: [ kubernetes, kubectl ]
---

Today I learned that there is an easer way to trigger a cronjob, than editing the cronjob schedule and waiting for it to run. You can simply create a new jobs from `kubectl` by running:

```bash
kubectl create job --from=cronjob/<cronjob-name> <job-name>
```

If you want to list existing cronjob, you can use
```bash
kubectl get cronjob
```

```
NAME                        SCHEDULE       SUSPEND   ACTIVE   LAST SCHEDULE   AGE
my-first-job                0 * * * *      False     0        50s             290d
some-scheduler              */2 * * * *    False     0        50s             296d
```

Cool, amirite?

# 🎱