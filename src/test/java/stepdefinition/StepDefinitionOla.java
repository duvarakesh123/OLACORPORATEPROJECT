package stepdefinition;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.Hooks;

public class StepDefinitionOla

{
	WebDriver driver = Hooks.driver;

	@Given("^User is on OLA page$")
	public void user_is_on_OLA_page() {

		driver.get("https://corporate.olacabs.com/#/contact");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^Enter all the mandatory fields \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\"$")
	public void enter_all_the_mandatory_fields(String name, String email, String country, String companyname,
			String dialingcode, String PhoneNumber, String Department, String NumberofEmployees, String Comments)
			throws InterruptedException {
		System.out.println(name);

		// click on contract us
		driver.findElement(By.id("link-contact")).click();
		Thread.sleep(4000);

		// enter name
		WebElement wb = driver.findElement(By.xpath("//input[@id='email43' and @name='name']"));
		wb.sendKeys(name);
		int i = name.length();
		String val = wb.getAttribute("value");
		int j = val.length();
		if (i != 0 && i <= 100) {
			System.out.println("Actual string : " + name + " ***enter name is VALID less than 100 character **** "+ "Enter string length " + j + " :" + val);
		} else if (i > 100) {
			System.out.println("Actual string : " + name + " ***name is INVALID greater than 100 character **** "+ "Enter string length " + j + " :" + val);
		} else {
			System.out.println(
					"Actual string : " + name + " ### NAME IS NULL### " + "Enter string length " + j + " :" + val);

		}

		// enter email
		driver.findElement(By.xpath("//input[@id='email43' and @name='email']")).sendKeys(email);

		// select value from drop down
		WebElement webselect = driver
				.findElement(By.xpath("/html/body/section[9]/div/div/div/div/div/form[1]/div[2]/select"));
		Select objSelect = new Select(webselect);
		Thread.sleep(2000);
		objSelect.selectByValue(country);

		// select company
		driver.findElement(By.xpath("//*[@id='email43' and @name='corporate_name']")).sendKeys(companyname);

		// select phone number
		driver.findElement(By.xpath("//input[@id='email43' and @name='phone_no']")).sendKeys(PhoneNumber);

		// select department
		WebElement webselect1 = driver
				.findElement(By.xpath("/html/body/section[9]/div/div/div/div/div/form[1]/div[3]/div[3]/select"));
		Select objSelect1 = new Select(webselect1);
		Thread.sleep(2000);
		objSelect1.selectByValue(Department);

		// select Number of Employees
		WebElement webselect2 = driver
				.findElement(By.xpath("/html/body/section[9]/div/div/div/div/div/form[1]/div[3]/div[4]/select"));
		Select objSelect2 = new Select(webselect2);
		Thread.sleep(2000);
		objSelect2.selectByValue(NumberofEmployees);

		// enter comments
		WebElement web = driver.findElement(By.xpath("/html/body/section[9]/div/div/div/div/div/form[1]/textarea"));
		web.sendKeys(Comments);
		

		((JavascriptExecutor) driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");

	}

	@Then("^click on login button$")
	public void click_on_login_button() throws InterruptedException {

		WebElement sub = driver.findElement(By.className("button b-prime signup-btn"));
		sub.click();
		System.out.println("submitted");

	}

}
