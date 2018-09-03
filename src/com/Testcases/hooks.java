package com.Testcases;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.GenericFunctions.GenericFunctions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks extends GenericFunctions  {
	@Before
	public void beforehooks()
	{
		System.out.println("Before Hooks");
	}
	@After
	public void afterhooks(Scenario scenario)
	{  
		System.out.println("After hooks");
		takeScreenshot(scenario);
		
	}
	private void takeScreenshot(Scenario scenario) {
		
		System.out.println("INSIDE THE takeScreen shot");
		
		if(scenario.isFailed())		{
			try
			{
				scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES),"image/png");
			}catch(Exception e)
			{
				System.out.println(e.getMessage());
			}
			}
	}
}

