# 41. Word Frequency Counter

**Difficulty:** Intermediate | **Category:** Strings

## Description
Counts how many times each word appears in a sentence.

## Source Code
```java
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String text = "java is simple java is powerful java is popular";
        Map<String, Integer> freq = new HashMap<>();
        for (String word : text.split(" ")) {
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        for (Map.Entry<String, Integer> entry : freq.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

## Expected Output
```
java: 3
is: 3
simple: 1
powerful: 1
popular: 1
```

## Explanation
The sentence is split into words, and a HashMap keeps a running count for every distinct word.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
