# 31. Expense Tracker

**Difficulty:** Intermediate | **Category:** OOP

## Description
Records expenses and prints a total and category-wise summary.

## Source Code
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Double> expenses = new LinkedHashMap<>();
        expenses.put("Food", 1200.0);
        expenses.put("Travel", 800.0);
        expenses.put("Books", 500.0);

        double total = 0;
        for (Map.Entry<String, Double> entry : expenses.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
            total += entry.getValue();
        }
        System.out.println("Total expenses: " + total);
    }
}
```

## Expected Output
```
Food: 1200.0
Travel: 800.0
Books: 500.0
Total expenses: 2500.0
```

## Explanation
A LinkedHashMap keeps categories in insertion order while accumulating a running total of all expense values.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
