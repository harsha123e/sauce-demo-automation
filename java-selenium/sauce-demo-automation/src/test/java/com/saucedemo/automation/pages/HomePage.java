package com.saucedemo.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    private WebDriver driver;

    @FindBy(css = ".title")
    private WebElement pageTitle;

    @FindBy(id = "react-burger-menu-btn")
    private WebElement menuButton;

    @FindBy(id = "logout_sidebar_link")
    private WebElement logoutLink;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public String getPageTitle() {
        return pageTitle.getText();
    }

    public WebElement getMenuButton() {
        return menuButton;
    }

    public WebElement getLogoutLink() {
        return logoutLink;
    }

    public void clickMenuButton() {
        menuButton.click();
    }

    public void clickLogout() {
        logoutLink.click();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }
}
