---
layout: "../../layouts/BlogPost.astro"
title: Copy Mongo collection to local environment 
datetime: "2023-11-15"
tags: [ mongodb, database ]
---

Today I learned how to copy a collection from a remote MongoDB database to my local environment. Useful for troubleshooting errors in pre-prod, for example.  

1. Dump the collection to a file (defaults to: `dump`):
```bash
mongodump --uri mongodb+srv://username:pass@host/database --collection mycollection
```

2. Then we can restore the collection to our local environment:
```bash
mongorestore
```



# 👇

