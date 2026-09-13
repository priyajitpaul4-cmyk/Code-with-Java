import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int original = n, reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        System.out.println(original + (original == reversed ? " is a Palindrome" : " is not a Palindrome"));
    }
}
