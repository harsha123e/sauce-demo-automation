import LoginPage from '../support/pages/loginPage';
import HomePage from '../support/pages/HomePage';

describe('User Authentication Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should log in successfully with valid credentials', () => {
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
        HomePage.getPageTitle().then((title) => {
            expect(title).to.eq('Products');
        });
    });

    it('should display an error message with invalid credentials', () => {
        LoginPage.enterUsername('invalid_user');
        LoginPage.enterPassword('wrong_password');
        LoginPage.clickLogin();
        LoginPage.isErrorMessageDisplayed('Epic sadface:');
    });

    it('should log out successfully', () => {
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickLogin();
        HomePage.clickMenuButton();
        HomePage.clickLogout();
        LoginPage.isLoginButtonDisplayed();
    });
});
