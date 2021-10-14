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