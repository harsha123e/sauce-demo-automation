package com.saucedemo.automation.tests;

import org.openqa.selenium.chrome.ChromeOptions;

public class BaseTest {

    protected ChromeOptions getChromeOptions() {
        ChromeOptions options = new ChromeOptions();

        if (System.getProperty("headless") != null && System.getProperty("headless").equalsIgnoreCase("true")) {
            options.addArguments("--headless");
            options.addArguments("--disable-gpu");
            options.addArguments("--window-size=1920,1200");
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
            options.addArguments("--remote-allow-origins=*");
        }

        return options;
    }
}
