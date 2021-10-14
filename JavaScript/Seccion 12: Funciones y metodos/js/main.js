function calculadora(num1, num2){
    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + (num1 - num2));
    console.log("La multiplicación es: " + (num1 * num2));
    console.log("La división es: " + (num1 / num2));
    console.log("*********************************")
}

for (let index = 0; index < 10; index++) {
    var resultado = calculadora(index,8);
    console.log(resultado); 
}