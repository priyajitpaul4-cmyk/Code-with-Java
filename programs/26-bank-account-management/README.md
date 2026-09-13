# 26. Bank Account Management

**Difficulty:** Intermediate | **Category:** OOP

## Description
Simulates deposit, withdrawal and balance check for a bank account object.

## Source Code
```java
import java.util.Scanner;

class BankAccount {
    private double balance;

    BankAccount(double initial) { balance = initial; }

    void deposit(double amount) { balance += amount; }

    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            balance -= amount;
        }
    }

    double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount account = new BankAccount(1000);
        System.out.println("Starting balance: " + account.getBalance());
        account.deposit(500);
        System.out.println("After deposit: " + account.getBalance());
        account.withdraw(2000);
        account.withdraw(300);
        System.out.println("Final balance: " + account.getBalance());
    }
}
```

## Expected Output
```
Starting balance: 1000.0
After deposit: 1500.0
Insufficient balance!
Final balance: 1200.0
```

## Explanation
Encapsulation keeps the balance field private, only allowing it to change through the deposit and withdraw methods.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
