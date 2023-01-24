---
layout: "../../layouts/BlogPost.astro"
title: Set up Tailwind with Expo
datetime: "2023-01-24"
tags: [expo, tailwind, react-native]
---

Today I learned a way to add [TailwindCSS](https://tailwindcss.com/) to a React Native project using Expo. It uses a
library called [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn).

### Steps

1. Create an expo app

```
npx create-expo-app my-beautiful-app
```

2. Install `tailwind-rn`.

```
$ npm install tailwind-rn
```

3. Install `TailwindCSS` and `concurrently`.

```
$ npm install --save-dev tailwindcss postcss concurrently
```

4. Create Tailwind config.

```
$ npx tailwindcss init
$ echo '@tailwind utilities;' > input.css
```

5. Update `tailwind.config.js`

```diff
module.exports = {
-  content: [],
+  content: ["App.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
```

6. Add scripts to build Tailwind styles in package.json.

```diff
{
  "scripts": {
+    "build:tailwind": "tailwindcss --input input.css --output tailwind.css --no-autoprefixer && tailwind-rn",
+    "dev:tailwind": "concurrently \"tailwindcss --input input.css --output tailwind.css --no-autoprefixer --watch\" \"tailwind-rn --watch\""
  }
}
```

## Development

During development, we need to monitor changes and regenerate the css files
for [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn) to work.

7. Watch for file changes

```
$ npm run dev:tailwind
```

8. Then we can update our app

```jsx
import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {TailwindProvider, useTailwind} from 'tailwind-rn';

import utilities from './tailwind.json';


const MyComponent = () => {
    const tailwind = useTailwind();

    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Hello Tailwind
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
};
const App = () => (
    <TailwindProvider utilities={utilities}>
        <MyComponent/>
    </TailwindProvider>
);

export default App;
```

9. And finally, run the app

```
npm run web
```

<img src="/til/img/tailwind-rn.png" style="margin: auto" />

Success!

# 💨⛵