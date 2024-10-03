package com.saucedemo.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage {
    private WebDriver driver;

    @FindBy(css = ".cart_item")
    private List<WebElement> cartItems;

    @FindBy(id = "checkout")
    private WebElement checkoutButton;

    @FindBy(css = ".cart_button")
    private List<WebElement> removeButtons;

    @FindBy(id = "shopping_cart_container")
    private WebElement cartContainer;

    public CartPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void openCart() {
        cartContainer.click();
    }

    public void removeProductFromCart(int index) {
        if (index >= 0 && index < removeButtons.size()) {
            removeButtons.get(index).click();
        } else {
            throw new IndexOutOfBoundsException("Invalid product index: " + index);
        }
    }

    public int getCartItemsCount() {
        return cartItems.size();
    }

    public void clickCheckout() {
        checkoutButton.click();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
}
