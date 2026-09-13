import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> inventory = new HashMap<>();
        inventory.put("Laptop", 10);
        inventory.put("Mouse", 50);

        sell(inventory, "Laptop", 3);
        sell(inventory, "Mouse", 60);

        System.out.println("Final Inventory: " + inventory);
    }

    static void sell(Map<String, Integer> inventory, String item, int qty) {
        int stock = inventory.getOrDefault(item, 0);
        if (qty > stock) {
            System.out.println("Not enough stock for " + item);
        } else {
            inventory.put(item, stock - qty);
            System.out.println("Sold " + qty + " " + item + "(s)");
        }
    }
}
