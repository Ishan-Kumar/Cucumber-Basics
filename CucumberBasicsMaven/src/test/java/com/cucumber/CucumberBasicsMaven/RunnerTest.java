package com.cucumber.CucumberBasicsMaven;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
	features = {"src/test/resource/"},
	//This will generates results in both for html and in jason format format
	plugin = {"pretty","html:target/html/","json:target/json/output.json"}, 
	
	//Mention tags of Tests you wanted to run from resource suit
	tags = {"@Webpage2, @TitleVerification"}
)

public class RunnerTest {

}
