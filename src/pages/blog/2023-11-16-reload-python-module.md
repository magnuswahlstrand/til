---
layout: "../../layouts/BlogPost.astro"
title: Reload a Python module during runtime
datetime: "2023-11-16"
tags: [ python ]
---

Today I had a problem in our integration environment. It was difficult to reproduce locally, and the turnaround time for
deploying a new container was around 2 minutes. To speed things up, I figured I could patch a single python module, and
reload it somehow. Turns out it's possible!

1. Deploy a container with the reload code as follows. This can be done inside a route, for example.

```python
from importlib import reload

reload(mymodule)
```

2. Copy module file from your local machine

```
kubectl cp app/api/routes/mymodule.py  $POD:/app/api/routes/mymodule.py
```

3. Call the endpoint that triggers the reload and runs the code

4. **Profit**

There are probably other ways to make the application reload the module, for example having a separate endpoint to
trigger the reload.

**Note: this is not suitable for high traffic scenarios**

# 🚀  

