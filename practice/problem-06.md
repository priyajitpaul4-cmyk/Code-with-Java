# Problem 6: Two Sum Problem

**Difficulty:** Medium | **Topic:** Collections

## Statement
Given an array and a target, find two numbers that add up to the target.

## Hint
Use a HashMap to store each number and its index while scanning once.

## Solution
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];
            if (seen.containsKey(complement)) {
                System.out.println("Indices: " + seen.get(complement) + ", " + i);
                return;
            }
            seen.put(arr[i], i);
        }
    }
}
```

## Expected Output
```
Indices: 0, 1
```
