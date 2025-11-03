const readlineSync = require('readline-sync');

var altura = readlineSync.questionFloat("Qual é a sua altura? ")
var peso = readlineSync.questionFloat("Qual é seu peso? ")

function calcularImc (altura, peso){
    return peso / (altura * altura)
}

console.log(calcularImc(altura, peso).toFixed(2))

