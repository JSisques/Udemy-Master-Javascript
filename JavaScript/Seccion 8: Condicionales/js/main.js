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

//Operadores lógicos
//And => &&
//Or => ||
//Negación => !=

var year = 2021;

if (year != 2016){
    console.log("No es 2016, es " + year);
}

if (year >= 2000 && year <= 2020){
    console.log("Estamos en la  era actual");
} else{
    console.log("Estamos en la era postmoderna");
}

if (year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}

//Switch
var imprime = "";
switch(year){
    case 18:
        imprime = "Eres mayor de edad";
        break;
    case 25:
        imprime = "Eres adulto";
        break;
    case 18:
        imprime = "Crisis de los 40";
        break;
    case 75:
        imprime = "Eres un anciano";
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}

console.log(year);