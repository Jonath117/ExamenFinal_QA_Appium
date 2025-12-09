import LoginPage from "../../pageObjects/loginPage";
import CompraPage from "../../pageObjects/compraPage";
import { Given, When, Then } from "@wdio/cucumber-framework";


Given("el usuario inicia sesion con credenciales validas", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
});

// --- PASOS DE LA COMPRA ---

When("agrega dos productos al carrito de compra", async () => {
    await CompraPage.addFirstProductToCart();
    await CompraPage.addSecondProductToCart();
});

When("ingresa al carrito y procede con el checkout", async () => {
    await CompraPage.goToCart();
    await CompraPage.proceedToCheckout();
});

When("completa la informacion de envio con {string}, {string} y {string}", async (nombre, apellido, postalCode) => {
    await CompraPage.enterCheckoutInformation(nombre, apellido, postalCode);
    await CompraPage.continueCheckout();
});

When("finaliza la orden de compra", async () => {
    await CompraPage.finishCheckout();
});

// --- VERIFICACIÓN ---

Then("deberia ver la confirmacion de compra exitosa", async () => {
    await expect(CompraPage.backHomeButton).toBeDisplayed();
    // const thankYouMessage = $('android=new UiSelector().text("THANK YOU FOR YOU ORDER")');
    // await expect(thankYouMessage).toBeDisplayed();
});