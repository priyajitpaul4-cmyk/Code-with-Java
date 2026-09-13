# 42. Anagram Checker

**Difficulty:** Intermediate | **Category:** Strings

## Description
Checks whether two strings are anagrams of each other.

## Source Code
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String s1 = "listen", s2 = "silent";
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        System.out.println(Arrays.equals(a1, a2) ? "Anagrams" : "Not Anagrams");
    }
}
```

## Expected Output
```
Anagrams
```

## Explanation
Two strings are anagrams if their characters, once sorted, are identical to each other.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
