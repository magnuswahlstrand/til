---
layout: "../../layouts/BlogPost.astro"
title: "React's most useful props helper: ComponentProps"
datetime: "2023-07-31"
tags: [ typescript, react ]
---

Today I learnt about React's most useful type helper: `React.ComponentProps<typeof Component>`. I originally saw it in a tweet from Matt Popocock, but he has written a blog post about [here](https://www.totaltypescript.com/react-component-props-type-helper).

This means we can create a wrapped component like this:

```tsx
type ImageDivProps = ComponentProps<"div"> 

const ImageDiv = (props: ImageDivProps) => {
    // You can define your hardcoded styles here.
    // Return the JSX with the div and the hardcoded styles
    return <div
        {...props}
        className={`h-16 w-16`}
        style={{
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("/tiles/tilemap_resized.png")`,
            ...props.style, // Allow overriding of styles through props
        }}>
        {props.children}
    </div>;
};
```

And then use it like this:

```tsx
<ImageDiv key={i}
      onPointerEnter={() => onPointerEnter(i)}
      onPointerLeave={() => onPointerLeave(i)}
/>
```

A lot less work than doing it manually!

# 😎