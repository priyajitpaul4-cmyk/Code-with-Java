# Problem 1: Sum of Array Elements

**Difficulty:** Easy | **Topic:** Arrays

## Statement
Write a Java program to calculate the sum of all elements in an integer array.

## Hint
Loop through the array with a for-each loop and keep a running total.

## Solution
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 4, 6, 8, 10};
        int sum = 0;
        for (int n : arr) sum += n;
        System.out.println("Sum: " + sum);
    }
}
```

## Expected Output
```
Sum: 30
```
