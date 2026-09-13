# 37. Binary Search

**Difficulty:** Beginner | **Category:** Arrays

## Description
Searches for a target value in a sorted array using binary search.

## Source Code
```java
public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 45};
        int target = 23;
        int low = 0, high = arr.length - 1, result = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) { result = mid; break; }
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        System.out.println(result != -1 ? "Found at index " + result : "Not found");
    }
}
```

## Expected Output
```
Found at index 5
```

## Explanation
Binary search repeatedly halves the search range by comparing the target with the middle element of a sorted array.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
