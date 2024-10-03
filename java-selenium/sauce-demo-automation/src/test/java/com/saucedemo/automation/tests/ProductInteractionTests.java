package com.saucedemo.automation.tests;

import com.saucedemo.automation.pages.*;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ProductInteractionTests extends BaseTest {
    private WebDriver driver;
    private LoginPage loginPage;
    private ProductsPage productPage;
    private CartPage cartPage;

    @BeforeMethod
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver(getChromeOptions());
        driver.get("https://www.saucedemo.com/");
        loginPage = new LoginPage(driver);
        productPage = new ProductsPage(driver);
        cartPage = new CartPage(driver);
        loginPage.enterUsername("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    }

    @Test
    public void testProductSelectionAndAdditionToCart() {
        productPage.addProductToCart(0);
        Assert.assertEquals(productPage.getCartBadgeCount(), "1");
    }

    @Test
    public void testAddingMultipleProductsToCart() {
        productPage.addProductToCart(0);
        productPage.addProductToCart(1);
        Assert.assertEquals(productPage.getCartBadgeCount(), "2");
    }

    @Test
    public void testRemovingProductFromCart() {
        productPage.addProductToCart(0);
        cartPage.openCart();
        cartPage.removeProductFromCart(0);
        Assert.assertEquals(cartPage.getCartItemsCount(), 0);
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
