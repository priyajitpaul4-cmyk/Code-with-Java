import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double rate = 83.20;
        System.out.print("Enter amount in USD: ");
        double usd = sc.nextDouble();
        double inr = usd * rate;
        System.out.printf("$%.2f = ₹%.2f%n", usd, inr);
    }
}
