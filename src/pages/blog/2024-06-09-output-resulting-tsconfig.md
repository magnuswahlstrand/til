---
layout: "../../layouts/BlogPost.astro"
title: "Output merged tsconfig"
datetime: "2024-06-09"
tags: [ typescript, javascript ]
---

Today I learned that you can output the actual `tsconfig.json` that is used when extending another `tsconfig.json`, using the command:

`tsc --showConfig`

For example:

`tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "skipLibCheck": true,
    "types": [
      "node"
    ],
    "jsx": "react-jsx",
    "baseUrl": ".",
    "moduleResolution": "node"
  }
}
```

`tsconfig.json`

```json
{
  "extends": "./tsconfig.base.json",
  "include": [
    "src"
  ],
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  }
}
 ```

Then we can output the resulting file with `tsc --showConfig`:

```shell
tsc --showConfig
```
```json
{
    "compilerOptions": {
        "target": "esnext",
        "module": "esnext",
        "strict": true,
        "skipLibCheck": true,
        "types": [
            "node"
        ],
        "jsx": "react-jsx",
        "baseUrl": "./",
        "moduleResolution": "node",
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "files": [
        "./src/foo.ts"
    ],
    "include": [
        "src"
    ],
    "exclude": [
        "dist"
    ]
}
```

Super useful! 

# 🖖
