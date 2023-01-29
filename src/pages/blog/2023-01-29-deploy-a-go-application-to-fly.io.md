---
layout: "../../layouts/BlogPost.astro"
title: Deploy a Go application to fly.io
datetime: "2023-01-29"
tags: [go, fly.io]
---

Today I learned how to set up and deploy a Go application with fly.io.

1. Install cli tool ``` brew install flyctl```
2. Log in to fly.io accounts ```flyctl auth login```
3. Write program

```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_, err := fmt.Fprintf(w, "Hello, World! You are in the %q region", os.Getenv("FLY_REGION"))
		if err != nil {
			log.Fatal(err)
		}
	})

	log.Println("listening on", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
```

4. Commit code ```git commit -am "initial commit"```
5. Initialize project ```flyctl launch```
6. Deploy project ```flyctl launch```
7. View result ```curl https://flytest-magnus.fly.dev/```
```
Hello, World! You are in the "ams" region
```

# 👍