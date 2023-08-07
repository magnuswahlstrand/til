---
layout: "../../layouts/BlogPost.astro"
title: "Conditional relationships with SQLAlchemy"
datetime: "2023-08-08"
tags: [ python, sqlalchemy, postgres, sql ]
---

Today I learned that you can override the join in SQLAlchemy to filter out rows based on a condition.

```python
class Organization(Base):
    __tablename__ = "organizations"
    id = Column(String, primary_key=True)
    members = relationship(
        "User",
        primaryjoin="and_(Organization.id==User.org_id, User.archived_at==None)",
        lazy="joined",
    )
```

The entity above will only return members that are not archived.

# 🧪