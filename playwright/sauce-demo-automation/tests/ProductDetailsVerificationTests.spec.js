const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailsPage = require('../pages/ProductDetailsPage');

test.describe('Product Details Verification Tests', () => {
    let loginPage;
    let productsPage;
    let productDetailsPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLogin();
    });

    test('Product details verification', async () => {
        await productsPage.selectProduct(0);
        
        const expectedProductName = 'Sauce Labs Backpack';
        const expectedProductPrice = '$29.99';
        const expectedProductDescription = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';

        expect(await productDetailsPage.getProductName()).toBe(expectedProductName);
        expect(await productDetailsPage.getProductPrice()).toBe(expectedProductPrice);
        expect(await productDetailsPage.getProductDescription()).toContain(expectedProductDescription);
    });
});
