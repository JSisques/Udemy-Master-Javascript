/*
window.addEventListener('load', ()=>{

var boton = document.querySelector("#boton");

function cambiarColor(){
    var bg = boton.style.background;

    if(bg == "green"){
        boton.style.background = "red";
    } else{
        boton.style.background = "green";
    }

    return true;
}

boton.addEventListener('click', function(){
    cambiarColor();
});

boton.addEventListener('mouseover', function(){
    boton.style.background = "#CCC";
});

boton.addEventListener('mouseout', function(){
    boton.style.background = "#FFF";
});
})
*/

window.addEventListener('load', function(){
    var tiempo = this.setInterval(function(){
        console.log("set interval ejecutado");
        document.querySelector("h1").style.fontSize = "50px";
        document.write("Intervalo");
    }, 3000);
});