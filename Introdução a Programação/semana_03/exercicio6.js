const readlineSync = require('readline-sync');

var numeroPessoas = readlineSync.question("Quantas pessoas tem na casa? ")
var contador = 1
var salarios = []
var soma =  0


for (contador; contador <= numeroPessoas; contador++ ){
    var renda = readlineSync.questionFloat("Qual a renda da pessoa? ")
    salarios.push(renda)
    soma = renda + soma
}

var mediaSalario = soma / numeroPessoas

if(mediaSalario <= 1500){
    console.log("Recebe beneficio")
}else{
    console.log("Não recebe beneficio")
}