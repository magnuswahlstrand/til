---
layout: "../../layouts/BlogPost.astro"
title: "Background tasks with FastAPI"
datetime: "2022-11-25"
tags: [python, fastapi]
---

Today I learnt that it is easy to add background tasks to an endpoint in [FastAPI](https://fastapi.tiangolo.com/). They are functions that will be run **after** a response has been served. 

```python 
from fastapi import app, BackgroundTasks
from email_service import send_email 

app = FastAPI()

@app.post("/order")
async def create_order(req: OrderReq, background_tasks: BackgroundTasks):
    # Validate & store order in db
    ...
    
    # Add a background task to send e-mail notification, to be handled later
    background_tasks.add_task(send_email, "order placed", "yay!")
    ...
```

That's it! More about background tasks in the [excellent FastAPI documentation](https://fastapi.tiangolo.com/tutorial/background-tasks/).





# 🐍
