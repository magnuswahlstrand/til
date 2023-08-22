---
layout: "../../layouts/BlogPost.astro"
title: Immutable objects in JavaScript
datetime: "2023-08-22"
tags: [ javascript, typesciprt ]
---

While typescript only works compile-time, so there is no runtime guarantee that an object is immutable, you can
use `Object.freeze` to make sure that an object is immutable.

You can try the following in the console

```js
a = {foo: 1}
a.bar = 2
console.log(a) // {foo: 1, bar: 2}

b = Object.freeze({foo: 1})
b.bar = 2
console.log(b) // {foo: 1}
```

Object.freeze results in a Readonly object in typescript land.

```ts
const obj = Object.freeze({a: 1, b: 2});
//type of obj is Readonly{a:1}
```

I'm not sure when this is actually useful, but pretty interesting.

# ☕️