# 32. To-Do List

**Difficulty:** Beginner | **Category:** Collections

## Description
A console to-do list that lets the user add and view tasks.

## Source Code
```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> tasks = new ArrayList<>();
        tasks.add("Learn Java Collections");
        tasks.add("Practice 5 coding problems");
        tasks.add("Build a mini project");

        System.out.println("Your To-Do List:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }
}
```

## Expected Output
```
Your To-Do List:
1. Learn Java Collections
2. Practice 5 coding problems
3. Build a mini project
```

## Explanation
An ArrayList stores the tasks in the order they were added, and a loop prints them with a running number.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
