public class Main {
    public static void main(String[] args) throws InterruptedException {
        NumberPrinter t1 = new NumberPrinter("Thread-A");
        NumberPrinter t2 = new NumberPrinter("Thread-B");
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println("Both threads finished.");
    }
}

class NumberPrinter extends Thread {
    String name;
    NumberPrinter(String name) { this.name = name; }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + ": " + i);
        }
    }
}
