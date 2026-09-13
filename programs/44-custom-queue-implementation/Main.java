import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.add("Task 1");
        queue.add("Task 2");
        queue.add("Task 3");

        System.out.println("Processing: " + queue.poll());
        System.out.println("Processing: " + queue.poll());
        System.out.println("Remaining in queue: " + queue);
    }
}
