import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        String text = "java is simple java is powerful java is popular";
        Map<String, Integer> freq = new HashMap<>();
        for (String word : text.split(" ")) {
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        }
        for (Map.Entry<String, Integer> entry : freq.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
