---
layout: "../../layouts/BlogPost.astro"
title: Redirect multiple outputs in bash
datetime: "2024-10-10"
tags: [ bash ]
---

While working on Github Actions, I came across this strange grouping syntax:  

```
- name: Step summary
shell: bash
run: |
  {
    echo "### Docker Image details :rocket:"
    echo "##### ImageID"
    echo "${{ steps.build-and-push.outputs.imageid }}"
    echo "##### Digest"
    echo "${{ steps.build-and-push.outputs.digest }}"
  } >> $GITHUB_STEP_SUMMARY
```

Today I learned that it is actually standard bash, and can be used as follows:

```bash
{
  echo "Starting process..."
  date
  echo "Process completed."
} >> log
```

# 🇸🇪