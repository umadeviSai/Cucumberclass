package com.GenericFunctions;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;

public class GenericFunctions {
	public static WebDriver driver;	
	public static boolean launchBrowser(String browser,String url)
	{
		
		boolean methodstatus=true;
		try
		{
			
		switch(browser)
		{
		case "firefox":
			{driver=new FirefoxDriver();
			driver.manage().window().maximize();
			driver.get(url);
			break;}
		case "chrome":
			System.out.println("Browser name is " +browser);
			break;
		case "default":
			System.out.println("Browser name is " +browser);
			break;		
		
		}
			
		}catch(Exception e)
		{
			methodstatus=false;
			System.out.println(e.getMessage());
		}		
		return methodstatus;				
	}
	

}
