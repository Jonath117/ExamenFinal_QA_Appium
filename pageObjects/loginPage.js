class LoginPage{
    get usernameInput() { return $('~test-Username')};
    get passwordInput() { return $('~test-Password')};

    //obtener elemento dentro de la app despues de login
    get someElement() { return $('android=new UiSelector().text("PRODUCTS")') };
    get loginButton() { return $('~test-LOGIN')};

    get burgerMenuButton() { 
        return $('android=new UiSelector().className("android.widget.ImageView").instance(1)');
    };

    get logoutButton() { 
        return $('android=new UiSelector().text("LOGOUT")');
    };

    async login(username, password){
        await this.usernameInput.waitForDisplayed({ timeout: 5000 });
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async openBurgerMenu() {
        await this.burgerMenuButton.waitForDisplayed({ timeout: 5000 });
        await this.burgerMenuButton.click();
    }

    async logout() {
        await this.openBurgerMenu();
        await this.logoutButton.waitForDisplayed({ timeout: 5000 });
        await this.logoutButton.click();
    }

}

export default new LoginPage();