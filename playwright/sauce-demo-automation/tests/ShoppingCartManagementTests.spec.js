const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test.describe('Shopping Cart Management Tests', () => {
    let loginPage;
    let productsPage;
    let cartPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLogin();
    });

    test('Viewing cart with multiple products', async () => {
        await productsPage.addProductToCart(0);
        await productsPage.addProductToCart(1);
        await productsPage.addProductToCart(2);
        
        await cartPage.openCart();
        expect(await cartPage.getCartItemsCount()).toBe(3);
    });

    test('Clearing cart', async () => {
        await productsPage.addProductToCart(0);
        await productsPage.addProductToCart(1);
        await productsPage.addProductToCart(2);
        
        await cartPage.openCart();
        await cartPage.removeProductFromCart(0);
        await cartPage.removeProductFromCart(0);
        await cartPage.removeProductFromCart(0);
        
        expect(await cartPage.getCartItemsCount()).toBe(0);
    });
});
