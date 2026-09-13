import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        boolean isPrime = n > 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) { isPrime = false; break; }
        }
        System.out.println(n + (isPrime ? " is Prime" : " is not Prime"));
    }
}
