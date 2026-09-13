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
