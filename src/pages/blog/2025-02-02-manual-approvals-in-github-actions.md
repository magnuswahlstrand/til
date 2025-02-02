---
layout: "../../layouts/BlogPost.astro"
title: Manual approvals in Github actions
datetime: "2025-02-02"
tags: [ github, github-actions]
---

## Manual approvals in GitHub Actions  

Today I learned that you can require manual approvals in Github Actions by using **environments**.  

By defining an `environment` with a **required reviewer**, the workflow pauses until approval. This is useful for deployments and gated workflows.  

### Example  

```yaml
name: Gate  

on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:

permissions:
  pull-requests: read
  contents: read

jobs:
  run-tests:
    name: Build and run tests
    steps:
      - run: echo "..."

  gate:
    needs: run-tests
    runs-on: ubuntu-latest
    environment: production_gate
    steps:
      - run: echo "Approved!"
```

The action will pause at `gate` unntil a reviewer approves it. 

This can be used for manual approval before deployments to production, for example.

#🚦

