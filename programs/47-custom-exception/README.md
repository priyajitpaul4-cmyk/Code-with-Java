# 47. Custom Exception

**Difficulty:** Intermediate | **Category:** Exception Handling

## Description
Defines and throws a custom checked exception for invalid ages.

## Source Code
```java
class InvalidAgeException extends Exception {
    InvalidAgeException(String message) { super(message); }
}

public class Main {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above.");
        }
        System.out.println("Age is valid.");
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}
```

## Expected Output
```
Caught: Age must be 18 or above.
```

## Explanation
A custom exception class extends Exception to represent a domain-specific error, thrown explicitly when a rule is violated.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
