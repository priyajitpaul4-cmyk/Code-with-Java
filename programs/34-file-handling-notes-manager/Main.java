import java.io.*;

public class Main {
    public static void main(String[] args) {
        String fileName = "notes.txt";
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write("Java is platform independent.");
            writer.newLine();
            writer.write("Streams simplify collection processing.");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
