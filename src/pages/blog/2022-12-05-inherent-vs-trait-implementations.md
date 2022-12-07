---
layout: "../../layouts/BlogPost.astro"
title: "Inherent vs Trait implementations"
datetime: "2022-12-05"
tags: [rust]
---

Today I learned that there are _inherent_ and _trait_ implementations in Rust ([documentation here](https://doc.rust-lang.org/reference/items/implementations.html)).


```rust
struct MyStruct;

// Inherent implementation
impl MyStruct {
    // #1
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "Hello, Inherent implementation!")
    }
}

// Trait implementation
impl Display for MyStruct {
    // #2
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "Hello, Display Trait implementation!")
    }
}
```

* Whenever a trait is required, e.g. `println!("{}", MyStruct)`, then the #2 - _trait implementation_ will be used.
* If we call `MyStruct.fmt(...)` directly, then #1 - the _inherent implementation_ will be called, if it exists. 
  * If an _inherent implementation_ doesn't exist, a single matching _trait implementation_ will be used.
  * Multiple matching _trait implementations_ will cause a build error.

  
Thanks to user **TheMissingPiece** in the #beginners channel on the Rust discord for help!

# 🙏
