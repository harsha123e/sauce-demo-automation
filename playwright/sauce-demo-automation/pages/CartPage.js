class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemsSelector = '.cart_item';
        this.checkoutButtonSelector = '#checkout';
        this.removeButtonsSelector = '.cart_button';
        this.cartContainerSelector = '#shopping_cart_container';
    }

    async openCart() {
        await this.page.click(this.cartContainerSelector);
    }

    async removeProductFromCart(index) {
        const removeButtons = await this.page.$$(this.removeButtonsSelector);
        if (index >= 0 && index < removeButtons.length) {
            await removeButtons[index].click();
        } else {
            throw new IndexOutOfBoundsException(`Invalid product index: ${index}`);
        }
    }

    async getCartItemsCount() {
        const cartItems = await this.page.$$(this.cartItemsSelector);
        return cartItems.length;
    }

    async clickCheckout() {
        await this.page.click(this.checkoutButtonSelector);
    }

}

module.exports = CartPage;
