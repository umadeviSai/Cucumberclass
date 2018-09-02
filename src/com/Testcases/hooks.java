package com.Testcases;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooks  {
	@Before
	public void beforehooks()
	{
		System.out.println("Before Hooks");
	}
	@After
	public void afterhooks()
	{
		System.out.println("After hooks");
	}
	
	

}
