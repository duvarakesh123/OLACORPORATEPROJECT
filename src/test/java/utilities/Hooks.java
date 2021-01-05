package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks
{
	public static WebDriver driver;
	
	@Before
	public void beforeScenario()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\DuvarakeshKV\\cucumber_BDD\\IBM2\\bin\\chromedriver.exe");
        System.out.println("run before scenario");
		driver = new ChromeDriver();
	}
	
	
	  @After public static void afterscenario() {
	  System.out.println("run after scenario"); driver.quit(); }
	 

}
