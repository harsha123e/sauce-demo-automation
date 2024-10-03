class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameSelector = '#first-name';
        this.lastNameSelector = '#last-name';
        this.postalCodeSelector = '#postal-code';
        this.continueButtonSelector = '#continue';
        this.finishButtonSelector = '#finish';
        this.confirmationMessageSelector = '.complete-header';
        this.errorMessageSelector = '.error-message-container';
        this.productNameSelector = '.inventory_item_name';
        this.productPriceSelector = '.inventory_item_price';
        this.totalAmountSelector = '.summary_subtotal_label';
    }

    async enterShippingInformation(fname, lname, postal) {
        await this.page.fill(this.firstNameSelector, fname);
        await this.page.fill(this.lastNameSelector, lname);
        await this.page.fill(this.postalCodeSelector, postal);
    }

    async clickContinue() {
        await this.page.click(this.continueButtonSelector);
    }

    async clickFinish() {
        await this.page.click(this.finishButtonSelector);
    }

    async getConfirmationMessage() {
        return await this.page.textContent(this.confirmationMessageSelector);
    }

    async isErrorMessageDisplayed() {
        return await this.page.isVisible(this.errorMessageSelector);
    }

    async verifyOrderSummary(productName, productPrice, totalAmount) {
        const displayedProductName = await this.page.textContent(this.productNameSelector);
        const displayedProductPrice = await this.page.textContent(this.productPriceSelector);
        const displayedTotalAmount = await this.page.textContent(this.totalAmountSelector);
        
        return displayedProductName.includes(productName) && 
               displayedProductPrice.includes(productPrice) && 
               displayedTotalAmount.includes(totalAmount);
    }
}

module.exports = CheckoutPage;
