---
layout: "../../layouts/BlogPost.astro"
title: "Setup for SQLAlchemy with Postgres"
datetime: "2022-11-13"
tags: [python, sqlalchemy, postgres]
---

Today I wanted to set up a minimal setup of Python + PostgresSQL. Here is are the few steps I used: 

##### 1. Start Postgres in Docker
```
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

##### 2. Install python dependencies
```
pip install sqlalchemy alembic psycopg2
```

##### 3. Create a basic database model

In **db/model.py**:

```py
from sqlalchemy import Column, Integer
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    user = Column(JSONB)
    version = Column(Integer)
```

##### 4. Initialize and configure Alembic

```
alembic init alembic
```

Update **alembic.ini**:
```diff
-sqlalchemy.url = driver://user:pass@localhost/dbname
+sqlalchemy.url = postgresql://postgres:password@localhost:5432/postgres
```

Update **alembic/env.py**:
```diff
# target_metadata = mymodel.Base.metadata
+from db import model
+target_metadata = model.Base.metadata
```

##### 5. Create and run initial migration

```
alembic revision --autogenerate -m "add users table"
alembic upgrade head
```

##### 6. Verify migration
```
> PGPASSWORD=password  psql -h localhost -U postgres -d postgres -c "SELECT * FROM USERS"
 id |        user        | version
----+--------------------+---------
(0 rows)
```

Nice! 🔥

##### 7. Using SQLAlchemy

Finally, we can write some code to create and get a user _(There are probably better ways to write this)._

```python
from psycopg2.errors import UniqueViolation
from sqlalchemy import create_engine
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from db import model

engine = create_engine("postgresql://postgres:password@localhost:5432/postgres")

with Session(engine) as session, session.begin():
    ed_user = model.User(id=1, user={"name": "Magnus", "age": 35}, version=1)
    session.add(ed_user)
    try:
        session.commit()
    except IntegrityError as e:
        assert isinstance(e.orig, UniqueViolation)
        print("User already exists, continuing...")

with Session(engine) as session, session.begin():
    retrieved_user = session.query(model.User).first()
    print(retrieved_user.user)
```
