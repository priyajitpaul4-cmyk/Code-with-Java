import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Map<String, String> contacts = new HashMap<>();
        contacts.put("Aarav", "9876543210");
        contacts.put("Diya", "9123456780");
        Scanner sc = new Scanner(System.in);
        System.out.print("Search contact name: ");
        String name = sc.nextLine();
        if (contacts.containsKey(name)) {
            System.out.println(name + "'s number: " + contacts.get(name));
        } else {
            System.out.println("Contact not found.");
        }
    }
}
