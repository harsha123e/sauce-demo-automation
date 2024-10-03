class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.productNameSelector = '.inventory_details_name';
        this.productPriceSelector = '.inventory_details_price';
        this.productDescriptionSelector = '.inventory_details_desc';
        this.addToCartButtonSelector = '.btn_inventory';
    }

    async getProductName() {
        return await this.page.textContent(this.productNameSelector);
    }

    async getProductPrice() {
        return await this.page.textContent(this.productPriceSelector);
    }

    async getProductDescription() {
        return await this.page.textContent(this.productDescriptionSelector);
    }

    async clickAddToCart() {
        await this.page.click(this.addToCartButtonSelector);
    }

}

module.exports = ProductDetailsPage;
