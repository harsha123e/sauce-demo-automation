package com.saucedemo.automation.tests;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.saucedemo.automation.pages.HomePage;
import com.saucedemo.automation.pages.LoginPage;

public class UserAuthenticationTests extends BaseTest {
    private WebDriver driver;
    private LoginPage loginPage;
    private HomePage homePage;
    private WebDriverWait wait;

    @BeforeMethod
    public void setup() {
        driver = getDriver();
        driver.get("https://www.saucedemo.com/");
        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    }

    @Test
    public void verifyLoginWithValidCredentials() {
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
        Assert.assertEquals(homePage.getPageTitle(), "Products");
    }

    @Test
    public void verifyLoginWithInvalidCredentials() {
        loginPage.enterUsername("invalid_user");
        loginPage.enterPassword("wrong_password");
        loginPage.clickLogin();
        Assert.assertTrue(loginPage.isErrorMessageDisplayed("Epic sadface:"));
    }

    @Test
    public void verifyLogoutFunctionality() {
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
        wait.until(ExpectedConditions.elementToBeClickable(homePage.getMenuButton()));
        homePage.clickMenuButton();
        wait.until(ExpectedConditions.elementToBeClickable(homePage.getLogoutLink()));
        homePage.clickLogout();
        Assert.assertTrue(loginPage.isLoginButtonDisplayed());
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
