# 7. Factorial of a Number

**Difficulty:** Beginner | **Category:** Loops

## Description
Calculates the factorial of a number using an iterative loop.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        long factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " = " + factorial);
    }
}
```

## Expected Output
```
Enter a number: 5
Factorial of 5 = 120
```

## Explanation
The factorial of n is the product of all positive integers up to n. A long is used to avoid overflow for larger values.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
