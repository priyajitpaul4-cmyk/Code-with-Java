import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> tasks = new ArrayList<>();
        tasks.add("Learn Java Collections");
        tasks.add("Practice 5 coding problems");
        tasks.add("Build a mini project");

        System.out.println("Your To-Do List:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }
}
