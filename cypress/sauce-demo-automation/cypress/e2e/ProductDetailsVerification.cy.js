import LoginPage from '../support/pages/loginPage';
import ProductsPage from '../support/pages/ProductsPage';
import ProductDetailsPage from '../support/pages/ProductDetailsPage';

describe('Product Details Verification Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
    });

    it('should verify product details', () => {
        ProductsPage.selectProduct(0);
        const expectedProductName = 'Sauce Labs Backpack';
        const expectedProductPrice = '$29.99';
        const expectedProductDescription = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.';

        ProductDetailsPage.getProductName().then((name) => {
            expect(name).to.equal(expectedProductName);
        });

        ProductDetailsPage.getProductPrice().then((price) => {
            expect(price).to.equal(expectedProductPrice);
        });

        ProductDetailsPage.getProductDescription().then((description) => {
            expect(description).to.include(expectedProductDescription);
        });
    });
});
