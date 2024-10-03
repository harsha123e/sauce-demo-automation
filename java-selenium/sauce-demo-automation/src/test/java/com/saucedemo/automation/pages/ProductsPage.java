package com.saucedemo.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import java.util.List;

public class ProductsPage {
    private WebDriver driver;

    @FindBy(css = ".inventory_item_name")
    private List<WebElement> products;

    @FindBy(css = ".btn_inventory")
    private List<WebElement> addToCartButtons;

    @FindBy(css = ".shopping_cart_badge")
    private WebElement cartBadge;

    public ProductsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void selectProduct(int index) {
        if (index >= 0 && index < products.size()) {
            products.get(index).click();
        } else {
            throw new IndexOutOfBoundsException("Invalid product index: " + index);
        }
    }

    public void addProductToCart(int index) {
        if (index >= 0 && index < addToCartButtons.size()) {
            addToCartButtons.get(index).click();
        } else {
            throw new IndexOutOfBoundsException("Invalid product index: " + index);
        }
    }

    public String getCartBadgeCount() {
        return cartBadge.getText();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
}
