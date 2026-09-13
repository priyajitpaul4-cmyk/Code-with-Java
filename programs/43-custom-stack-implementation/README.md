# 43. Custom Stack Implementation

**Difficulty:** Intermediate | **Category:** Data Structures

## Description
Implements a basic stack (LIFO) using an array, with push, pop and peek operations.

## Source Code
```java
public class Main {
    static int[] stack = new int[100];
    static int top = -1;

    public static void push(int value) { stack[++top] = value; }
    public static int pop() { return stack[top--]; }
    public static int peek() { return stack[top]; }

    public static void main(String[] args) {
        push(10);
        push(20);
        push(30);
        System.out.println("Top element: " + peek());
        System.out.println("Popped: " + pop());
        System.out.println("New top: " + peek());
    }
}
```

## Expected Output
```
Top element: 30
Popped: 30
New top: 20
```

## Explanation
A stack follows Last-In-First-Out order. push() adds to the top, pop() removes from the top, and an index tracks the current top.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
