package com.cucumber.CucumberBasicsMaven;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class StepsTest {
		
	@Given("^This is my \"([^\"]*)\" dummy step$")
	public void this_is_my_dummy_step(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.out.println("Executed the "+ arg1 +"  given step");
	}

	@Then("^This is my third(\\d+) dummy step$")
	public void this_is_my_third_dummy_step(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   Assert.assertTrue(false); 
	}

}
