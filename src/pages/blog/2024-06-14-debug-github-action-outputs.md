---
layout: "../../layouts/BlogPost.astro"
title: "Debug Github action outputs"
datetime: "2024-06-14"
tags: [ github, github-actions ]
---

I've just started using Github actions at work, and I'm slowly getting used to the syntax, and the way things work. 

Today I learned how to debug Github action outputs!

```yaml
- name: Set dynamic environment variable
  id: dynamic-vars
  uses: ./.github/actions/set-dynamic-env-var

- name: Print outputs
  run: echo "${{ toJSON(steps.dynamic-vars.outputs) }}"
```

**Example output:**
```text
{
  random-number: 1,
  service-name: FOO-SERVICE,
  service-cluster: BAR-CLUSTER
}
```

# 🐛
