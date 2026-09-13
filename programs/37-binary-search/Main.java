public class Main {
    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 45};
        int target = 23;
        int low = 0, high = arr.length - 1, result = -1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == target) { result = mid; break; }
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        System.out.println(result != -1 ? "Found at index " + result : "Not found");
    }
}
