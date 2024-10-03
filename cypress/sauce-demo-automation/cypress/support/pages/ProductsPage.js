class ProductsPage {
    get products() {
        return cy.get('.inventory_item_name');
    }

    get addToCartButtons() {
        return cy.get('.btn_inventory');
    }

    get cartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    selectProduct(index) {
        this.products.eq(index).click();
    }

    addProductToCart(index) {
        this.addToCartButtons.eq(index).click();
    }

    getCartBadgeCount() {
        return this.cartBadge.invoke('text');
    }
}

export default new ProductsPage();
