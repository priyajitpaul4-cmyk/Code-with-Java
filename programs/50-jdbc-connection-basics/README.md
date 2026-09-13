# 50. JDBC Connection Basics

**Difficulty:** Advanced | **Category:** JDBC

## Description
Shows the standard pattern for connecting to a MySQL database using JDBC.

## Source Code
```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";
        String password = "password";

        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT name, marks FROM students");
            while (rs.next()) {
                System.out.println(rs.getString("name") + " - " + rs.getInt("marks"));
            }
        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}
```

## Expected Output
```
Aarav - 88
Diya - 91
(Depends on the actual database contents)
```

## Explanation
DriverManager.getConnection() opens a connection to the database, and a Statement runs SQL queries against it, returning rows in a ResultSet.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
