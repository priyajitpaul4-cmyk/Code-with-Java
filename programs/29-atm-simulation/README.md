# 29. ATM Simulation

**Difficulty:** Intermediate | **Category:** OOP

## Description
Simulates ATM operations: balance check, withdrawal and PIN validation.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int correctPin = 1234;
        double balance = 5000;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter PIN: ");
        int pin = sc.nextInt();
        if (pin != correctPin) {
            System.out.println("Incorrect PIN.");
            return;
        }
        System.out.print("Enter amount to withdraw: ");
        double amount = sc.nextDouble();
        if (amount > balance) {
            System.out.println("Insufficient funds.");
        } else {
            balance -= amount;
            System.out.println("Withdrawal successful. Remaining balance: " + balance);
        }
    }
}
```

## Expected Output
```
Enter PIN: 1234
Enter amount to withdraw: 1000
Withdrawal successful. Remaining balance: 4000.0
```

## Explanation
The PIN is validated first; only then is the withdrawal processed against the available balance.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
