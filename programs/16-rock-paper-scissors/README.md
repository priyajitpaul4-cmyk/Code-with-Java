# 16. Rock Paper Scissors

**Difficulty:** Beginner | **Category:** Games

## Description
A simple console game of Rock, Paper, Scissors against the computer.

## Source Code
```java
import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] choices = {"Rock", "Paper", "Scissors"};
        Random rand = new Random();
        Scanner sc = new Scanner(System.in);
        System.out.print("Choose Rock, Paper or Scissors: ");
        String player = sc.nextLine();
        String computer = choices[rand.nextInt(3)];
        System.out.println("Computer chose: " + computer);
        if (player.equalsIgnoreCase(computer)) {
            System.out.println("It's a tie!");
        } else if (
            (player.equalsIgnoreCase("Rock") && computer.equals("Scissors")) ||
            (player.equalsIgnoreCase("Paper") && computer.equals("Rock")) ||
            (player.equalsIgnoreCase("Scissors") && computer.equals("Paper"))
        ) {
            System.out.println("You win!");
        } else {
            System.out.println("Computer wins!");
        }
    }
}
```

## Expected Output
```
Choose Rock, Paper or Scissors: Rock
Computer chose: Scissors
You win!
```

## Explanation
The computer's choice is picked randomly from an array. The winner is decided by comparing the two choices against the classic rules.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
