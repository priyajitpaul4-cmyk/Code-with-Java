# 15. Number Guessing Game

**Difficulty:** Beginner | **Category:** Loops

## Description
The computer picks a random number and the player tries to guess it with hints.

## Source Code
```java
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Random rand = new Random();
        int target = rand.nextInt(100) + 1;
        Scanner sc = new Scanner(System.in);
        int guess, attempts = 0;
        do {
            System.out.print("Guess a number (1-100): ");
            guess = sc.nextInt();
            attempts++;
            if (guess < target) System.out.println("Too low!");
            else if (guess > target) System.out.println("Too high!");
        } while (guess != target);
        System.out.println("Correct! You guessed it in " + attempts + " attempts.");
    }
}
```

## Expected Output
```
Guess a number (1-100): 50
Too low!
Guess a number (1-100): 75
Correct! You guessed it in 2 attempts.
```

## Explanation
Random.nextInt(100) generates a value from 0-99, so adding 1 gives a range of 1-100. A do-while loop keeps asking until the guess matches.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
