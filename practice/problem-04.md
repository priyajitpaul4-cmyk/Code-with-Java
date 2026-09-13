# Problem 4: Check Balanced Parentheses

**Difficulty:** Medium | **Topic:** Data Structures

## Statement
Write a program to check if a string of brackets is balanced, using a stack.

## Hint
Push opening brackets onto a stack; pop and compare when you see a closing bracket.

## Solution
```java
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        String expr = "{[()()]}";
        Stack<Character> stack = new Stack<>();
        boolean balanced = true;
        for (char c : expr.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') stack.push(c);
            else {
                if (stack.isEmpty()) { balanced = false; break; }
                char top = stack.pop();
                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {
                    balanced = false; break;
                }
            }
        }
        System.out.println(balanced && stack.isEmpty() ? "Balanced" : "Not Balanced");
    }
}
```

## Expected Output
```
Balanced
```
