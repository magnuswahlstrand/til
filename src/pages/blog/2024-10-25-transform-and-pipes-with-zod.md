---
layout: "../../layouts/BlogPost.astro"
title: Transform and pipes with Zod
datetime: "2024-10-25"
tags: [ javascript, typescript, zod ]
---

I've been using Zod for a while now and I love it. It's a great library for validating and parsing data in JavaScript
and TypeScript. Today I learned a bit more about `transform` and `pipes` in Zod.

* `transform` - Allows you to transform the data after parsing.

```typescript
const model = z.object({
    device_types: z.string().transform((val) => val.split(',')),
})

// parsed is type: { device_types: string[] }
const parsed = model.parse({device_types: 'android,ios'})

console.log(parsed) // { device_types: [ 'android', 'ios' ] }
```

The downside of this approach is that the type of `device_types` is still `string`. This can be a bit annoying if you
want to use the parsed data in other parts of your code. Here we can use pipes!

* `pipes` - Allows you to use additional Zod schemas to parse the data, for additional type safety.

```typescript
const model = z.object({
    device_types: z
        .string()
        .transform((val) => val.split(','))
        .pipe(z.array(z.enum(['ios', 'android']))),
})

// type: { device_types: ('ios','android')[] }
const parsed = model.parse({device_types: 'android,ios'})
```

Now we get the type safety we want!

# 🧾