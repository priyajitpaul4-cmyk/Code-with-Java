# 14. Sum of Digits

**Difficulty:** Beginner | **Category:** Loops

## Description
Calculates the sum of all digits of a number.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int sum = 0;
        while (n != 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Sum of digits: " + sum);
    }
}
```

## Expected Output
```
Enter a number: 4526
Sum of digits: 17
```

## Explanation
Each digit is peeled off the end of the number using % 10 and added to a running total.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
