# 25. Student Management System

**Difficulty:** Intermediate | **Category:** OOP

## Description
A class-based system to add and display student records in memory.

## Source Code
```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Student {
    String name;
    int roll;
    double marks;

    Student(String name, int roll, double marks) {
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }

    void display() {
        System.out.println(roll + " | " + name + " | " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        System.out.print("How many students? ");
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Roll: ");
            int roll = sc.nextInt();
            System.out.print("Marks: ");
            double marks = sc.nextDouble();
            sc.nextLine();
            students.add(new Student(name, roll, marks));
        }
        System.out.println("\nRoll | Name | Marks");
        for (Student s : students) s.display();
    }
}
```

## Expected Output
```
How many students? 2
...
Roll | Name | Marks
1 | Aarav | 88.0
2 | Diya | 91.5
```

## Explanation
Each student is modeled as an object of the Student class, stored in an ArrayList and displayed with a custom method.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
