package com.saucedemo.automation.tests;

import org.testng.TestNG;

import java.nio.file.Paths;
import java.util.Collections;

public class TestSuiteRunner {
    public static void main(String[] args) {
        TestNG testng = new TestNG();
        
        String xmlPath = Paths.get("src/test/resources/sauce-demo-full-test-suite.xml").toAbsolutePath().toString();
        testng.setTestSuites(Collections.singletonList(xmlPath));
        
        testng.run();
    }
}
