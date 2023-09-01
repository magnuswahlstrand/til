---
layout: "../../layouts/BlogPost.astro"
title: Web Share API
datetime: "2023-09-01"
tags: [ frontend, web ]
---

Today I learned that you can use the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
to share content from your website to other apps, in a native mobile way.

```ts
const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Sharable title',
                text: '🟩🟥🟥\n🟩🟥🟥\n🟩🟩🟥\n🟩🟩🟩',
            });
            console.log('Content shared successfully');
        } catch (error) {
            console.log('Error sharing:', error);
        }
    } else {
        console.log('Web Share API not supported.');
        await navigator.clipboard.writeText("Copied to clipboard 3")
    }
};
```

### Result:

<div class="flex flex-row justify-center">
    <img class="max-w-sm" src="/til/img/web-share-api.png" alt="Shared on mobile" />
</div>

You can check if the share was aborted by the user by checking if the error message contains `AbortError`.

```tsx
if (error?.toString().includes('AbortError')) {
    console.log('Share was aborted by the user.');
} else {
    console.log('Error sharing:', error);
}
```

#🔗