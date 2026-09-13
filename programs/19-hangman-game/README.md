# 19. Hangman Game

**Difficulty:** Intermediate | **Category:** Games

## Description
A console word-guessing game where the player has limited wrong guesses.

## Source Code
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String word = "java";
        char[] guessed = new char[word.length()];
        java.util.Arrays.fill(guessed, '_');
        int attempts = 6;
        Scanner sc = new Scanner(System.in);
        while (attempts > 0 && new String(guessed).contains("_")) {
            System.out.println("Word: " + new String(guessed) + "  Attempts left: " + attempts);
            System.out.print("Guess a letter: ");
            char letter = sc.next().charAt(0);
            boolean found = false;
            for (int i = 0; i < word.length(); i++) {
                if (word.charAt(i) == letter) { guessed[i] = letter; found = true; }
            }
            if (!found) attempts--;
        }
        System.out.println(attempts > 0 ? "You won! Word: " + word : "You lost! Word was: " + word);
    }
}
```

## Expected Output
```
Word: ____  Attempts left: 6
Guess a letter: j
Word: j___  Attempts left: 6
```

## Explanation
Correctly guessed letters are revealed in a char array while wrong guesses reduce the number of attempts left.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
