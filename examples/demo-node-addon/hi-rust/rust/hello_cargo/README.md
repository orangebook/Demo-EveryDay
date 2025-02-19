# RUST
>  rust工具链接配置环境 rustup

## RUST通用编程摘要

> 仅记录要点，方便回忆与温习 RUST这个表达式语言

## 通用编程包括

- 变量
- 基本类型
- 函数
- 注释
- 控制流

### 变量

- 默认情况下变量是不可变的
- 变量与常量的差异（常量定义与变量定义的差异）
- 变量阴影
- 不允许改变变量的类型

### 数据类型

> Rust是一种静态类型语言,必须在编译时知道所有变量的类型

- 标量类型: 整数，浮点数，布尔值和字符
- 复合类型
  - 切片允许您引用集合中的连续元素序列，而不是整个集合
  
## 函数

> Rust代码使用snake case作为函数和变量名的常规样式。在案例中，所有字母都是小写字母，并且下划线分隔单词。

- 参数
- 声明和表达(理解Rust表达式的定义，理解带;的区别）
- 具有返回值的函数

## 控制流

> if表达式
> 循环loop，while，和for

## Rust所有权

> 通过所有权系统管理内存，其中包含编译器在编译时检查的一组规则。所有权功能都不会在程序运行时降低程序速度。
- Rust永远不会自动创建数据的“深层”副本。因此， 就运行时性能而言，可以假设任何自动复制都是便宜的
- Copy trait
- 在任何时候，你可以有两种（但不能同时）的一个可变引用或任意数量不变引用。
- 引用必须始终有效。

## 课后作业
https://doc.rust-lang.org/book/2018-edition/ch03-05-control-flow.html#control-flow

## 温习请见第三章

![Cargo](http://ol1szz8y7.bkt.clouddn.com/18-10-25/15897120.jpg)

## [阅读指南](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)

## Q: 使用cargo的常用的有哪些基本命令？

A: cargo --help; cargo build; cargo run;

## Q: Cargo.lock的作用是什么？

A:
## Q: Cargo.toml 使用的版本管理协议是什么？

A:
## Q: 一旦发布到crate.io，还能删除么？

A: