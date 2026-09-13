# 35. Mini Banking System

**Difficulty:** Advanced | **Category:** OOP

## Description
A multi-account banking simulation supporting transfers between accounts.

## Source Code
```java
import java.util.HashMap;
import java.util.Map;

class Account {
    String owner;
    double balance;

    Account(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

public class Main {
    static Map<String, Account> accounts = new HashMap<>();

    public static void main(String[] args) {
        accounts.put("A1", new Account("Aarav", 5000));
        accounts.put("A2", new Account("Diya", 2000));

        transfer("A1", "A2", 1500);
        for (Account acc : accounts.values()) {
            System.out.println(acc.owner + ": " + acc.balance);
        }
    }

    static void transfer(String fromId, String toId, double amount) {
        Account from = accounts.get(fromId);
        Account to = accounts.get(toId);
        if (from.balance < amount) {
            System.out.println("Transfer failed: insufficient funds");
            return;
        }
        from.balance -= amount;
        to.balance += amount;
        System.out.println("Transferred " + amount + " from " + from.owner + " to " + to.owner);
    }
}
```

## Expected Output
```
Transferred 1500.0 from Aarav to Diya
Aarav: 3500.0
Diya: 3500.0
```

## Explanation
Accounts are stored in a map keyed by account ID. A transfer debits one account and credits another only if funds are sufficient.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
