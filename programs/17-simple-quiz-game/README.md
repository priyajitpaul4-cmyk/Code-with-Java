# 17. Simple Quiz Game

**Difficulty:** Beginner | **Category:** Games

## Description
Asks a set of multiple-choice questions and keeps score.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] questions = {
            "Capital of France?", "Java was released in?", "2 + 2 * 2 = ?"
        };
        String[] answers = {"paris", "1995", "6"};
        Scanner sc = new Scanner(System.in);
        int score = 0;
        for (int i = 0; i < questions.length; i++) {
            System.out.println(questions[i]);
            String userAnswer = sc.nextLine().trim().toLowerCase();
            if (userAnswer.equals(answers[i])) {
                System.out.println("Correct!");
                score++;
            } else {
                System.out.println("Wrong! Correct answer: " + answers[i]);
            }
        }
        System.out.println("Your score: " + score + "/" + questions.length);
    }
}
```

## Expected Output
```
Capital of France?
paris
Correct!
...
Your score: 3/3
```

## Explanation
Questions and correct answers are stored in parallel arrays. Each user answer is normalized and compared to the expected answer.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
