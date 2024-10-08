---
layout: "../../layouts/BlogPost.astro"
title: Redis client shutdown shuts down server
datetime: "2024-10-08"
tags: [ redis, javascript, nodejs ]
---

Today I was writing a shutdown procedure for my [hono](https://hono.dev/) app, and found a fun fact about the No learned
the fun fact about the [node-redis](https://github.com/redis/node-redis) client.

In my local environment, I had one terminal running Redis, and one terminal with my web app.

```javascript
export const redisClient = createClient({url: env.REDIS_URL})
await redisClient.connect()

// Later, during app shutdown
await redisClient.shutdown() // <-- part of new shutdown procedure
```

I was a bit surprised when I did `ctrl+C` on the webapp, but didn't get the expected shutdown procedure. Instead the
other terminal, with Redis output the following:

> 1:M 08 Oct 2024 12:59:42.696 * User requested shutdown...
> 1:M 08 Oct 2024 12:59:42.696 * Saving the final RDB snapshot before exiting.
> 1:M 08 Oct 2024 12:59:42.712 * DB saved on disk
> 1:M 08 Oct 2024 12:59:42.713 # Redis is now ready to exit, bye bye...

#### Problem

It turns out that `redisClient.shutdown()` does **not** shutdown the client, but rather tells the client to tell the
server to shut down.

#### Solution

Instead of `shutdown()`, use `redisClient.quit()`.

--------
**Note:** I'm not sure what would happen if I run that command on the real Redis instance...

# 🟥🥶