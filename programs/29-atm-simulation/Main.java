import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int correctPin = 1234;
        double balance = 5000;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter PIN: ");
        int pin = sc.nextInt();
        if (pin != correctPin) {
            System.out.println("Incorrect PIN.");
            return;
        }
        System.out.print("Enter amount to withdraw: ");
        double amount = sc.nextDouble();
        if (amount > balance) {
            System.out.println("Insufficient funds.");
        } else {
            balance -= amount;
            System.out.println("Withdrawal successful. Remaining balance: " + balance);
        }
    }
}
