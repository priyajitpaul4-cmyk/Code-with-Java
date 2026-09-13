import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter distance in km: ");
        double km = sc.nextDouble();
        double miles = km * 0.621371;
        System.out.printf("%.2f km = %.2f miles%n", km, miles);
    }
}
