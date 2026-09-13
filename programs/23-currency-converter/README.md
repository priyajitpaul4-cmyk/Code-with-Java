# 23. Currency Converter

**Difficulty:** Beginner | **Category:** Utilities

## Description
Converts an amount from US Dollars to Indian Rupees using a fixed exchange rate.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double rate = 83.20;
        System.out.print("Enter amount in USD: ");
        double usd = sc.nextDouble();
        double inr = usd * rate;
        System.out.printf("$%.2f = ₹%.2f%n", usd, inr);
    }
}
```

## Expected Output
```
Enter amount in USD: 100
$100.00 = ₹8320.00
```

## Explanation
The USD amount is multiplied by a fixed exchange rate to compute the equivalent value in rupees.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
