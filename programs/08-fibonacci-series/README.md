# 8. Fibonacci Series

**Difficulty:** Beginner | **Category:** Loops

## Description
Prints the Fibonacci sequence up to a given number of terms.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of terms: ");
        int n = sc.nextInt();
        int a = 0, b = 1;
        for (int i = 0; i < n; i++) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }
    }
}
```

## Expected Output
```
Enter number of terms: 8
0 1 1 2 3 5 8 13
```

## Explanation
Each Fibonacci number is the sum of the two preceding numbers, starting from 0 and 1.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
