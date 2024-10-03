const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test.describe('Product Interaction Tests', () => {
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

    test('Product selection and addition to cart', async () => {
        await productsPage.addProductToCart(0);
        expect(await productsPage.getCartBadgeCount()).toBe('1');
    });

    test('Adding multiple products to cart', async () => {
        await productsPage.addProductToCart(0);
        await productsPage.addProductToCart(1);
        expect(await productsPage.getCartBadgeCount()).toBe('2');
    });

    test('Removing product from cart', async () => {
        await productsPage.addProductToCart(0);
        await cartPage.openCart();
        await cartPage.removeProductFromCart(0);
        expect(await cartPage.getCartItemsCount()).toBe(0);
    });
});
