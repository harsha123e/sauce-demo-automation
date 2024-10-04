package com.saucedemo.automation.tests;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.saucedemo.automation.pages.CartPage;
import com.saucedemo.automation.pages.CheckoutPage;
import com.saucedemo.automation.pages.LoginPage;
import com.saucedemo.automation.pages.ProductsPage;

public class CheckoutProcessTests extends BaseTest {
    private WebDriver driver;
    private LoginPage loginPage;
    private ProductsPage productPage;
    private CartPage cartPage;
    private CheckoutPage checkoutPage;

    @BeforeMethod
    public void setup() {
        driver = getDriver();
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
