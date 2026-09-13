# 9. Prime Number Checker

**Difficulty:** Beginner | **Category:** Loops

## Description
Checks whether a given number is a prime number.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        boolean isPrime = n > 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) { isPrime = false; break; }
        }
        System.out.println(n + (isPrime ? " is Prime" : " is not Prime"));
    }
}
```

## Expected Output
```
Enter a number: 29
29 is Prime
```

## Explanation
A number is prime if it has no divisors other than 1 and itself. Checking up to its square root is enough.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
