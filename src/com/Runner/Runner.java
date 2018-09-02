package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		features= {"features"},
		glue= {"com.Testcases"},
		monochrome=true,
		tags= {"@custom","@First"},
		format= {"html:test/Summary.html","json:summary.json"}
		)
public class Runner {

}
