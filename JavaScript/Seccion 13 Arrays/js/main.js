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
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<p>" + lenguajes[index] + "</p>")
}
