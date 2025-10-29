const readlineSync = require('readline-sync');

console.log(">>>>>>>>>>Calculadora<<<<<<<<<<")

var numeroUm = readlineSync.questionFloat("DIGITE UM NUMERO: ")
var numeroDois= readlineSync.questionFloat("DIGITE OUTRO NUMERO: ")
var operador = readlineSync.question("DIGITE UM OPERADOR SOMA, SUB, MULT, OU DIVI: ")

if(operador.toUpperCase() == "SOMA"){
    console.log("O RESULTADO É: " + numeroUm + numeroDois);
}
else if(operador.toUpperCase() == "SUB"){
    console.log("O RESULTADO É: " + numeroUm - numeroDois);
}
else if(operador.toUpperCase() == "MULT"){
    console.log("O RESULTADO É: " + numeroUm * numeroDois);
}
else if(operador.toUpperCase() == "DIVI"){
    console.log("O RESULTADO É: " + numeroUm / numeroDois);
}
else{
    console.log("VOCÊ DIGITOU ALGO ERRADO, DIGITE NOVAMENTE O OPERADOR CORRETO.")
    console.log(">>>>>>>>>>Fim do programa<<<<<<<<<<")
}

