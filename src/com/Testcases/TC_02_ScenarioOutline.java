package com.Testcases;

import java.util.List;

import com.GenericFunctions.GenericFunctions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class TC_02_ScenarioOutline extends GenericFunctions {
	@Given("^launch (.*) with the (.*)$")

	public void launch_stepdef(String browser,String url)
	{
		  System.out.println("Browser and url are "+browser +url);
			if (launchBrowser(browser,url))
			System.out.println("Browser Launched successfully");
			else 
			System.out.println("Browser is not launched successfully");
		   
		}
		
	}


