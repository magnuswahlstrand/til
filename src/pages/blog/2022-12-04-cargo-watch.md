---
layout: "../../layouts/BlogPost.astro"
title: "Filewatcher for Rust projects"
datetime: "2022-12-04"
tags: [rust, cargo]
---

Today I started reading a sample from the book [Zero to Production in Rust](https://www.zero2prod.com/index.html). They recommended a tool called `cargo watch` to monitor a Rust project, and rerun builds when the files changes.

In the past I've used [entr](https://github.com/eradman/entr), [reflex](https://github.com/cespare/reflex) and [air](https://github.com/cosmtrek/air), but this seems like a better match when working with Rust.

By default `cargo watch` runs `cargo check` to check a local package and dependencies for errors. We can modify the command to run other cargo commands:
* `cargo watch -x run` - Compiles and runs the program. I usually use this.
* `cargo watch -x check -x test` - Check and run tests
* `cargo watch -- echo Hello world` - Run arbitrary command
* `cargo watch -x 'run -- --some-arg'` - Cargo run with arguments

# 🦀 
