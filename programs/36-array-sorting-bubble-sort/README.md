# 36. Array Sorting (Bubble Sort)

**Difficulty:** Beginner | **Category:** Arrays

## Description
Sorts an array of integers in ascending order using the bubble sort algorithm.

## Source Code
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5, 6};
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println(java.util.Arrays.toString(arr));
    }
}
```

## Expected Output
```
[1, 2, 5, 5, 6, 9]
```

## Explanation
Bubble sort repeatedly swaps adjacent elements that are out of order until the whole array is sorted.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
