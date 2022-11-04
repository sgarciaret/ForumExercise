package palindromeTest;

public class Main {
	
	public static void main(String[] args) {
		isPalindrome("hola");
	}
	
	public static boolean isPalindrome(String word) {
		String reverse = "";
		
		for (int i = word.length() - 1; i >= 0; i--) {
			reverse = reverse + word.charAt(i);
			
		}
		
		
		if (word.equalsIgnoreCase(reverse)) {
			return true;
		} else {
			return false;
		}
		
	}
}
