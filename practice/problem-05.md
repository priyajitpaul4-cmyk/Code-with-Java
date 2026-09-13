# Problem 5: Find Missing Number

**Difficulty:** Medium | **Topic:** Arrays

## Statement
An array contains n-1 distinct numbers from 1 to n. Find the missing number.

## Hint
Compare the expected sum of 1..n with the actual sum of the array.

## Solution
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        int n = arr.length + 1;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int x : arr) actualSum += x;
        System.out.println("Missing number: " + (expectedSum - actualSum));
    }
}
```

## Expected Output
```
Missing number: 3
```
