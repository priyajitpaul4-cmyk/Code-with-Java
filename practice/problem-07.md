# Problem 7: Merge Two Sorted Arrays

**Difficulty:** Medium | **Topic:** Arrays

## Statement
Merge two sorted arrays into a single sorted array.

## Hint
Use two pointers, one for each array, and always take the smaller current element.

## Solution
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] a = {1, 3, 5};
        int[] b = {2, 4, 6};
        int[] merged = new int[a.length + b.length];
        int i = 0, j = 0, k = 0;
        while (i < a.length && j < b.length) {
            merged[k++] = (a[i] <= b[j]) ? a[i++] : b[j++];
        }
        while (i < a.length) merged[k++] = a[i++];
        while (j < b.length) merged[k++] = b[j++];
        System.out.println(Arrays.toString(merged));
    }
}
```

## Expected Output
```
[1, 2, 3, 4, 5, 6]
```
