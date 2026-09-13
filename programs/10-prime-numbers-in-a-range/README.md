# 10. Prime Numbers in a Range

**Difficulty:** Beginner | **Category:** Loops

## Description
Prints all prime numbers between two numbers given by the user.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter start and end: ");
        int start = sc.nextInt(), end = sc.nextInt();
        for (int n = start; n <= end; n++) {
            boolean isPrime = n > 1;
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) { isPrime = false; break; }
            }
            if (isPrime) System.out.print(n + " ");
        }
    }
}
```

## Expected Output
```
Enter start and end: 10 30
11 13 17 19 23 29
```

## Explanation
The prime check runs inside an outer loop that walks through every number in the range.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
