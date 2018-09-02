Feature: This feature is desined to validate multiple sets of data.
@custom
Scenario Outline: scenario description
	Given launch <browser> with the <url>
		
		Then check <title> is the output
		
		Examples:
		| browser | url | title |
		| firefox | https://www.google.com/?gws_rd=ssl| nopCommerce |
		| firefix | https://in.yahoo.com/?p=us| nopCommerce |
	