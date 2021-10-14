function porConsola(num1, num2){
    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + (num1 - num2));
    console.log("La multiplicación es: " + (num1 * num2));
    console.log("La división es: " + (num1 / num2));
    console.log("*********************************");
}

function porPantalla(num1, num2){
    document.write("La suma es: " + (num1 + num2));
    document.write("La resta es: " + (num1 - num2));
    document.write("La multiplicación es: " + (num1 * num2));
    document.write("La división es: " + (num1 / num2));
    document.write("*********************************");
}

function calculadora(num1, num2, mostrar = false){
    if(mostrar){
        porConsola(num1,num2);
    } else{
        porPantalla(num1,num2);
    }
}

calculadora(5,2,true);
calculadora(5,2,false);

/*
for (let index = 0; index < 10; index++) {
    var resultado = calculadora(index,8);
    console.log(resultado); 
}
*/

//Parametros rest y spread
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restoDeFrutas);
}

listadoFrutas("Naranja", "Pera", "Melón", "Sandía", "Coco");
var frutas = ["Naranja", "Melocotón"];
listadoFrutas(...frutas, "Sandia", "Coco", "Pera");

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

function sumame(num1, num2, sumaYMuestra, sumaPorDos){
    var sumar = num1 + num2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    
    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
}, dato =>{
    console.log("La suma por dos es: ", (dato*2));
});