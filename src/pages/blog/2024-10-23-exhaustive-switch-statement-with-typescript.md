---
layout: "../../layouts/BlogPost.astro"
title: Exhaustive switch statement with TypeScript
datetime: "2024-10-23"
tags: [ javascript, typescript ]
---

I really like the way Rust can
do [exhaustive pattern matching](https://rustc-dev-guide.rust-lang.org/pat-exhaustive-checking.html). There is
a [propsal for Javascript](https://github.com/tc39/proposal-pattern-matching) that would do something similar, but it
has not yet been accepted.

Until then, we can use TypeScript to do something similar. Here is an example:

export const foo = z.object({
id: z.string(),

Let's say we have an object with a type:

```typescript

type SomeUnion = {
    type: 'typeA' | 'typeB'
}
```

```typescript
function convert(input: SomeUnion) {
    switch (input.type) {
        case 'typeA':
            // Do something with this typeA
            return {...}
        case 'typeB':
            // Do something with this typeB
            return {...}
        default:
            // Input type will not satisfy 
            return input.type satisfies never
    }
}
```

If we remove one of the cases, TypeScript will complain that the switch statement is not exhaustive. This is a nice way
to ensure that we handle all cases.

```typescript
function convert(input: SomeUnion) {
    switch (input.type) {
        case 'typeA':
            // Do something with this typeA
            return {...}
        default:
            // TS1360: Type string does not satisfy the expected type never 
            return input.type satisfies never
    }
}
```

Caveats:
* Once typescript is compiled to JavaScript, the switch statement will be removed. This means that the check is only
  done at compile time.
* If we send in an `any` type, this will also not be caught.

# ✅