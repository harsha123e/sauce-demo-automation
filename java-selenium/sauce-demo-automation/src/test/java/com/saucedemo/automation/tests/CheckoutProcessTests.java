package com.saucedemo.automation.tests;

import com.saucedemo.automation.pages.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class CheckoutProcessTests extends BaseTest {
    private WebDriver driver;
    private LoginPage loginPage;
    private ProductsPage productPage;
    private CartPage cartPage;
    private CheckoutPage checkoutPage;

    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver(getChromeOptions());
        driver.get("https://www.saucedemo.com/");
        loginPage = new LoginPage(driver);
        productPage = new ProductsPage(driver);
        cartPage = new CartPage(driver);
        checkoutPage = new CheckoutPage(driver);
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    }

    @Test
    public void testCompletingPurchaseWithValidInfo() {
        productPage.addProductToCart(0);
        cartPage.openCart();
        cartPage.clickCheckout();
        checkoutPage.enterShippingInformation("John", "Doe", "12345");
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        Assert.assertEquals(checkoutPage.getConfirmationMessage(), "Thank you for your order!");
    }

    @Test
    public void testCheckoutWithInvalidInfo() {
        productPage.addProductToCart(0);
        cartPage.openCart();
        cartPage.clickCheckout();
        checkoutPage.enterShippingInformation("", "", "12345");
        checkoutPage.clickContinue();
        Assert.assertTrue(checkoutPage.isErrorMessageDisplayed());
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
