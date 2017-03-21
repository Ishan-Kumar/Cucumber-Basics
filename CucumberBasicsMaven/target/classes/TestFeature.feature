Feature: this is from first feature file
	
	#Using Background scripts will help to identify redundent steps and keeping it only once 
	#This will be executed everytime before any scenario executes
	Background:
		Given This will run before every scenario
	
	
	@Login
  Scenario: This is a Dummy Scenario
    Given This is my "first" dummy step
    When This is my "second" dummy step
    Then This is my "third" dummy step
	
	#Intentationally Fail this scenario
	@TitleVerification
  Scenario: This is a Dummy Scenario
    Given This is my "first" dummy step
    When This is my "second" dummy step
    Then This is my third2 dummy step
