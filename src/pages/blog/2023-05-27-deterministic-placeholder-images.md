---
layout: "../../layouts/BlogPost.astro"
title: "Deterministic robot placeholder images"
datetime: "2023-05-27"
tags: [frontend]
---

Today I learned that you can get placeholder images of robots from https://robohash.org/{ANY_STRING}.


For example:

## ANY_STRING = magnus 
![robot 1](https://robohash.org/magnus)

## ANY_STRING = 2
![robot 2](https://robohash.org/2)

## ANY_STRING = robot
![robot 3](https://robohash.org/robot)


This mean you can do stuff like this for prototypes:

```tsx
{robotNames.map((robotName, i) => (
    <div key={i} className="border-2 border-black">
        <img src={`https://robohash.org/${robotName}`} alt="robot" />
    </div>
))}
```

# 🤖