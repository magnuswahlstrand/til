---
layout: "../../layouts/BlogPost.astro"
title: "API mocking in the browser with MirageJS"
datetime: "2023-06-16"
tags: [frontend, react, prototyping]
---

Today I found out about [MirageJS](https://miragejs.com/), a library for mocking API's in the browser. It's a great tool for prototyping and testing. It can perform pretty advanced CRUD actions in the browser, without having an actual backend.

`createServer` is used to start the MirageJS mock server, for example here is a GET endpoint with reminders.

```javascript
createServer({
    routes() {
        this.get("/api/reminders", (schema) => {
            return [
                { id: 1, text: "Buy milk", done: false }
            ]
        })
    }
})
```

We can store models the browser storage, by defining them in the createServer config:
```javascript
createServer({
    models: {
        reminder: Model
    },
    ...
```

and returning all of them, or creating new ones.
```javascript
...
this.get("/api/reminders", (schema) => {
    return schema.reminders.all()
})

this.post("/api/reminders", (schema, request) => {
    let attrs = JSON.parse(request.requestBody)

    return schema.reminders.create(attrs)
})
```

# 🏞