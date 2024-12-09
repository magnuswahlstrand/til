---
layout: "../../layouts/BlogPost.astro"
title: EventBridge prefix conditions with CDK
datetime: "2024-12-01"
tags: [ aws, cdk ]
---

Today I was migrating some code from CDKTF to CDK. I had a rule that looked like this:

```typescript
const eventRule = new CloudwatchEventRule(this, "event-rule", {
    name: 'event-rule',
    eventBusName: bus.arn,
    eventPattern: JSON.stringify({'source': [{'prefix': ''}]}),
})
```

In CDK, it seems that you have to use a list of strings instead of a single string. So the equivalent in CDK would be:

```typescript
const eventRule = new events.Rule(this, 'EventRule', {
    ruleName: 'event-rule',
    eventBus: bus,
    eventPattern: {
        source: events.Match.prefix(""),
    },
});
```

That's it!

# 📀
