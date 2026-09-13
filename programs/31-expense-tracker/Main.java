import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Double> expenses = new LinkedHashMap<>();
        expenses.put("Food", 1200.0);
        expenses.put("Travel", 800.0);
        expenses.put("Books", 500.0);

        double total = 0;
        for (Map.Entry<String, Double> entry : expenses.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
            total += entry.getValue();
        }
        System.out.println("Total expenses: " + total);
    }
}
