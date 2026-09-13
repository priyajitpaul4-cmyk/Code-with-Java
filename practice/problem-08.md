# Problem 8: Custom Exception for Validation

**Difficulty:** Hard | **Topic:** Exception Handling

## Statement
Design a custom exception hierarchy to validate a user's age and email together.

## Hint
Create one base exception and two subclasses for each validation rule.

## Solution
```java
class ValidationException extends Exception {
    ValidationException(String msg) { super(msg); }
}
class InvalidAgeException extends ValidationException {
    InvalidAgeException(String msg) { super(msg); }
}
class InvalidEmailException extends ValidationException {
    InvalidEmailException(String msg) { super(msg); }
}

public class Main {
    static void validate(int age, String email) throws ValidationException {
        if (age < 18) throw new InvalidAgeException("Age must be 18+");
        if (!email.contains("@")) throw new InvalidEmailException("Invalid email format");
        System.out.println("Valid user");
    }

    public static void main(String[] args) {
        try {
            validate(20, "user_at_example.com");
        } catch (ValidationException e) {
            System.out.println("Rejected: " + e.getMessage());
        }
    }
}
```

## Expected Output
```
Rejected: Invalid email format
```
