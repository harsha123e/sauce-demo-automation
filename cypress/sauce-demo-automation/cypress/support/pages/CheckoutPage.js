class CheckoutPage {
    get firstName() {
        return cy.get('#first-name');
    }

    get lastName() {
        return cy.get('#last-name');
    }

    get postalCode() {
        return cy.get('#postal-code');
    }

    get continueButton() {
        return cy.get('#continue');
    }

    get finishButton() {
        return cy.get('#finish');
    }

    get confirmationMessage() {
        return cy.get('.complete-header');
    }

    get errorMessage() {
        return cy.get('.error-message-container');
    }

    enterShippingInformation(fname, lname, postal) {
        this.firstName.type(fname);
        this.lastName.type(lname);
        this.postalCode.type(postal);
    }

    clickContinue() {
        this.continueButton.click();
    }

    clickFinish() {
        this.finishButton.click();
    }

    getConfirmationMessage() {
        return this.confirmationMessage.invoke('text');
    }

    isErrorMessageDisplayed() {
        return this.errorMessage.should('be.visible');
    }
}

export default new CheckoutPage();
