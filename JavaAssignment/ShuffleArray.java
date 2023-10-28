import java.util.Scanner;
import java.util.Random;

public class ArrayShuffle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt(); 
        int[] arr = new int[size];
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }
        shuffleArray(arr);
        System.out.println("Shuffled Array: ");
        for (int element : arr) {
            System.out.print(element + " ");
        }
        scanner.close();
    }
    public static void shuffleArray(int[] arr) {
        int n = arr.length;
        Random rand = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
