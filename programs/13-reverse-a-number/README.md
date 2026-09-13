# 13. Reverse a Number

**Difficulty:** Beginner | **Category:** Loops

## Description
Reverses the digits of a number entered by the user.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println("Reversed number: " + reversed);
    }
}
```

## Expected Output
```
Enter a number: 6789
Reversed number: 9876
```

## Explanation
The last digit is extracted with % 10 and appended to the result, then removed from the number with / 10.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
