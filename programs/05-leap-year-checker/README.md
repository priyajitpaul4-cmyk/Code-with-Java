# 5. Leap Year Checker

**Difficulty:** Beginner | **Category:** Basics

## Description
Determines whether a given year is a leap year.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int year = sc.nextInt();
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(year + (isLeap ? " is a Leap Year" : " is not a Leap Year"));
    }
}
```

## Expected Output
```
Enter a year: 2024
2024 is a Leap Year
```

## Explanation
A year is a leap year if it is divisible by 4, unless it is also divisible by 100 but not 400.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
