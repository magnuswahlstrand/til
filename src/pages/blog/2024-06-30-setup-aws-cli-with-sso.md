---
layout: "../../layouts/BlogPost.astro"
title: "Setup AWS cli with SSO"
datetime: "2024-06-30"
tags: [ aws, bash ]
---

Today I learned more about how to configure the AWS cli with SSO. At work we have a very nice developer experience using
SSO, so I wanted to learn how it actually works.

I have used the AWS cli before, but never set up SSO. I **had** set up
an [AWS organisation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) a couple of
years back, so I could use that.

## 1. Configure SSO

1. Go to https://eu-west-1.console.aws.amazon.com/singlesignon and copy "AWS access portal URL".
2. Run `aws configure sso` and paste the URL.

```sh
aws configure sso                                                                               130 ↵
SSO session name (Recommended): private-new
SSO start URL [None]: https://<XXXXXX>.awsapps.com/start 
SSO region [None]: eu-west-1
SSO registration scopes [sso:account:access]:
Attempting to automatically open the SSO authorization page in your default browser.
If the browser does not open or you wish to use a different device to authorize this request, open the following URL:

https://device.sso.eu-west-1.amazonaws.com/

Then enter the code:

SBSB-FCFC
```

3. Complete the setup in the browser.
4. Return to the terminal and select the account and role you want to use. I prefer calling my profile something easier,
   for example `developer@dev`.

```sh
There are 2 AWS accounts available to you.
Using the account ID 9750XXXXXX
The only role available to you is: developer-permission@dev
Using the role name "developer-permission@dev"
CLI default client Region [eu-west-1]:
CLI default output format [json]:
CLI profile name [developer-permission@dev-9750XXXXXX]: developer@dev
```

Finally, we can use the profile with the AWS cli:

```sh
aws s3 ls --profile developer@dev
```

# 📦
