---
layout: "../../layouts/BlogPost.astro"
title: Dynamic page metadata in Next.js
datetime: "2023-09-01"
tags: [ frontend, nextjs ]
---

Today I learned that you dynamically generate page metadata in Next.js, for example change title or Open Graph images.

```tsx
import type {Metadata, ResolvingMetadata} from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id

    const product = await fetch(`https://myapi/api/${id}`).then((res) => res.json())

    return {
        title: "Place image",
        openGraph: {
            images: ['https://placehold.co/600x400'],
        },
    }
}

export default function Page({params, searchParams}: Props) {
    return (
        <div>
            <h1>Bar</h1>
            <p>Bar page</p>
        </div>
    )
}
```

More details in the [Next.js docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata).

# ↪