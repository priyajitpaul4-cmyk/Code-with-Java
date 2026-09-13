# 2. Simple Calculator

**Difficulty:** Beginner | **Category:** Basics

## Description
Takes two numbers and an operator from the user and performs the calculation.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double a = sc.nextDouble();
        System.out.print("Enter operator (+ - * /): ");
        char op = sc.next().charAt(0);
        System.out.print("Enter second number: ");
        double b = sc.nextDouble();
        double result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/':
                if (b == 0) {
                    System.out.println("Error: Division by zero");
                    return;
                }
                result = a / b; break;
            default:
                System.out.println("Invalid operator");
                return;
        }
        System.out.println("Result: " + result);
    }
}
```

## Expected Output
```
Enter first number: 10
Enter operator (+ - * /): +
Enter second number: 5
Result: 15.0
```

## Explanation
Scanner reads user input. A switch statement chooses the arithmetic operation based on the operator character.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
