# 22. Temperature Converter

**Difficulty:** Beginner | **Category:** Utilities

## Description
Converts a temperature between Celsius and Fahrenheit.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter temperature in Celsius: ");
        double celsius = sc.nextDouble();
        double fahrenheit = (celsius * 9 / 5) + 32;
        System.out.printf("%.1f C = %.1f F%n", celsius, fahrenheit);
    }
}
```

## Expected Output
```
Enter temperature in Celsius: 25
25.0 C = 77.0 F
```

## Explanation
The formula F = C * 9/5 + 32 converts a Celsius reading into its Fahrenheit equivalent.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
