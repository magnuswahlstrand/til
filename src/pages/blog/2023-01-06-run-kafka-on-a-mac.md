---
layout: "../../layouts/BlogPost.astro"
title: Running Kafka on a Mac
datetime: "2023-01-06"
tags: [kafka, mac]
---

Today I learned how to run kafka on my mac. Steps
from [this gist-comment](https://gist.github.com/jarrad/3528a5d9128fe693ca84?permalink_comment_id=2323553#gistcomment-2323553)
.

```
brew install kafka

brew services start zookeeper
brew services start kafka
```

To use the broker, we need to

#### 1) create a topic

```python
import kafka

client = kafka.KafkaAdminClient(bootstrap_servers=["localhost:9092"])

topic = kafka.admin.NewTopic("my-topic", num_partitions=3, replication_factor=1)
client.create_topics([topic])
```

#### 2) start the consumer

```python
import json

import kafka

consumer = kafka.KafkaConsumer("my-topic",
                               bootstrap_servers=['localhost:9092'],
                               value_deserializer=lambda v: json.loads(v.decode('utf-8')))

# Print the messages
print("Messages:")
for message in consumer:
    print(message.value)
```

#### 3) publish a message

```python
import json

import kafka

# producer that sends messages to the topic
producer = kafka.KafkaProducer(
    bootstrap_servers=["localhost:9092"],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

# send messages to the topic
resp = producer.send("my-topic", {"name": "John"}).get()
```

#### Output
```
> python consumer.py                                                                              130 ↵
Messages:
{'name': 'John-2'}
```

Success!

# 📚
