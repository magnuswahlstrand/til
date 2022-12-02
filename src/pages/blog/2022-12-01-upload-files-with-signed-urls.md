---
layout: "../../layouts/BlogPost.astro"
title: "Uploading files with Signed URLs"
datetime: "2022-12-01"
tags: [python, gcp, cloud storage]
---

Signed URLs (or [presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) as they are called on AWS), is one of my favorite patterns when working with cloud services. They let us let simplify file uploads from clients. A typical flow looks as follows 
![Signed URLs flow](/til/img/signed-urls.png)

Today I learned how create [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls) to upload files from a client directly to [Google Cloud Storage](https://cloud.google.com/storage), using Python!

There are two ways of uploading a file. We can upload a file directly using `PUT`, using `curl` for example, or with a regular HTML form with `POST`.

### Upload using PUT
Here is how you generate an upload URL that is valid for 15 minutes. 
```python
import datetime

from google.cloud import storage

def generate_signed_url_for_put_upload(bucket_name, blob_name):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(blob_name)
    url = blob.generate_signed_url(
        version="v4",
        expiration=datetime.timedelta(minutes=15),
        method="PUT",
        content_type="application/octet-stream",
    )
    return url
```
Then you can upload `$YOUR_FILE` with `curl`. More details [on the google blog](https://cloud.google.com/storage/docs/samples/storage-generate-upload-signed-url-v4).
```bash
curl -X PUT -H 'Content-Type: application/octet-stream' --upload-file $YOUR_FILE $URL
```

### Upload using POST form a form
If we want to upload the file from a website, we will use a HTML form. We can generate the form data with similar code. This uses a XML API under the hood (for some reason).

```python
import datetime

from google.cloud import storage

def generate_signed_url_policy(bucket_name, blob_name):
    storage_client = storage.Client()
    policy = storage_client.generate_signed_post_policy_v4(
        bucket_name,
        blob_name,
        expiration=datetime.timedelta(minutes=10),
        fields={
            'x-goog-meta-test': 'data'
        }
    )

    url = policy["url"]
    fields = policy["fields"]
    return url, fields 
```
Then we can use the `url` and `fields` to generate a HTML form.

```python
def generate_signed_url_form(bucket_name, blob_name):
    url, fields = generate_signed_url_policy(bucket_name, blob_name)

    header = "<form action='{}' method='POST' enctype='multipart/form-data'>\n"
    form = header.format(url)

    for key, value in fields:
        form += f"  <input name='{key}' value='{value}' type='hidden'/>\n"

    form += "  <input type='file' name='file'/><br />\n"
    form += "  <input type='submit' value='Upload File' /><br />\n"
    form += "</form>"
    return form
```

#### Result
![Upload](/til/img/upload.png)

More details [on the google blog](https://cloud.google.com/storage/docs/xml-api/post-object-forms).


### Reference

[Here is an implementation in Go](https://github.com/magnuswahlstrand/gcp-demo-2/blob/c0d423a29c4a8b23bee9e6fa1689daa5033d1908/service/util.go#L48), for generating signed URLs.

# 📁
