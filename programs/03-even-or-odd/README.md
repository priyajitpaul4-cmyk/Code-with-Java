# 3. Even or Odd

**Difficulty:** Beginner | **Category:** Basics

## Description
Checks whether a number entered by the user is even or odd.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        if (n % 2 == 0) {
            System.out.println(n + " is Even");
        } else {
            System.out.println(n + " is Odd");
        }
    }
}
```

## Expected Output
```
Enter a number: 7
7 is Odd
```

## Explanation
The modulus operator (%) returns the remainder of division. Any number divisible by 2 with no remainder is even.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
