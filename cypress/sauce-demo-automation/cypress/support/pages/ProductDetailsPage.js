class ProductDetailsPage {
    get productName() {
        return cy.get('.inventory_details_name');
    }

    get productPrice() {
        return cy.get('.inventory_details_price');
    }

    get productDescription() {
        return cy.get('.inventory_details_desc');
    }

    get addToCartButton() {
        return cy.get('.btn_inventory');
    }

    getProductName() {
        return this.productName.invoke('text');
    }

    getProductPrice() {
        return this.productPrice.invoke('text');
    }

    getProductDescription() {
        return this.productDescription.invoke('text');
    }

    clickAddToCart() {
        this.addToCartButton.click();
    }
}

export default new ProductDetailsPage();
