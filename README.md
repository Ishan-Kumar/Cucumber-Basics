# Cucumber-Basics
This is a basic framework implementation of Cucumber with Maven and Junit.
Feature files uses dummy tests which is connected with the step defination file written in java. the sole purpose of this is to make user understand how a cucumber framework functions.
	- Maven controls all the dependencies and can also run 'Maven test' as a whole
	- All maven dependecies are added in 'pom.xml' of this project
	- Junit controls runner class execution and gives power which tests to execute from which feature file
	- Junit also helps in reporting formats(Html/ Jason)


# This Project contains:
	- All Feature files(Test steps) in "src/resource"
	- All Step Definations  in "com/cucumber/CucumberBasicsMaven/"
	- All RunnerClasses in "com/cucumber/CucumberBasicsMaven/"

# Cucumber Points to Note: 
	- Cucumber can have multiple scenarios in a Feature file which can be run individually from that feature file
	- To run specific scenarios from feature files we use tags(@<TagName>) in runner classes which can be run 
	  as Junit tests
