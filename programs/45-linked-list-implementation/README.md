# 45. Linked List Implementation

**Difficulty:** Advanced | **Category:** Data Structures

## Description
Builds a simple singly linked list from scratch and traverses it.

## Source Code
```java
class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; }
}

public class Main {
    public static void main(String[] args) {
        Node head = new Node(10);
        head.next = new Node(20);
        head.next.next = new Node(30);

        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}
```

## Expected Output
```
10 -> 20 -> 30 -> null
```

## Explanation
Each Node holds a value and a reference to the next node. Traversal follows the next references until reaching null.

---
Part of [Code with Java](../../README.md) — 50+ Java Programs collection.
