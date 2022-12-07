---
layout: "../../layouts/BlogPost.astro"
title: "Shared Depends functions with FastAPI"
datetime: "2022-12-06"
tags: [python, fastpi]
---

Today I learned that we can specify [shared dependencies in path routers](https://fastapi.tiangolo.com/tutorial/dependencies/dependencies-in-path-operation-decorators/#dependencies-for-a-group-of-path-operations]) in FastAPI.

Let's say we have a function that checks the user-ID from a request token, and compare that with the path parameter: 

```python
from my_auth import jwt
from fastapi import APIRouter, Depends, Path

def check_access_rights(user_id: SafeString = Path(...), token: jwt.Token = Depends(get_auth_token)) -> None:
    if token.id == user_id:
        return
    raise UnauthorizedAccessAttempt()
```

Then we can add it under `dependencies` on a APIRouter:
```python
router = APIRouter(
    prefix="/users/{user_id}",
    tags=["users"],
    dependencies=[Depends(check_access_rights)], # <--- here
)
```

Then it will be invoked on for all subsequent paths on that router:
```python
@router.get("/")
async def get_user() -> dict:
    ...

@router.put("/")
async def update_user() -> dict:
    ...
```

Awesome!

# 🛣
