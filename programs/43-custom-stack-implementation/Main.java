public class Main {
    static int[] stack = new int[100];
    static int top = -1;

    public static void push(int value) { stack[++top] = value; }
    public static int pop() { return stack[top--]; }
    public static int peek() { return stack[top]; }

    public static void main(String[] args) {
        push(10);
        push(20);
        push(30);
        System.out.println("Top element: " + peek());
        System.out.println("Popped: " + pop());
        System.out.println("New top: " + peek());
    }
}
