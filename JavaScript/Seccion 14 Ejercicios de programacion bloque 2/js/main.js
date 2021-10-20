/*
1. Pedir 6 numeros por pantalla y meterlos en un array
2. Mostrar el array entero por pantalla y por consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Buscar un valor introducido por el usuario y su indice
*/

// Parte 1
var numeros = new Array(6)

for (let index = 0; index < numeros.length; index++) {
    numeros[index] = parseInt(prompt("Introduzca un número"))
}

// Parte 2
document.write("<h1>Array de números</h1>")
for (let index = 0; index < numeros.length; index++) {
    document.write("<p>" + numeros[index] + "</p>")
}
console.log(numeros)

// Parte 3
numeros.sort()
console.log(numeros)

// Parte 4
numeros.reverse()
console.log(numeros)

// Parte 5
console.log(numeros.length)

// Parte 6
var busqueda = prompt("Introduce el numero a buscar")
var busquedaNumeros, index = numeros.find((numero) => numero == busqueda)
console.log(busquedaNumeros + " " + numeros[busquedaNumeros])