# Automated Testing Framework Setup with Selenium and TestNG

This document outlines the steps to set up an automated testing framework using Selenium and TestNG.

## 1. **Plan Test Cases with Steps**
- Clearly outline the test scenarios, expected outcomes, and detailed steps for each test case. This will help maintain clarity and direction while writing the tests.
- [Test Plan](../README.md)

## 2. **Install Java and Maven**
- Ensure you have the correct versions of Java and Maven installed. Verify the installations using the following commands:
  ```bash
  java -version
  mvn -version
  ```

## 3. **Create a Maven Project Using Quickstart Artifact**
- Use the following command to create a basic project structure:
  ```bash
  mvn archetype:generate -DgroupId=com.saucedemo.automation -DartifactId=sauce-demo-automation -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
  ```

## 4. **Add Selenium, TestNG, and WebDriver Dependencies**
- Update your `pom.xml` file with the necessary dependencies. Here’s a sample snippet:
  ```xml
  <dependencies>
      <dependency>
          <groupId>org.seleniumhq.selenium</groupId>
          <artifactId>selenium-java</artifactId>
          <version>YOUR_VERSION_HERE</version>
      </dependency>
      <dependency>
          <groupId>org.testng</groupId>
          <artifactId>testng</artifactId>
          <version>YOUR_VERSION_HERE</version>
          <scope>test</scope>
      </dependency>
      <dependency>
          <groupId>io.github.bonigarcia</groupId>
          <artifactId>webdrivermanager</artifactId>
          <version>YOUR_VERSION_HERE</version>
      </dependency>
  </dependencies>
  ```

## 5. **Write the Page Object Model (POM) Files**
- Create classes for each page in your application. Define methods that represent actions you can perform on those pages to enhance code reusability and maintainability.

## 6. **Write the Test Cases**
- Implement the actual test cases using TestNG annotations like `@Test`, `@BeforeMethod`, `@AfterMethod`, etc. Use the methods defined in your POM classes to interact with the web application.

## 7. **Refactor to Include Configurations for Headless Execution and Multiple Browsers**
This step creates a base class for managing WebDriver instantiation and configuration, enabling dynamic browser selection (e.g., Chrome or Firefox) via a system property. It also allows toggling headless mode, providing flexibility in test execution with or without a graphical interface. This refactor enhances configurability and efficiency across environments. Note: Only headless functionality is implemented in this project.

## 8. **Add TestNG XML for Parallel Execution**
- Create a `testng.xml` file in your project’s root directory to define test groups and set up parallel execution. Here’s a simple example:
  ```xml
  <suite name="Suite" parallel="methods" thread-count="5">
      <test name="Test1">
          <classes>
              <class name="com.saucedemo.automation.TestClass1"/>
          </classes>
      </test>
      <test name="Test2">
          <classes>
              <class name="com.saucedemo.automation.TestClass2"/>
          </classes>
      </test>
  </suite>
  ```

## 9. **Update POM for Parallel Execution**
- Ensure your `pom.xml` is set up to recognize TestNG and can run your test suite correctly:
  ```xml
  <build>
      <plugins>
          <plugin>
              <groupId>org.apache.maven.plugins</groupId>
              <artifactId>maven-surefire-plugin</artifactId>
              <version>YOUR_VERSION_HERE</version>
              <configuration>
                  <suiteXmlFiles>
                      <suiteXmlFile>testng.xml</suiteXmlFile>
                  </suiteXmlFiles>
                  <parallel>methods</parallel>
                  <threadCount>5</threadCount>
              </configuration>
          </plugin>
      </plugins>
  </build>
  ```

## Additional Tips:
- **Continuous Integration**: Consider integrating your test suite with a CI/CD tool like Jenkins, GitHub Actions, or GitLab CI to automate test runs on code changes.
- **Reporting**: Use a reporting tool like ExtentReports or Allure for better test result visualization.

Feel free to adjust any section according to your project specifics or personal preferences!
