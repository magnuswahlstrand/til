---
layout: "../../layouts/BlogPost.astro"
title: "Debug printing in Rust"
datetime: "2022-11-27"
tags: [rust, debugging]
---

I've just started playing with [Rust](https://www.rust-lang.org/) by going through the examples
in [Rust by example](https://doc.rust-lang.org/rust-by-example).

Today I learned some things about debug printouts in Rust.

1. Print debug information using `println`, uses the `{:?}` template, as opposed to the regular `{}` template.

```rust
println!("{:?} months in a year.", 12);
```

2. To be debug printable, a type needs to have the `fmt::Debug trait`. We can add that trait by deriving it.

```rust
struct UnPrintable(i32);

#[derive(Debug)]
struct DebugPrintable(i32);
```

3. All types in the standard library has the `fmt::Debug trait` and can be debug printed.

4. We can pretty print a debug printable value by using `{:#?}` instead of `{:?}`

```rust
fn main() {
    println!("{:?}", DebugPrintable(32));
    println!("");
    println!("{:#?}", DebugPrintable(32));
}
```

Output:

```rust
DebugPrintable(32)

DebugPrintable(
32,
)
```

5. There is no equivalent of `#[derive(Debug)]` for the `fmt::Display trait` used with `{}`. This has to be implemented
   manually

More about debug printouts
here: [Rust by Example: Debug](https://doc.rust-lang.org/rust-by-example/hello/print/print_debug.html).

# 🦀
