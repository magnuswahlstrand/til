---
layout: "../../layouts/BlogPost.astro"
title: Adding and testing trusted CA certificates
datetime: "2023-01-21"
tags: [security, web]
---

Today I had to help a colleague who had problems with his computer SSL certificates and [Zscaler] on his computer, and I
had to add and test a their custom SSL certificate in a Docker environment. I found a website
called [badssl.com](https://badssl.com/) that has a collection subdomains to test various SSL errors that.

In my case, I want to try to add a custom SSL certificate. Using the official `curl` docker image, we
curl https://untrusted-root.badssl.com

```
docker run -it --rm curlimages/curl:7.87.0 https://untrusted-root.badssl.com                                                                                                                               60 ↵
curl: (60) SSL certificate problem: self signed certificate in certificate chain
More details here: https://curl.se/docs/sslcerts.html

curl failed to verify the legitimacy of the server and therefore could not
establish a secure connection to it. To learn more about this situation and
how to fix it, please visit the web page mentioned above.
```

Without the cert, `curl` can't verify the legitimacy, and throws an error.

## Adding the certificate

1) download the root ca certificate from the website https://badssl.com/certs/ca-untrusted-root.crt
2) Create a dockerfile with the following content

```Dockerfile
FROM ubuntu:latest
RUN apt update && apt install -y curl

ADD ca-untrusted-root.crt /usr/local/share/ca-certificates/ca-untrusted-root.crt
RUN update-ca-certificates
```

3) Build `docker build -t ssl-test -f Dockerimage_ssl_test .`
4) Run `docker run -it --rm ssl-test curl https://untrusted-root.badssl.com`

### Output
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="/icons/favicon-red.ico"/>
  <link rel="apple-touch-icon" href="/icons/icon-red.png"/>
  <title>untrusted-root.badssl.com</title>
  <link rel="stylesheet" href="/style.css">
  <style>body { background: red; }</style>
</head>
<body>
<div id="content">
  <h1 style="font-size: 8vw;">
    untrusted-root.<br>badssl.com
  </h1>
</div>

<div id="footer">
  The certificate for this site is signed using an untrusted root.
</div>

</body>
</html>
```

Success!

# 🔥
