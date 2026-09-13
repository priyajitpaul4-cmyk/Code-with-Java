# Problem 10: Group Words by Length using Streams

**Difficulty:** Hard | **Topic:** Streams

## Statement
Given a list of words, group them by their length using the Stream API.

## Hint
Use Collectors.groupingBy with String::length as the classifier.

## Solution
```java
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> words = List.of("java", "code", "stream", "oop", "loop");
        Map<Integer, List<String>> grouped = words.stream()
                .collect(Collectors.groupingBy(String::length));
        System.out.println(grouped);
    }
}
```

## Expected Output
```
{3=[oop], 4=[java, code, loop], 6=[stream]}
```
