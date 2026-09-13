# Problem 9: Thread-Safe Counter

**Difficulty:** Hard | **Topic:** Multithreading

## Statement
Implement a counter that stays correct when incremented by multiple threads at once.

## Hint
Synchronize the increment method, or use AtomicInteger.

## Solution
```java
import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    static AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        Runnable task = () -> {
            for (int i = 0; i < 1000; i++) counter.incrementAndGet();
        };
        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("Final count: " + counter.get());
    }
}
```

## Expected Output
```
Final count: 2000
```
