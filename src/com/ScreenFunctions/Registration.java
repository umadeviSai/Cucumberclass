package com.ScreenFunctions;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Registration {
	@FindBy(how=How.XPATH,using ="//*[@href='/register']")
	public static WebElement lnkRegistration;
	
	public static boolean ClickRegistrationLink()
	{  boolean status=true;
	   try {
		   lnkRegistration.click();
	   }catch (Exception e)
	   {
		   status=false;
		   System.out.println(e.getMessage());
	   }
	   return status;
	}
}
