package com.saucedemo.automation.tests;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.saucedemo.automation.pages.LoginPage;
import com.saucedemo.automation.pages.ProductDetailsPage;
import com.saucedemo.automation.pages.ProductsPage;

public class ProductDetailsVerificationTests extends BaseTest {

    private WebDriver driver;
    private LoginPage loginPage;
    private ProductsPage productPage;
    private ProductDetailsPage productDetailsPage;

    @BeforeMethod
    public void setup() {
        driver = getDriver();
        driver.get("https://www.saucedemo.com/");
        loginPage = new LoginPage(driver);
        productPage = new ProductsPage(driver);
        productDetailsPage = new ProductDetailsPage(driver);
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    }

    @Test
    public void testProductDetailsVerification() {
        productPage.selectProduct(0);

        String expectedProductName = "Sauce Labs Backpack";
        String expectedProductPrice = "$29.99";
        String expectedProductDescription = "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";

        Assert.assertEquals(productDetailsPage.getProductName(), expectedProductName, "Product name should match.");
        Assert.assertEquals(productDetailsPage.getProductPrice(), expectedProductPrice, "Product price should match.");
        Assert.assertTrue(productDetailsPage.getProductDescription().contains(expectedProductDescription), "Product description should match.");
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
