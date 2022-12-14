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

public class ThreadTest {
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
        
        driver.get("http://localhost:3000/thread");
        
	}
	
	@AfterMethod
	void tearDownMethod() {
		driver.quit();
	}
	
	@Test
	void homeLinl() {
		WebElement homeLink = driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/a[1]/h1[1]"));
		homeLink.click();
		
		String homeURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/home";
		
		Assert.assertEquals(homeURL, expected);
	}
	
	@Test
	void logoutButton() {
		WebElement logoutLink = driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[3]/a[1]/button[1]"));
		logoutLink.click();
		
		String loginURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/";
		
		Assert.assertEquals(loginURL, expected);
	}
	
	@Test
	void newPostButton() {
		WebElement newPostLink = driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[2]/a[1]/button[1]"));
		newPostLink.click();
		
		String newPostURL = driver.getCurrentUrl();
		
		String expected = "http://localhost:3000/createPostT";
		
		Assert.assertEquals(newPostURL, expected);
	}

}
