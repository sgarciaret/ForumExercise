package testFrontend;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LoginTest {
	WebDriver driver;
	
	@BeforeClass
	void setUpClass() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sergio.GarciaR\\Downloads\\chromedriver_1.exe");
	}
	
	@AfterClass
	void tearDownClass() {
		System.clearProperty("webdriver.chrome.driver");
	}
	
	@BeforeMethod
	void setUpMethod() {

        driver = new ChromeDriver();
        
        driver.get("http://localhost:3000/");
        
	}
	
	@AfterMethod
	void tearDownMethod() {
		driver.quit();
	}
	
	@Test
	void headerText() {
		WebElement header = driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/h1[1]"));
		
		String expected = "Forum";
		
		Assert.assertEquals(header.getText(), expected);
	}
	
	@Test
	void registerLink() {
		WebElement registerLink = driver.findElement(By.xpath("//a[contains(text(),'Register')]"));
		registerLink.click();
		
		String registerURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/signup";
		
		Assert.assertEquals(registerURL, expected);
	}
	
	@Test
	void withoutRegisterLink() {
		WebElement withoutRegisterLink = driver.findElement(By.xpath("//a[contains(text(),'Enter without register')]"));
		withoutRegisterLink.click();
		
		String homeURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/home";
		
		Assert.assertEquals(homeURL, expected);
	}
	
	@Test
	void noLoginWithoutCredentials() {
		WebElement loginButton = driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[2]/form[1]/div[3]/input[1]"));
		loginButton.click();
		
		String loginURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/";
		
		Assert.assertEquals(loginURL, expected);
	}
}
