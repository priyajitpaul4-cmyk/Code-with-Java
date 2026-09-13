# 34. File Handling Notes Manager

**Difficulty:** Intermediate | **Category:** File Handling

## Description
Writes notes to a text file and reads them back using Java I/O.

## Source Code
```java
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
```

## Expected Output
```
Java is platform independent.
Streams simplify collection processing.
```

## Explanation
try-with-resources automatically closes the writer and reader. Notes are written line by line and then read back.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
