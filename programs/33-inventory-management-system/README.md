# 33. Inventory Management System

**Difficulty:** Intermediate | **Category:** OOP

## Description
Tracks product stock levels and updates them as items are sold.

## Source Code
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> inventory = new HashMap<>();
        inventory.put("Laptop", 10);
        inventory.put("Mouse", 50);

        sell(inventory, "Laptop", 3);
        sell(inventory, "Mouse", 60);

        System.out.println("Final Inventory: " + inventory);
    }

    static void sell(Map<String, Integer> inventory, String item, int qty) {
        int stock = inventory.getOrDefault(item, 0);
        if (qty > stock) {
            System.out.println("Not enough stock for " + item);
        } else {
            inventory.put(item, stock - qty);
            System.out.println("Sold " + qty + " " + item + "(s)");
        }
    }
}
```

## Expected Output
```
Sold 3 Laptop(s)
Not enough stock for Mouse
Final Inventory: {Laptop=7, Mouse=50}
```

## Explanation
getOrDefault() safely reads current stock, and the map is updated only when there is enough stock to fulfill a sale.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
