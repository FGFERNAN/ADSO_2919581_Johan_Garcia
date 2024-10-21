//Instanciación de la clase 
const datos = new validacion(nombres, apellidos, tipo_documento, num_documento, edad, genero, telefono, habilidades, hobbies, correo, contraseña);

//Creacion de variable para controlar el activar y desactivar del boton editar
let estado = false;

//Escuchador del boton editar
disabledEdit.addEventListener('click', () => {
    if(estado){
        datos.formEnabled();
    }else{
        datos.formDisableEdit();
    }
    estado = !estado;
})

//Algoritmo para calcular la edad segun la fecha de nacimiento ingresada
fecha_nacimiento.addEventListener('mouseout', () => {
    var hoy = new Date();
    var cumpleanos = new Date(fecha_nacimiento.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    //Se toma el input tipo range del formulario por su ID
    const inputEdad = document.getElementById('edad');

    //Se cambia el valor de forma dinamica del input tipo rango
    inputEdad.value = edad;

    //Se modifica el numero en el cual se visualiza el valor exacto del rango
    num_edad.textContent = edad;

    //Se realiza una validación previa antes de ejecutar el metodo validar edad con el fin de asegurarse
    //Que se ingrese una fecha en el campo
    if(fecha_nacimiento.value === ""){
       alert('Por favor ingresa una fecha de nacimiento');
       fecha_nacimiento.classList.remove('is-valid');
       fecha_nacimiento.classList.add('is-invalid');
       inputEdad.value = 0;
       num_edad.textContent = 0;

       //Si no se ingresa una fecha en el input de fecha, se bloquean los demas campos al salir del input
       datos.formDisabled();
    }else{

        //Si se ingresa una fecha, procede a ejecutar el metodo de validar edad de la clase
        datos.validarEdad();
    }

});

//Escuchador del input tipo color, que al salir de el modificara el color de fondo de la pagina
color.addEventListener('mouseout', (event) =>{
    body.style.backgroundColor = event.target.value
});

//Manejo de envio de datos
form.addEventListener("submit", (event) => {

    //Primero ejecutar el metodos para habilitar todos los campos
    datos.formEnabled();

    //Se previene el envio del formulario
    event.preventDefault();
    
    //Se almacenas las validaciones en un arreglo
    const validaciones = [

        //Se ejecutan los metodos de la clase
        datos.validarNombres(),
        // datos.validarApellidos(),
        datos.validarTipoDocumento(),
        // datos.validarDocumento(),
        datos.validarEdad(),
        datos.validarGenero(),
        // datos.validarTelefono(),
        datos.validarHabilidades(),
        datos.validarHobbies(),
        datos.validarCorreo(),
        datos.validarContraseña()
    ]

    //Se crea una variable para guardar si todas las validaciones del formulario retornaron true
    const fullCheck = validaciones.every(valid => valid === true);

    //Condicional para validar si todo retorno true en las validaciones enviar el formulario 
    if (fullCheck) {
        alert('Todos los campos han sido validados exitosamente');

        //Se ejecuta el metodo de limpiar creado en la clase en dado caso de que todos los campos esten correctos
        datos.formClear();
    } else {
        alert('Diligencia todos los campos con los requerimientos especificados');
    }
});








