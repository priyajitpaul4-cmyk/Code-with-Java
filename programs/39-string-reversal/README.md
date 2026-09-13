# 39. String Reversal

**Difficulty:** Beginner | **Category:** Strings

## Description
Reverses a string entered by the user without using a built-in reverse method.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        StringBuilder reversed = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        System.out.println("Reversed: " + reversed);
    }
}
```

## Expected Output
```
Enter a string: Java
Reversed: avaJ
```

## Explanation
The string is traversed from the last character to the first, appending each one to a StringBuilder.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
