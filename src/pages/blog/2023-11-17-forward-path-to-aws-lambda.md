---
layout: "../../layouts/BlogPost.astro"
title: Forward API Gateway request to Go Fiber router
datetime: "2023-11-17"
tags: [ go, go-fiber, aws ]
---

Yesterday, I was building an application using [gofiber.io](https://gofiber.io/) to run on AWS Lambda. I used the [awslabs/aws-lambda-go-api-proxy](https://github.com/awslabs/aws-lambda-go-api-proxy) to make sure the application would run on Lambda. 

The documentation recommended the following code:
```go
func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return fiberLambda.ProxyWithContext(ctx, req)
}
```

I had the API gateway route all requests to a single Lambda function, and then Fiber would handle the routing. This configuration routes everything (except OPTIONS) to the Lambda function.
```text
ANY /{proxy+} --> functions/lambda/main.go
```

This seemed to work well initially, but I ran into the following problem.
1. `<MY_URL>/` was routed to the fiber `/` handler.
2. `<MY_URL>/foo` was ALSO routed to the fiber `/` handler. 🤦‍♀️

In the end, the fix is very small, but took a while to track down. We need to take the `proxy` path parameter from the request, and override the path!
```diff
func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
+	req.Path = req.PathParameters["proxy"]
	return fiberLambda.ProxyWithContext(ctx, req)
}
```

Peace!

# 🧘🏻