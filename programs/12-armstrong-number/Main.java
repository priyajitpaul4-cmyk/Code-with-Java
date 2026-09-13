import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int digits = String.valueOf(n).length();
        int sum = 0, temp = n;
        while (temp != 0) {
            int d = temp % 10;
            sum += Math.pow(d, digits);
            temp /= 10;
        }
        System.out.println(n + (sum == n ? " is an Armstrong Number" : " is not an Armstrong Number"));
    }
}
