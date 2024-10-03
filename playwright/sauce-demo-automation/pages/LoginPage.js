class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameFieldSelector = '#user-name';
        this.passwordFieldSelector = '#password';
        this.loginButtonSelector = '#login-button';
        this.errorMessageSelector = '.error-message-container';
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameFieldSelector, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordFieldSelector, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButtonSelector);
    }

    async isLoginButtonDisplayed() {
        return await this.page.isVisible(this.loginButtonSelector);
    }

    async isErrorMessageDisplayed(message) {
        const errorMessage = await this.page.textContent(this.errorMessageSelector);
        return errorMessage.includes(message);
    }

}

module.exports = LoginPage;
