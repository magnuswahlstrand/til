---
layout: "../../layouts/BlogPost.astro"
title: Fake tags and subscription levels with faker-js
datetime: "2024-10-20"
tags: [ javascript, faker-js ]
---

Today I was working on a project where I needed to generate fake data for tags and subscription levels for a DynamoDB
prototype. I haven't used the library much before, so I learned a couple of useful things.

#### Pick a random element from an array

```javascript 
faker.random.arrayElement(['free', 'basic', 'premium']) // premium
```

#### Pick a random number of elements from an array 

```javascript
faker.random.arrayElements(['free', 'basic', 'premium']) // ['free', 'premium']
```

#### Pick **exactly** two elements from an array

```javascript
faker.random.arrayElements(['free', 'basic', 'premium'], 2)
```

#### Pick a random number of elements from an array with a minimum of 1 and maximum of 3

```javascript 
faker.random.arrayElements(['free', 'basic', 'premium'], faker.number.int({min: 1, max: 3}))
```

Done!

# 🧙‍♂️