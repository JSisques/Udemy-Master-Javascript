window.addEventListener('load', function(){
    this.alert("Holi");
    var tiempo = this.setInterval(function(){
        console.log("set interval ejecutado");
        document.querySelector("h1").style.fontSize = "50px";
        document.write("Intervalo");
    }, 3000);
});

var pelicula = {
    titulo: "Peli",
    year: 2017,
    pais: "EEUU"
}

var peliculas = [
    {
        titulo: "Peli 2",
        year: 2018,
        pais: "EEUU"
    },
    {
        titulo: "Peli 3",
        year: 2019,
        pais: "Japon"
    }
]

console.log(pelicula.titulo)
console.log(peliculas[0].titulo)