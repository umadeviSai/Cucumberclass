package com.Testcases;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import com.GenericFunctions.GenericFunctions;
import com.ScreenFunctions.Registration;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TC_01_Registeration_111 extends GenericFunctions {
	
	@Given("^As a user I want to launch \"([^\"]*)\" browser give url and maximized$")
	public void user_on_the_home_page(String browser,DataTable testdata)  {
		List<List<String>> data=testdata.raw();
		String url=data.get(0).get(0);
		if (launchBrowser(browser,url))
		System.out.println("Browser Launched successfully");
		else 
		System.out.println("Browser is not launched successfully");
	   
	}

	@When("^click on Register link$")
	public void clicked_on_Register_link()  {
		Registration reg=PageFactory.initElements(driver, Registration.class);
		reg.ClickRegistrationLink();
	
	}
	
	
	

}
