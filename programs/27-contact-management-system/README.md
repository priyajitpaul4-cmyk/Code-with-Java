# 27. Contact Management System

**Difficulty:** Intermediate | **Category:** OOP

## Description
Stores and searches contacts by name using a HashMap.

## Source Code
```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Map<String, String> contacts = new HashMap<>();
        contacts.put("Aarav", "9876543210");
        contacts.put("Diya", "9123456780");
        Scanner sc = new Scanner(System.in);
        System.out.print("Search contact name: ");
        String name = sc.nextLine();
        if (contacts.containsKey(name)) {
            System.out.println(name + "'s number: " + contacts.get(name));
        } else {
            System.out.println("Contact not found.");
        }
    }
}
```

## Expected Output
```
Search contact name: Aarav
Aarav's number: 9876543210
```

## Explanation
A HashMap stores name-to-number pairs, giving fast lookup of a contact's phone number by name.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
