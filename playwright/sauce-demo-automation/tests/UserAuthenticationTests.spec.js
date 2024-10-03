const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test.describe('User Authentication Tests', () => {
    let loginPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test('Verify login with valid credentials', async () => {
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLogin();
        expect(await homePage.getPageTitle()).toBe('Products');
    });

    test('Verify login with invalid credentials', async () => {
        await loginPage.enterUsername('invalid_user');
        await loginPage.enterPassword('wrong_password');
        await loginPage.clickLogin();
        expect(await loginPage.isErrorMessageDisplayed('Epic sadface:')).toBeTruthy();
    });

    test('Verify logout functionality', async () => {
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLogin();
        await homePage.clickMenuButton();
        await homePage.clickLogout();
        expect(await loginPage.isLoginButtonDisplayed()).toBeTruthy();
    });
});
