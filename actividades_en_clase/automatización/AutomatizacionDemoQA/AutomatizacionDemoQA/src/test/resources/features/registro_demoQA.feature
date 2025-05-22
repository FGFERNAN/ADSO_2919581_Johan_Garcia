#language:es
  #author:JohanGarcia

Característica: Registro de usuario nuevo en la pagina de DemoQA
  Como usuario de DemoQA
  Quiero poder registarme
  Para poder acceder al contenido y funcionalidades disponibles de la pagina.

  @registro

  Esquema del escenario: Registro Exitosamente
    Dado que el usuario se encuentra en la pagina de inicio de registro de DemoQA
    Cuando ingrese los campos obligatorios del formulario de registro y hace click en el boton Submit
      | nombre   | apellidos   | email   | mobile   | current address   |
      | <nombre> | <apellidos> | <email> | <mobile> | <current address> |
    Entonces el sistema debe mostrar un mensaje de confirmacion agradeciendo por el envio del formulario
    Y una tabla con los datos diligenciados en el formulario
    Ejemplos:
      | nombre | apellidos | email            | mobile     | subjects | current address  |
      | johan  | garcia    | prueba@gmail.com | 3107847573 | ejemplo  | cra 87 h # 41-14 |