var numeros = [0,1,2,3,4,5,6,7,8,9]
var nombres = ["Javi", "Paco", "Poli"]

var datos = [1,"string", 2.5]

var lenguajes = new Array("PHP", "JS", "Java")

console.log(nombres)
console.log(lenguajes[1])

//Propiedades array
console.log(nombres.length)
var elemento = parseInt(prompt("Que elemento quieres?", 0))
if(elemento < nombres.length){
    alert(nombres[elemento])
}

document.write("<h1>Lenguajes de programación</h1>")
document.write("<h2>Reccorer array con for</h2>")
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<p>" + lenguajes[index] + "</p>")
}

document.write("<h2>Reccorer array con for each</h2>")
lenguajes.forEach((element, index) => {
    document.write("<p>" + index + " " + element + "</p>")
});

//Arrays bidimensionales
var categorias = ["Acción", "Horror", "Comedia"]
var peliculas = ["Gran torino", "Seven", "La casa encantada"]
var cine = [categorias, peliculas]

console.log(cine)
console.log(cine[0][1])
console.log(cine[1][0])

//Operaciones con arrays
var elemento = prompt("Introduce la pelicula")
peliculas.push(elemento)
console.log(peliculas)

peliculas.pop()
console.log(peliculas)

var index = peliculas.indexOf("Gran torino")
console.log(index)

//Convertir string a array
var texto = "Hola que tal estamos"
var texto_array = texto.split(" ")

console.log(texto_array)

//Ordenar array
peliculas.sort()
console.log(peliculas)

peliculas.reverse()
console.log(peliculas)