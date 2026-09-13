# 21. Unit Converter

**Difficulty:** Beginner | **Category:** Utilities

## Description
Converts a length value between kilometers and miles.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter distance in km: ");
        double km = sc.nextDouble();
        double miles = km * 0.621371;
        System.out.printf("%.2f km = %.2f miles%n", km, miles);
    }
}
```

## Expected Output
```
Enter distance in km: 10
10.00 km = 6.21 miles
```

## Explanation
Multiplying kilometers by the conversion factor 0.621371 gives the equivalent distance in miles.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
