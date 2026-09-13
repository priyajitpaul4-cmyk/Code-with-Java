# 11. Palindrome Number

**Difficulty:** Beginner | **Category:** Loops

## Description
Checks whether a number reads the same forwards and backwards.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int original = n, reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println(original + (original == reversed ? " is a Palindrome" : " is not a Palindrome"));
    }
}
```

## Expected Output
```
Enter a number: 12321
12321 is a Palindrome
```

## Explanation
The digits of the number are reversed one by one and compared with the original number.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
