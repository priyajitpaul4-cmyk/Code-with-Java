import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter start and end: ");
        int start = sc.nextInt(), end = sc.nextInt();
        for (int n = start; n <= end; n++) {
            boolean isPrime = n > 1;
            for (int i = 2; i * i <= n; i++) {
                if (n % i == 0) { isPrime = false; break; }
            }
            if (isPrime) System.out.print(n + " ");
        }
    }
}
