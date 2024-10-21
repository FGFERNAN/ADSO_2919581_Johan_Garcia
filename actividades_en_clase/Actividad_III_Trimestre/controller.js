const datos = new validacion(nombres, apellidos, tipo_documento, num_documento, edad, genero, telefono, habilidades, hobbies, correo, contraseña);

let estado = false;
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

    const inputEdad = document.getElementById('edad');

    //Se cambia el valor de forma dinamica del input tipo rango
    inputEdad.value = edad;

    //Se modifica el numero en el cual se visualiza el valor exacto del rango
    num_edad.textContent = edad;

    if(fecha_nacimiento.value === ""){
       alert('Por favor ingresa una fecha de nacimiento');
       fecha_nacimiento.classList.remove('is-valid');
       fecha_nacimiento.classList.add('is-invalid');
       inputEdad.value = 0;
       num_edad.textContent = 0;
       datos.formDisabled();
    }else{
        datos.validarEdad();
    }

});

color.addEventListener('mouseout', (event) =>{
    body.style.backgroundColor = event.target.value
});

//Manejo de envio de datos
form.addEventListener("submit", (event) => {

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
        datos.formClear();
    } else {
        alert('Diligencia todos los campos con los requerimientos especificados');
    }
});








