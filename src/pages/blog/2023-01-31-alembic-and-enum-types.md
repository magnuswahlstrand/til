---
layout: "../../layouts/BlogPost.astro"
title: alembic and enum types
datetime: "2023-01-31"
tags: [python, alembic, postgres]
---

Today I learned a few things about [alembic](https://alembic.sqlalchemy.org/en/latest/) and postgres enum types.

1. Postgres has Enum types. You can create them using `CREATE TYPE` and then use them in tables like this:

```
CREATE TYPE my_enum AS ENUM ('a', 'b', 'c');
```

2. `alembic` can detect enums from a SQLAlchemy model. If you have the following model

```python
class FruitPrices(Base):
    __tablename__ = "fruit_prices"
    fruit_names = Column(Enum(Fruits), nullable=False, default=Fruits.APPLE)
```

It will generate this code as part of the migration following migration:

```python
    ...
    sa.Column("fruit_names", sa.Enum("APPLE", "SELFSERVICE", name="fruits"), nullable=False),
    ...
```

3. This works create for the initial creation of the Enum, but `alembic` does not update existing Enum types. Instead we
   can add them manually to the migration as follows:

```python
    op.execute("ALTER TYPE fruits ADD VALUE 'BANANA'")
    op.execute("ALTER TYPE fruits ADD VALUE 'KIWI'")
```

# ⤴️