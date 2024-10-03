class CartPage {
    get cartItems() {
        return cy.get('.cart_item');
    }

    get checkoutButton() {
        return cy.get('#checkout');
    }

    get removeButtons() {
        return cy.get('.cart_button');
    }

    get cartContainer() {
        return cy.get('#shopping_cart_container');
    }

    openCart() {
        this.cartContainer.click();
    }

    removeProductFromCart(index) {
        this.removeButtons.eq(index).click();
    }

    getCartItemsCount() {
        return this.cartItems.should('have.length.greaterThan', 0);
    }

    clickCheckout() {
        this.checkoutButton.click();
    }
}

export default new CartPage();
