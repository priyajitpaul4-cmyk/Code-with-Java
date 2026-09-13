# 44. Custom Queue Implementation

**Difficulty:** Intermediate | **Category:** Data Structures

## Description
Implements a basic queue (FIFO) using Java's LinkedList as the underlying structure.

## Source Code
```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.add("Task 1");
        queue.add("Task 2");
        queue.add("Task 3");

        System.out.println("Processing: " + queue.poll());
        System.out.println("Processing: " + queue.poll());
        System.out.println("Remaining in queue: " + queue);
    }
}
```

## Expected Output
```
Processing: Task 1
Processing: Task 2
Remaining in queue: [Task 3]
```

## Explanation
A queue processes items in First-In-First-Out order. poll() removes and returns the item at the front of the queue.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
