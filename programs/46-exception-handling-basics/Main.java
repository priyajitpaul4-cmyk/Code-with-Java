public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        try {
            System.out.println(numbers[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Invalid array index - " + e.getMessage());
        } finally {
            System.out.println("Execution finished.");
        }
    }
}
