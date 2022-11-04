package palindromeTest;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class MainTest1 {

	@Test
	public void testPalindrom() {
		
		
		boolean actual = Main.isPalindrome("holoh");
		
		assertTrue(actual);
		
		
	}

}
