import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount account = new BankAccount(1000);
        System.out.println("Starting balance: " + account.getBalance());
        account.deposit(500);
        System.out.println("After deposit: " + account.getBalance());
        account.withdraw(2000);
        account.withdraw(300);
        System.out.println("Final balance: " + account.getBalance());
    }
}

class BankAccount {
    private double balance;

    BankAccount(double initial) { balance = initial; }

    void deposit(double amount) { balance += amount; }

    void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            balance -= amount;
        }
    }

    double getBalance() { return balance; }
}
