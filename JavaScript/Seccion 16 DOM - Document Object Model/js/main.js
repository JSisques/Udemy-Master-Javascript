/*
function cambiarColor(color){
    caja.style.backgroundColor = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

//Cambiar el estilo
caja.style.backgroundColor("red");
caja.style.padding("20px");
caja.style.color = "white";

//Añadir clase a elemento
caja.className = "hola";

console.log(caja);
*/
var todosLosDivs = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2]
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento"

console.log(contenidoEnTexto)

var hr = document.createElement("hr")

//Seleccionar una clase
var divRojos = document.getElementsByClassName('rojo')
for (let index = 0; index < divRojos.length; index++) {
    divRojos[index].style.background = "red";
    
}