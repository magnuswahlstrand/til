---
layout: "../../layouts/BlogPost.astro"
title: Date formatting in Slack bot messages
datetime: "2024-12-18"
tags: [ slack ]
---

I have set up a Slack app at work that send messages when we do deployments from Github Actions. Today I learned that you can send messages from a Slack bot and have Slack automatically convert them timestamps.

Format

```
<!date^timestamp^token_string^optional_link|fallback_text>
```

For example this:
```
<!date^1392734382^Posted {date_num} {time_secs}|Posted 2014-02-18 6:39:42 AM PST>
```

### Other tokens

The most interesting ones are probably these:

* `{date_short}` - The date in the format `MM/DD/YYYY`
* `{date_long_pretty}` - same as `{date_short}` but uses `yesterday`, `today`, or `tomorrow` if possible.
* `{ago}` - relative time, e.g. `3 minutes ago`, `4 hours ago`, `2 days ago`.


### Documentation
The official Slack documentation [here](https://api.slack.com/reference/surfaces/formatting#date-formatting) is quite
good!

# 🕰️
