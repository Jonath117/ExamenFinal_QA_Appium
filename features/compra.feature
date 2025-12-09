Feature: Flujo de Compra Completo

  @compraExitosaTest
  Scenario: Agregar dos productos y finalizar la compra exitosamente
    Given el usuario inicia sesion con credenciales validas en el login

    When agrega dos productos al carrito de compra
    And ingresa al carrito y procede con el checkout
    And completa la informacion de envio con "Juan", "Perez" y "12345"
    And finaliza la orden de compra

    Then deberia ver la confirmacion de compra exitosa