# 20. Digital Clock

**Difficulty:** Intermediate | **Category:** Utilities

## Description
Displays the current system time and updates it every second.

## Source Code
```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm:ss");
        for (int i = 0; i < 5; i++) {
            System.out.println(formatter.format(new Date()));
            Thread.sleep(1000);
        }
    }
}
```

## Expected Output
```
14:05:01
14:05:02
14:05:03
14:05:04
14:05:05
```

## Explanation
SimpleDateFormat converts the current Date into a readable time string, printed once per second using Thread.sleep().

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
