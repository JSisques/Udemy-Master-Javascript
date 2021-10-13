
/*
Ejercicio 1:
Programa que pida dos numeros y que nos diga cual es el menor, el mayor o si son iguales.
Si los numeros son menores o iguales a cero nos tiene que volver a pedir el numero
*/

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

/*
Ejercicio 1:
Programa que pida dos numeros y que nos diga cual es el menor, el mayor o si son iguales.
*/

var num1 = prompt("Introduce el numero 1");
var num2 = prompt("Introduce el numero 2");

if(num1 > num2){
    alert(num1 + " es mayor que " + num2);
} else if(num1 < num2){
    alert(num1 + " es menor que " + num2);
} else{
    alert(num1 + " es igual que " + num2);
}