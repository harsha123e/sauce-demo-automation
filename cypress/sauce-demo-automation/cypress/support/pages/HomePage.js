class HomePage {
    getPageTitle() {
        return cy.get('.title').invoke('text');
    }

    getMenuButton() {
        return cy.get('#react-burger-menu-btn');
    }

    getLogoutLink() {
        return cy.get('#logout_sidebar_link');
    }

    clickMenuButton() {
        this.getMenuButton().click();
    }

    clickLogout() {
        this.getLogoutLink().click();
    }

}

export default new HomePage();
