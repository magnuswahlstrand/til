---
layout: "../../layouts/BlogPost.astro"
title: "Running in source tests with vitest"
datetime: "2023-08-01"
tags: [ typescript, vitest, testing ]
---

Today I learned that you can run tests in-source using [vitest](vitest.dev). This is useful to avoid exporting all functions for testing, and keeping the interface small.

From the documentation:
```ts
// the implementation
export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
```

In **vitest.config.ts**:
```ts
// vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
  },
})
```

Then you can run tests with `npx vitest --watch`.

More information here: [vitest.dev/guide/in-source.html](https://vitest.dev/guide/in-source.html)

# 🧾