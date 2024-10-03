class LoginPage {
    enterUsername(username) {
        cy.get('#user-name').type(username);
    }

    enterPassword(password) {
        cy.get('#password').type(password);
    }

    clickLogin() {
        cy.get('#login-button').click();
    }

    isLoginButtonDisplayed() {
        return cy.get('#login-button').should('be.visible');
    }

    isErrorMessageDisplayed(message) {
        cy.get('.error-message-container').should('contain.text', message);
    }
}

export default new LoginPage();