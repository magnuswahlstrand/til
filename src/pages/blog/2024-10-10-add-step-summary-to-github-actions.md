---
layout: "../../layouts/BlogPost.astro"
title: Add step summary to Github Actions
datetime: "2024-10-10"
tags: [ github, github-actions ]
---

Today I learned how to output summary information from Github Actions. This is useful when you want to extract some
information from a run and display in an easy format.

```yaml
- name: Step summary
  shell: bash
  run: |
    echo "### Docker Image details :rocket:" >> $GITHUB_STEP_SUMMARY
    echo "##### ImageID" >> $GITHUB_STEP_SUMMARY
    echo "${{ steps.build-and-push.outputs.imageid }}" >> $GITHUB_STEP_SUMMARY
    echo "##### Digest" >> $GITHUB_STEP_SUMMARY
    echo "${{ steps.build-and-push.outputs.digest }}" >> $GITHUB_STEP_SUMMARY
```

### Result:

The result is found under the **Summary** section on the Github action as follows:

![github-summary-location](/til/img/github-action-summary-button.png)

![github-action-summary](/til/img/github-action-summary.png)

-------

We can use this together with [bash command grouping](/til/blog/2024-10-10-redirect-multiple-outputs-in-bash) to only redirect once:

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

# 🚀