---
layout: "../../layouts/BlogPost.astro"
title: "Tools for listing resources with the AWS cli"
datetime: "2024-09-17"
tags: [ aws, productivity, scripting ]
---

With any reasonably large infrastructure project on AWS comes with the complexity of finding resources. Recently I've
been exploring the `aws` cli, and how to be use it for scripting.

Let's start by just listing load balancers

```
aws elbv2 --profile tvm-developer@dev1 describe-load-balancers --no-cli-pager
{
    "LoadBalancers": [
        {
            "LoadBalancerArn": "arn:aws:elasticloadbalancing:eu-west-1:012345678910:loadbalancer/app/lb1",
            "DNSName": "internal-lb-012345678910.eu-west-1.elb.amazonaws.com",
            "CreatedTime": "2022-02-17T10:16:32.600000+00:00",
            "LoadBalancerName": "lb1",
            "Scheme": "internet-facing",
```

Pretty good, but too much information. I just want the DNS name. We can use `--query` for that:

```
aws elbv2 --profile tvm-developer@dev1 describe-load-balancers --no-cli-pager --query 'LoadBalancers[].DNSName'
[
    "lb1.eu-west-1.elb.amazonaws.com",
    "lb2.eu-west-1.elb.amazonaws.com",
    "lb3.eu-west-1.elb.amazonaws.com",
    "lb4.eu-west-1.elb.amazonaws.com",
```

Again, better, but I just want a single, unquoted load balancer DNS name on each row. We could use `jq` for this, but
let's try to use the `aws` cli as much as we can. If we add the `--output text` to get a text format rather than JSON.

For some reason, this returns a tab separated list, but we can replace the tabs with new lines, and then finally pipe it
into fzf:

```
aws elbv2 --profile tvm-developer@dev1 describe-load-balancers --no-cli-pager --query 'LoadBalancers[].DNSName' --output text | sed 's/\t/\n/g' | fzf
lb1.eu-west-1.elb.amazonaws.com
lb2.eu-west-1.elb.amazonaws.com
lb3.eu-west-1.elb.amazonaws.com
lb4.eu-west-1.elb.amazonaws.com    ```
```

That's step 1 of our long journey to do something useful with the `aws` cli 😬

# 🪈️

### Bonus:
We can add additional filtering inside the `--query` flag. For example, we can filter out only load balancers that start with `lb1`, as follows:

```
aws elbv2 --profile tvm-developer@dev1 describe-load-balancers --no-cli-pager --query "LoadBalancers[?starts_with(DNSName, 'internal')].DNSName"
```
