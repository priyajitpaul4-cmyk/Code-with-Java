# 6. Multiplication Table

**Difficulty:** Beginner | **Category:** Loops

## Description
Prints the multiplication table for a number entered by the user.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}
```

## Expected Output
```
Enter a number: 5
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

## Explanation
A for loop repeats the multiplication ten times, incrementing the multiplier each iteration.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
