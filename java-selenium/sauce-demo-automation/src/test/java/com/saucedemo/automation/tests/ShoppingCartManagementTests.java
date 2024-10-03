package com.saucedemo.automation.tests;

import com.saucedemo.automation.pages.CartPage;
import com.saucedemo.automation.pages.LoginPage;
import com.saucedemo.automation.pages.ProductsPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class ShoppingCartManagementTests extends BaseTest {
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
    public void testViewingCartWithMultipleProducts() {
        productPage.addProductToCart(0);
        productPage.addProductToCart(1);
        productPage.addProductToCart(2);

        cartPage.openCart();

        Assert.assertEquals(cartPage.getCartItemsCount(), 3, "Cart should have 3 products.");
    }

    @Test
    public void testClearingCart() {
        productPage.addProductToCart(0);
        productPage.addProductToCart(1);
        productPage.addProductToCart(2);

        cartPage.openCart();

        cartPage.removeProductFromCart(0);
        cartPage.removeProductFromCart(0);
        cartPage.removeProductFromCart(0);

        Assert.assertEquals(cartPage.getCartItemsCount(), 0, "Cart should be empty.");
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }
}
