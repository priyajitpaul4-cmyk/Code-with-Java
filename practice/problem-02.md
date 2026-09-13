# Problem 2: Count Vowels in a String

**Difficulty:** Easy | **Topic:** Strings

## Statement
Write a Java program that counts the number of vowels in a given string.

## Hint
Loop through each character and check if it matches a, e, i, o, or u (case-insensitive).

## Solution
```java
public class Main {
    public static void main(String[] args) {
        String text = "Code with Java";
        int count = 0;
        for (char c : text.toLowerCase().toCharArray()) {
            if ("aeiou".indexOf(c) != -1) count++;
        }
        System.out.println("Vowels: " + count);
    }
}
```

## Expected Output
```
Vowels: 4
```
