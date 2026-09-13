import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm:ss");
        for (int i = 0; i < 5; i++) {
            System.out.println(formatter.format(new Date()));
            Thread.sleep(1000);
        }
    }
}
