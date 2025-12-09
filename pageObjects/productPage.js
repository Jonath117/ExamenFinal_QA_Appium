class ProductPage {
    get product1() { return $('android=new UiSelector().description("test-ADD TO CART").instance(0)') };

    get carritoButton() { return $('android=new UiSelector().className("android.widget.ImageView").instance(3)') };

    get removeButton() { return $('android=new UiSelector().description("test-REMOVE").instance(0)') };

    async addProductToCart() {
        await this.product1.waitForDisplayed({ timeout: 5000 });
        await this.product1.click();
    }

    async goToCart() {
        await this.carritoButton.waitForDisplayed({ timeout: 5000 });
        await this.carritoButton.click();
    }

    async removeProductFromCart() {
        await this.removeButton.waitForDisplayed({ timeout: 5000 });
        await this.removeButton.click();
    }
    
}

export default new ProductPage();