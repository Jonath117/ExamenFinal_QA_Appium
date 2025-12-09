class CompraPage {
    get carritoButton() { return $('~test-Cart') }; 

    get product1() { return $('//android.widget.TextView[@text="Sauce Labs Backpack"]/parent::android.view.ViewGroup//android.view.ViewGroup[@content-desc="test-ADD TO CART"]') };
    get product2() { return $('//android.widget.TextView[@text="Sauce Labs Bike Light"]/parent::android.view.ViewGroup//android.view.ViewGroup[@content-desc="test-ADD TO CART"]') };

    get firstNameInput() { return $('~test-First Name') };
    get lastNameInput() { return $('~test-Last Name') }
    get postalCodeInput() { return $('~test-Zip/Postal Code') };
    get continueButton() { return $('~test-CONTINUE') };
    get finishButton() { return $('~test-FINISH') };
    get backHomeButton() { return $('~test-BACK HOME') };

    async addFirstProductToCart() {
        await this.product1.waitForDisplayed({ timeout: 5000 });
        await this.product1.click();
    }
    async addSecondProductToCart() {
        await this.product2.waitForDisplayed({ timeout: 5000 });
        await this.product2.click();
    }

    async goToCart() {
        await this.carritoButton.waitForDisplayed({ timeout: 5000 });
        await this.carritoButton.click();
    }

    async proceedToCheckout() {
        const selectorScroll = 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-CHECKOUT"))';
        
        const checkoutBtn = $(selectorScroll);
        
        await checkoutBtn.click();
    }

    async enterCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.waitForDisplayed({ timeout: 5000 });
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.waitForDisplayed({ timeout: 5000 });
        await this.continueButton.click();
    }

    async finishCheckout() {
        const selectorScrollFinish = 'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("test-FINISH"))';
        const finishBtn = $(selectorScrollFinish);
        await finishBtn.click();
    }
}

export default new CompraPage();