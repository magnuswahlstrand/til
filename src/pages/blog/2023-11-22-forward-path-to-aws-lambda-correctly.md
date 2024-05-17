---
layout: "../../layouts/BlogPost.astro"
title: Forward API Gateway request to Go Fiber router CORRECTLY
datetime: "2023-11-22"
tags: [ go, go-fiber, aws ]
---

After solving the problem in [this post](/til/blog/2023-11-17-forward-path-to-aws-lambda), I ran in to a similar problem, but in the **response**. Any headers I set were lost. I think case, I was using the [Fiber middleware for CORS](https://docs.gofiber.io/api/middleware/cors).

At first I tried a similar solution as before, but then I that I had overcomplicated things in the previous solution. It turns out that the example I had taken from [awslabs/aws-lambda-go-api-proxy](https://github.com/awslabs/aws-lambda-go-api-proxy#fiber) is actually for API Gateway V1, and [sst.dev](sst.dev) uses API Gateway V2!

The solution is to use the V2 types instead of the V1 from `github.com/aws/aws-lambda-go/events`:

```diff
// Handler will deal with Fiber working with Lambda
-func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
-	return fiberLambda.ProxyWithContext(ctx, req)
-}
+func Handler(ctx context.Context, req events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
+	return fiberLambda.ProxyWithContextV2(ctx, req)
+}
```

Peace!

# v𝟸