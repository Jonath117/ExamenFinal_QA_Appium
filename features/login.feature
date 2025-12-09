Feature:Login Feature

@loginTest
Scenario: login exitoso
    Given Cuando estoy en la pantalla de login
    When Ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    Then Deberia ver la pantalla principal de la aplicacion
    
@logoutTest
Scenario: Login y cierre de sesion exitoso
    Given Cuando estoy en la pantalla de login
    When Ingreso el usuario "standard_user" y la contraseña "secret_sauce"
    Then Deberia ver la pantalla principal de la aplicacion
    When el usuario cierra sesion
    Then deberia regresar a la pantalla de login
