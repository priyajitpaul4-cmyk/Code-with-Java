# 4. Largest of Three Numbers

**Difficulty:** Beginner | **Category:** Basics

## Description
Finds and prints the largest among three numbers entered by the user.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter three numbers: ");
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        int largest = Math.max(a, Math.max(b, c));
        System.out.println("Largest number: " + largest);
    }
}
```

## Expected Output
```
Enter three numbers: 4 9 6
Largest number: 9
```

## Explanation
Math.max() compares two values at a time, so nesting it lets us compare three numbers in one expression.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
