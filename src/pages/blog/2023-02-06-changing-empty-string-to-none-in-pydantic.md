---
layout: "../../layouts/BlogPost.astro"
title: Changing empty string to None in Pydantic
datetime: "2023-03-06"
tags: [python, pydantic]
---

Today I learned how to change an empty string to `None` in Pydantic, using a validator.

Let's say we want to use the following input:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "",
  "phone": ""
}

```

If we add the validator below to our model, we can change empty strings to `None`:

```python
class User(BaseModel):
    first_name: SafeString
    last_name: SafeString
    email: SafeString | None
    phone: SafeString | None

    @validator("*", pre=True)
    def empty_to_none(cls, v: Any) -> Any:
        if v == "":
            return None
        return v
```

Output:

```python
User(
    first_name='John',
    last_name='Doe',
    email=None,
    phone=None
)
```

### Why is this useful?

* Frontend applications often want to send empty strings to the backend, as it is the easiest approach when using forms.
* The backend on the other hand might want to store `None` instead.

# 🐍