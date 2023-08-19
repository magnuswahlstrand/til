---
layout: "../../layouts/BlogPost.astro"
title: Omit and Exclude with typescript
datetime: "2023-08-17"
tags: [ node, typescript ]
---

Today I learned the difference between Exclude and Omit in typescript.

### Omit

Omit removes a property from a type. For example:

```typescript
type Obj = {
    name: string;
    age: number;
};

type ageless = Omit<Obj, "age">;
// --> Initial type: {name: string}
```

### Exclude

Exclude removes a part of a union. For example:

```typescript
type SomeBigUnion = Obj | string | number;

type SomeSmallerUnion = Exclude<SomeBigUnion, string>;
// --> Initial type: Obj | number
```

You can exclude multiple values at the same time by using a union.

```typescript

type JustANumber = Exclude<SomeBigUnion, string> | Obj;
// --> Initial type: number
```

Neat!

# ∪