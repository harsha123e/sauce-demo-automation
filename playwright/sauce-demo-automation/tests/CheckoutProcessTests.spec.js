const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Process Tests', () => {
    let loginPage;
    let productsPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLogin();
    });

    test('Completing purchase with valid info', async () => {
        await productsPage.addProductToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.enterShippingInformation('John', 'Doe', '12345');
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
        const confirmationMessage = await checkoutPage.getConfirmationMessage();
        expect(confirmationMessage).toBe('Thank you for your order!');
    });

    test('Checkout with invalid info', async () => {
        await productsPage.addProductToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.enterShippingInformation('', '', '12345');
        await checkoutPage.clickContinue();
        expect(await checkoutPage.isErrorMessageDisplayed()).toBeTruthy();
    });

    test('Verify order summary after completing purchase', async () => {
        await productsPage.addProductToCart(0);
        await cartPage.openCart();
        await cartPage.clickCheckout();
        await checkoutPage.enterShippingInformation('John', 'Doe', '12345');
        await checkoutPage.clickContinue();

        const productName = 'Sauce Labs Backpack';
        const productPrice = '$29.99';
        const totalAmount = '$29.99';

        const isOrderSummaryCorrect = await checkoutPage.verifyOrderSummary(productName, productPrice, totalAmount);
        expect(isOrderSummaryCorrect).toBeTruthy();
    });
});
