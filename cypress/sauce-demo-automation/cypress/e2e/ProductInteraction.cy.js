import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';

describe('Product Interaction Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
    });

    it('should add product to cart and verify cart count', () => {
        ProductsPage.addProductToCart(0);
        ProductsPage.getCartBadgeCount().should('equal', '1');
    });

    it('should add multiple products to cart and verify cart count', () => {
        ProductsPage.addProductToCart(0);
        ProductsPage.addProductToCart(1);
        ProductsPage.getCartBadgeCount().should('equal', '2');
    });

    it('should remove product from cart', () => {
        ProductsPage.addProductToCart(0);
        CartPage.openCart();
        CartPage.removeProductFromCart(0);
        CartPage.getCartItemsCount().should('equal', 0);
    });
});
