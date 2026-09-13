import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Book> catalog = new HashMap<>();
        catalog.put("101", new Book("Effective Java"));
        catalog.put("102", new Book("Clean Code"));

        issueBook(catalog, "101");
        issueBook(catalog, "101");
        returnBook(catalog, "101");
        issueBook(catalog, "101");
    }

    static void issueBook(Map<String, Book> catalog, String id) {
        Book book = catalog.get(id);
        if (book.issued) {
            System.out.println(book.title + " is already issued.");
        } else {
            book.issued = true;
            System.out.println(book.title + " issued successfully.");
        }
    }

    static void returnBook(Map<String, Book> catalog, String id) {
        catalog.get(id).issued = false;
        System.out.println(catalog.get(id).title + " returned successfully.");
    }
}

class Book {
    String title;
    boolean issued;

    Book(String title) { this.title = title; this.issued = false; }
}
