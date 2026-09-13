# 38. Matrix Multiplication

**Difficulty:** Intermediate | **Category:** Arrays

## Description
Multiplies two 2D matrices and prints the resulting matrix.

## Source Code
{% raw %}
```java
public class Main {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        int[][] b = {{5, 6}, {7, 8}};
        int[][] result = new int[2][2];

        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        for (int[] row : result) System.out.println(java.util.Arrays.toString(row));
    }
}
```

## Expected Output
```
[19, 22]
[43, 50]
```

## Explanation
Each cell of the result matrix is the dot product of a row from the first matrix and a column from the second.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
