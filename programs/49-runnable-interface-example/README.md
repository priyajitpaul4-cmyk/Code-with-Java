# 49. Runnable Interface Example

**Difficulty:** Intermediate | **Category:** Multithreading

## Description
Creates threads using the Runnable interface instead of extending Thread.

## Source Code
```java
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println(Thread.currentThread().getName() + ": " + i);
            }
        };
        Thread t1 = new Thread(task, "Worker-1");
        Thread t2 = new Thread(task, "Worker-2");
        t1.start();
        t2.start();
        t1.join();
        t2.join();
    }
}
```

## Expected Output
```
Worker-1: 1
Worker-2: 1
Worker-1: 2
...
```

## Explanation
Implementing Runnable as a lambda separates the task logic from the Thread class itself, which is the preferred modern approach.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
