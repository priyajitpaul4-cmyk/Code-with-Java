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
