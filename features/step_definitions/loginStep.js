import LoginPage from "../../pageObjects/loginPage";
import { Given, When, Then } from "@wdio/cucumber-framework";

Given("Cuando estoy en la pantalla de login", async () => {
    await LoginPage.usernameInput.waitForDisplayed({ timeout: 10000 });
});

When("Ingreso el usuario {string} y la contraseña {string}", async (username, password) => {
    await LoginPage.login(username, password);
});

Then("Deberia ver la pantalla principal de la aplicacion", async () => {
    await expect(LoginPage.someElement).toBeDisplayed();
});


When("el usuario cierra sesion", async () => {
    await LoginPage.logout();
});

Then("deberia regresar a la pantalla de login", async () => {
    await expect(LoginPage.usernameInput).toBeDisplayed();
});
