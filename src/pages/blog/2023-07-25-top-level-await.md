---
layout: "../../layouts/BlogPost.astro"
title: "Running scripts with top level await"
datetime: "2023-07-25"
tags: [ javascript, typescript, node ]
---

Running async functions has always been a pain with Node. You have to wrap your code in an async function, and then call it. 

Something like this:
```js
(async () => {
  await doStuff();
})();
```

Today I learned that there is a nicer way to do this, if you using a newer version of Typescript. If we try to use a top level await, we get an error:

```typescript
await doStuff();
```

Error:
> TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

Nice! We can just change our tsconfig.json to allow this.


```diff
{
    "compilerOptions": {
-   "target": "es5",
+   "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
```

# 👏