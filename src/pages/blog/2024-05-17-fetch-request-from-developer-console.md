---
layout: "../../layouts/BlogPost.astro"
title: "Access the shell from PSQL"
datetime: "2024-05-17"
tags: [ javascript, productivity, development ]
---

Today I learned (from [this SO answer](https://stackoverflow.com/a/16786805)) that you can make HTTP requests from the
developer console in the browser. This can be useful if you want to test an API endpoint, or see the response of a
request.

**Request**

```javascript
fetch('https://yourwebsite.com/api', {method: 'POST', headers: {authorization: '...'}})
    .then(res => res.json())
    .then(console.log)
```

**Response**

```json
{
  "data": "...hopefully what you expect..."
}
```

Semi-useful alternative to Postman or your preferred HTTP request program!  🤓

# 🌐

