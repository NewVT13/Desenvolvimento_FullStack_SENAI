const readlineSync = require('readline-sync');

console.log(">>>>>>>>>>Calculadora<<<<<<<<<<")

var numeroUm = readlineSync.questionFloat("DIGITE UM NUMERO: ")
var numeroDois = readlineSync.questionFloat("DIGITE OUTRO NUMERO: ")
var operador = readlineSync.question("DIGITE UM OPERADOR SOMA, SUB, MULT, OU DIVI: ")

if (operador.toUpperCase() == "SOMA") {
    var resultado = numeroUm + numeroDois
    console.log("O RESULTADO É: " + resultado);
}
else if (operador.toUpperCase() == "SUB") {
    var resultado = numeroUm - numeroDois
    console.log("O RESULTADO É: " + resultado);
}
else if (operador.toUpperCase() == "MULT") {
    var resultado = numeroUm * numeroDois
    console.log("O RESULTADO É: " + resultado);
}
else if (operador.toUpperCase() == "DIVI") {
    if (numeroDois == 0) {
        console.log("Não é possível dividir por 0")
    } else {
        var resultado = numeroUm / numeroDois
        console.log("O RESULTADO É: " + resultado.toFixed(2));
    }
}
else {
    console.log("VOCÊ DIGITOU ALGO ERRADO, DIGITE NOVAMENTE O OPERADOR CORRETO.")
    console.log(">>>>>>>>>>Fim do programa<<<<<<<<<<")
}
