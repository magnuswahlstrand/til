---
layout: "../../layouts/BlogPost.astro"
title: "Useful methods in D3.js"
datetime: "2024-07-30"
tags: [ javascript, d3 ]
---

I'm currently working on a deck building game. It mainly uses HTMX, and server side rendering, but for the world map, I'm using [D3.js](https://d3js.org/).

Today I learned a few useful methods in D3.js. Let's say we have created a node group
```
const nodeGroup = svg.append("g")
        .attr("class", "nodes")
        .selectAll("image")
        .data(nodes)
        .enter().append("g")
```

Then we can 

### `.each`

We can do something when each node is created, using each
```javascript
nodeGroup
    .each(myFunction)
```

### .on

We can handle events, such as mouseover or mouseout (can be used for animation, for example):

```javascript
nodeGroup
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut)
```

### .filter

We can filter the nodes, for example, to only show nodes that have been visited:

```javascript
nodeGroup
    .filter(d => d.someCondition)
    .attr("opacity", 1)
```

### .transition

We can animate the nodes, for example, to move them to a new position:

```javascript
nodeGroup
    .transition()
    .duration(1000)
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
```

#### looping animation

We can loop the animation, for example, to make the nodes move back and forth:

```javascript
    nodeGroup.append("image")
    .each(loopAnimation)

function loopAnimation(d, d2, foo) {
    d3.select(this)
        .transition()
        .duration(600)
        .attr("width", maxDiameter)
        .attr("height", maxDiameter)
        .attr("x", x(d.coordinates.x) - maxDiameter / 2)
        .attr("y", y(d.coordinates.y) - maxDiameter / 2)
        .transition()
        .duration(600)
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("x", x(d.coordinates.x) - diameter / 2)
        .attr("y", y(d.coordinates.y) - diameter / 2)
        .on('end', loopAnimation)
}
```

-----------------

That's it for now.

# 🧊
