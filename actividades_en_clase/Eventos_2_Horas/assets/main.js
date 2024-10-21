const form = document.getElementById('formulario');
const select = document.getElementById('tipo_documento');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const descripcion = document.getElementById('descripcion');

//Evento onload
window.addEventListener('load', () => {
    alert('Bienvenidos a mi formulario');
});

//Evento submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Evento Sumbit Capturado');
});

//Evento change
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    alert(selectedOption.value + ': ' + selectedOption.text);
  });

//Evento mouseover 
nombre.addEventListener('mouseover', () => {
    alert(inputText.value);
  });

//Evento keydown
apellido.addEventListener('keydown', function(event) {
    alert('Tecla presionada: ' + event.key);
})  

//Evento keyup
descripcion.addEventListener('keyup', (event) => {
    if(event.key === "a"){
        alert('Tecla a liberada')
    }
})