---
layout: "../../layouts/BlogPost.astro"
title: "Dividing a circle in N sections"
datetime: "2022-11-18"
tags: [javascript, p5js, math, geometry]
---

Today I learned from [this tweet](https://twitter.com/Ayliean/status/1593276676263256068?t=9vH-5JxTTOFwann-eiCd6Q) by [@Ayliean](https://twitter.com/Ayliean) you can divide a circle into any amount of evenly sized sections! Useful indeed.

The video above describes how to do it. A quick summary below

1. First we draw half circles 

![half circles](/img/circle-1.png)

2. Then we flip and mirror them. I added a slight distance between the two parts.

![two half circles](/img/circle-2.png)

3. Next we color them, and remove the distance.

![colored sections](/img/circle-3.png)

Voila! Looks great doesn't it?

Here are two more examples, with three and seven sections.

![3 sections](/img/circle-4.png)

**N=3**

![7 sections](/img/circle-5.png)

**N=7**

Here is my code (also in the [p5js editor](https://editor.p5js.org/magnuswahlstrand-daffy/sketches/S9lQsSq8z)):
```javascript
const width = 400
const height = 400
const cx = width/2
const cy = height/2
const cDiameter = 300
const nShapes = 5

var colors = [
"#9b5fe0",
"#16a4d8",
"#60dbe8",
"#8bd346",
"#efdf48",
"#f9a52c",
"#d64e12",
]

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);
  
  var step = cDiameter/nShapes
  for (let i = 0; i < nShapes; i++) {
    var offset = i * step/2 
    // width of section
    var sd = cDiameter -i*step
    
    fill(colors[i])
    arc(cx - offset, cy, sd, sd, PI, 0);
    fill(colors[nShapes-i-1])
    arc(cx + offset, cy, sd, sd, 0, PI);
  }
}
```

# 🔵
