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
