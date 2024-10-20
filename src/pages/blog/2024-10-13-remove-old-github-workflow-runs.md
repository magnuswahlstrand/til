---
layout: "../../layouts/BlogPost.astro"
title: Remove old github workflow runs
datetime: "2024-10-13"
tags: [ github, github-actions ]
---

Working with Github actions, it is easy to trigger a lot of Github action workflow runs. It seems that the old runs are
cached indefinitely (or at least for a long time), meaning they clog up the overview. For some reason Github won't let
you delete them (discussion [here](https://github.com/orgs/community/discussions/26256)).

![Old workflows](/til/img/github-action-old-workflows.png)

## Solution

If you delete all the runs of the old workflows, they will disappear. This can be done manually by clicking on the
individual runs one by one. This gets tedious quite quickly. Instead, we can
use [one of the answers](https://github.com/orgs/community/discussions/26256#discussioncomment-10084663) from the
discussion above:

```bash

REPO=org/our-repo
WORKFLOW_NAME=.github/workflows/deploy-service.yml

run_ids=$(gh run list --repo=$REPO --workflow=$WORKFLOW_NAME --limit 500 --json databaseId | jq '.[].databaseId' -r)

# Loop over ids and delete one at a time
echo "$run_ids" | while IFS= read -r run_id; do
    gh run delete $run_id --repo $REPO
done

```

Done!

# 🐙🐈‍⬛