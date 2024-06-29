---
layout: "../../layouts/BlogPost.astro"
title: "Check current AWS CLI user"
datetime: "2024-06-29"
tags: [ aws ]
---

Today I learned that you can see which user you are currently using with the AWS CLI by running:

```sh
aws sts get-caller-identity
```

This will return the user ARN, account ID, and user ID.
    
```sh
{
    "UserId": "K27WBDF6QOUBEKAIDAYYI",
    "Account": "000000000000",
    "Arn": "arn:aws:iam::000000000000:user/magnus"
}
```

# 🌴
