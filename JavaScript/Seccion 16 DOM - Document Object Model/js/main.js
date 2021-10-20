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