import java.util.Scanner;

public class Main {
    static char[][] board = new char[3][3];

    public static void main(String[] args) {
        for (char[] row : board) java.util.Arrays.fill(row, '-');
        Scanner sc = new Scanner(System.in);
        char player = 'X';
        for (int turn = 0; turn < 9; turn++) {
            printBoard();
            System.out.println("Player " + player + ", enter row and col (0-2): ");
            int r = sc.nextInt(), c = sc.nextInt();
            board[r][c] = player;
            if (checkWin(player)) {
                printBoard();
                System.out.println("Player " + player + " wins!");
                return;
            }
            player = (player == 'X') ? 'O' : 'X';
        }
        printBoard();
        System.out.println("It's a draw!");
    }

    static void printBoard() {
        for (char[] row : board) {
            for (char cell : row) System.out.print(cell + " ");
            System.out.println();
        }
    }

    static boolean checkWin(char p) {
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == p && board[i][1] == p && board[i][2] == p) return true;
            if (board[0][i] == p && board[1][i] == p && board[2][i] == p) return true;
        }
        return (board[0][0] == p && board[1][1] == p && board[2][2] == p) ||
               (board[0][2] == p && board[1][1] == p && board[2][0] == p);
    }
}
