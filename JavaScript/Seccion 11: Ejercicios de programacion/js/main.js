
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