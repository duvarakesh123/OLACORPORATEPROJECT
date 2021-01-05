package testrunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/features"
,glue= {"stepdefination","utilities"},
dryRun=false,
monochrome= true,
//tags= {"@smoke","@regression"},//and condition
//tags= {"@smoke,@smoke1"},//or condition
tags= {"~@smoke1"},//skip condition
plugin = { "pretty", "html:target/cucumber-pretty"})

public class Testrunner 
{

	

}
