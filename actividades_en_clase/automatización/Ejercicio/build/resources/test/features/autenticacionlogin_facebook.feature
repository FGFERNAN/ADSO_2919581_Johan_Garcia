#language:es
  #author:JohnRondon

Característica: Autenticacion en la pagina de Facebook
  Como usuario de Facebook
  Quiero autenticarme en el portal de Facebook
  Para poder acceder al contenido y funcionalidades disponibles en mi cuenta.

  @autenticacion

  Esquema del escenario: Verificar la autenticacion exitosa en la pagina de Facebook
    Dado que el usuario se encuentra en la pagina de inicio de sesion de Facebook
    Cuando ingrese las credenciales correctas (usuario y contrasena)
      | nombre   | apellidos   | email   | mobile   | current address   |
      | <nombre> | <apellidos> | <email> | <mobile> | <current address> |
    Entonces se debe verificar que el usuario haya sido autenticado correctamente y redirigido a su pagina de inicio de Facebook

    Ejemplos:
      | nombre | apellidos | email            | mobile     | subjects | current address  |
      | johan  | garcia    | prueba@gmail.com | 3107847573 | ejemplo  | cra 87 h # 41-14 |