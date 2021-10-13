'use-strict'

var edad = 33;
var nombre = "Javi";

if (edad > 17){
    console.log(nombre + " es mayor de edad porque tiene " + edad + " años");

    if(edad == 33){
        console.log("Todavia eres millenial!")
    } else if(edad > 70){
        console.log("Ya no eres millenial :(")
    }
} else{
    console.log(nombre + " es menor de edad porque tiene " + edad + " años");
}