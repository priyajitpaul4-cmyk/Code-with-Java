# 30. Employee Management System

**Difficulty:** Intermediate | **Category:** OOP

## Description
Calculates employee salary with bonus using inheritance.

## Source Code
```java
class Employee {
    String name;
    double baseSalary;

    Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    double calculateSalary() { return baseSalary; }
}

class Manager extends Employee {
    double bonus;

    Manager(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    @Override
    double calculateSalary() { return baseSalary + bonus; }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee("Rahul", 30000);
        Manager mgr = new Manager("Priya", 50000, 10000);
        System.out.println(emp.name + "'s salary: " + emp.calculateSalary());
        System.out.println(mgr.name + "'s salary: " + mgr.calculateSalary());
    }
}
```

## Expected Output
```
Rahul's salary: 30000.0
Priya's salary: 60000.0
```

## Explanation
Manager extends Employee and overrides calculateSalary() to add a bonus, demonstrating inheritance and polymorphism.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
