import ProductPage from "../../pageObjects/productPage";
import LoginPage from "../../pageObjects/loginPage";
import { Given, When, Then } from "@wdio/cucumber-framework";

Given("el usuario inicia sesion con credenciales validas en el login", async () => {
    await LoginPage.login("standard_user", "secret_sauce");
    await expect(LoginPage.someElement).toBeDisplayed(); 
});

When("el usuario agrega un producto al carrito", async () => {
    await ProductPage.addProductToCart();
});

When("navega a la pantalla del carrito de compra", async () => {
    await ProductPage.goToCart();
});

When("el usuario remueve el producto del carrito", async () => {
    await ProductPage.removeProductFromCart();
});

Then("el carrito de compra deberia estar vacio", async () => {
    await expect(ProductPage.removeButton).not.toBeDisplayed();
});