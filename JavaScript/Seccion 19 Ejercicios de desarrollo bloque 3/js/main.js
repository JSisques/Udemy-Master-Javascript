
var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(){
    console.log("Evento submit capturado");

    var nombre = document.getElementById("txtNombre").value;
    var apellidos = document.getElementById("txtApellidos").value;
    var edad = document.getElementById("txtEdad").value;

    console.log(nombre);
    console.log(apellidos);
    console.log(edad);

});