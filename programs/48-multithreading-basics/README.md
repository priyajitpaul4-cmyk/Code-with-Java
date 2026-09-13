# 48. Multithreading Basics

**Difficulty:** Intermediate | **Category:** Multithreading

## Description
Runs two threads concurrently that print numbers independently.

## Source Code
```java
class NumberPrinter extends Thread {
    String name;
    NumberPrinter(String name) { this.name = name; }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + ": " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        NumberPrinter t1 = new NumberPrinter("Thread-A");
        NumberPrinter t2 = new NumberPrinter("Thread-B");
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Both threads finished.");
    }
}
```

## Expected Output
```
Thread-A: 1
Thread-B: 1
Thread-A: 2
...
Both threads finished.
```

## Explanation
Extending Thread and overriding run() defines the task each thread performs. start() launches them concurrently and join() waits for completion.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
