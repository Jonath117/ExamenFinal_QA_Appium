
Feature: Gestion de Carrito de Compras (CRUD)

@carritoTest
Scenario: Agregar y eliminar un producto del carrito de compra

    Given el usuario inicia sesion con credenciales validas    
    When el usuario agrega un producto al carrito
    And navega a la pantalla del carrito de compra
    And el usuario remueve el producto del carrito
    Then el carrito de compra deberia estar vacio