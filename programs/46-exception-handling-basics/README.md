# 46. Exception Handling Basics

**Difficulty:** Beginner | **Category:** Exception Handling

## Description
Demonstrates catching a runtime exception with try-catch-finally.

## Source Code
```java
public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        try {
            System.out.println(numbers[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid array index - " + e.getMessage());
        } finally {
            System.out.println("Execution finished.");
        }
    }
}
```

## Expected Output
```
Error: Invalid array index - Index 5 out of bounds for length 3
Execution finished.
```

## Explanation
The try block attempts risky code, the catch block handles the specific exception, and finally always runs afterward.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
