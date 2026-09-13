# 12. Armstrong Number

**Difficulty:** Beginner | **Category:** Loops

## Description
Checks whether a number equals the sum of its own digits each raised to the power of the digit count.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int digits = String.valueOf(n).length();
        int sum = 0, temp = n;
        while (temp != 0) {
            int d = temp % 10;
            sum += Math.pow(d, digits);
            temp /= 10;
        }
        System.out.println(n + (sum == n ? " is an Armstrong Number" : " is not an Armstrong Number"));
    }
}
```

## Expected Output
```
Enter a number: 153
153 is an Armstrong Number
```

## Explanation
153 = 1^3 + 5^3 + 3^3. Each digit is raised to the power of the total number of digits, then summed.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
