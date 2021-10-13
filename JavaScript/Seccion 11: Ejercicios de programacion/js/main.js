
/*
Ejercicio 1:
Programa que pida dos numeros y que nos diga cual es el menor, el mayor o si son iguales.
Si los numeros son menores o iguales a cero nos tiene que volver a pedir el numero

do {
    var num1 = prompt("Introduce el numero 1");
    var num2 = prompt("Introduce el numero 2");
} while (num1 > 0 && num2 > 0);

if(num1 > num2){
    alert(num1 + " es mayor que " + num2);
} else if(num1 < num2){
    alert(num1 + " es menor que " + num2);
} else{
    alert(num1 + " es igual que " + num2);
}
*/

/*
Ejercicio 2:
Utilizando un bucle pedir numeros y calcular su suma y su media hasta introducir un numero negativo

var contador = 0;
var num = 0;
var suma = 0;
var media = 0   
do {
    
    suma += num;
    contador++;
    media = suma / contador;

    console.log(suma);
    console.log(media);

    num =  parseInt(prompt("Introduce un número"));

} while (num >= 0);
*/

/*
Ejercicio 3:
Hacer un programa que muestre todos los numeros entre 2 que haya introducido el usuario

var num1 = parseInt(prompt("Introduce el numero 1"));
var num2 = parseInt(prompt("Introduce el numero 2"));

for (let index = num1; index < num2; index++) {
    console.log(index);   
}
*/

/*
Ejercicio 4:
Hacer un programa que muestre todos los numeros impares entre 2 que haya introducido el usuario.

var num1 = parseInt(prompt("Introduce el numero 1"));
var num2 = parseInt(prompt("Introduce el numero 2"));

for (let index = num1; index < num2; index++) {
    if(index % 2 != 0){
    console.log(index); 
    }  
}
*/

/*
Ejercicio 5:
Mostrar todos los numeros divisiores de un numero introducido por el usuario.

var num1 = parseInt(prompt("Introduce el numero 1"));

for (let index = 0; index < num1; index++) {
    if(num1 % index == 0){
        console.log(index); 
    }  
}
*/

/*
Ejercicio 6:
Decir si un numero es parc o impar
Si no es valido que nos vuelva a pedir el numero

var num1 = parseInt(prompt("Introduce el numero 1"));

if(num1 %2 == 0){
    console.log("Es par");
} else{
    console.log("Es impar");
}

*/

/*
Ejercicio 7:
Tabla de multiplicar de un numero pedido al usuario.
*/

var num1 = parseInt(prompt("Introduce el numero 1"));

for (let index = 0; index < 11; index++) {
    console.log(num1 + " x " + index + " = " + num1 * index);
}

/*
Ejercicio 8:
Programa que pida dos numeros y que nos diga cual es el menor, el mayor o si son iguales.
*/