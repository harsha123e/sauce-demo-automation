import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';

describe('Shopping Cart Management Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
    });

    it('should view cart with multiple products', () => {
        ProductsPage.addProductToCart(0);
        ProductsPage.addProductToCart(1);
        ProductsPage.addProductToCart(2);
        CartPage.openCart();
        CartPage.getCartItemsCount().should('equal', 3);
    });

    it('should clear the cart', () => {
        ProductsPage.addProductToCart(0);
        ProductsPage.addProductToCart(1);
        ProductsPage.addProductToCart(2);
        CartPage.openCart();
        CartPage.removeProductFromCart(0);
        CartPage.removeProductFromCart(0);
        CartPage.removeProductFromCart(0);
        CartPage.getCartItemsCount().should('equal', 0);
    });
});
