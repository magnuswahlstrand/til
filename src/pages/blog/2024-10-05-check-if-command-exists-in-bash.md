---
layout: "../../layouts/BlogPost.astro"
title: "Check if command exists in bash"
datetime: "2024-10-05"
tags: [ bash, scripting ]
---

Today I learned how to check if a command exists in bash. This is useful if you want to gracefully exit if prerequisite
of a script isn't installed.

### TL;DR;

To check if `fzf` isn't installed. Run

```bash
if ! command -v fzf 2>&1 >/dev/null
then
    echo "fzf could not be found"
    exit 1
fi
```

### Breakdown

First, let's look at the if-statement. The code below checks if the result returned a zero status code.
For example:

```
if ( exit 1 ); then
    echo "This won't execute"
else
    echo "This will execute"
fi

if ( exit 0 ); then
    echo "This will execute"
else
    echo "This won't execute"
fi
```

We can also negate the result, using a `!`:

```
if !( exit 1 ); then
    echo "This will execute"
else
    echo "This won't execute"
fi

if !( exit 0 ); then
    echo "This won't execute"
else
    echo "This will execute"
fi
```

We can combine this with the `command` command. 
* `command -v $CMD` returns the path to the executable, if it exists, otherwise nothing.
* `command -v $CMD 2>&1 >/dev/null` hides the output, but sets the status code.

```
if ! command -v fzf 2>&1 >/dev/null
then
    echo "'fzf' could not be found, please install it"
    exit 1
fi
```

That's it 🙏

# ➿