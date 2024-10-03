import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('Checkout Process Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
    });

    it('should complete purchase with valid info', () => {
        ProductsPage.addProductToCart(0);
        CartPage.openCart();
        CartPage.clickCheckout();
        CheckoutPage.enterShippingInformation('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.clickFinish();
        CheckoutPage.getConfirmationMessage().then((message) => {
            expect(message).to.equal('Thank you for your order!');
        });
    });

    it('should display error message when checking out with invalid info', () => {
        ProductsPage.addProductToCart(0);
        CartPage.openCart();
        CartPage.clickCheckout();
        CheckoutPage.enterShippingInformation('', '', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.isErrorMessageDisplayed().should('be.true');
    });
});
