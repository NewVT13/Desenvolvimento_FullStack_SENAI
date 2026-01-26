const readlineSync = require('readline-sync');

var limiteDoLoop = readlineSync.questionInt("Quantos pacientes tem? ")
var contador = 1

for(contador; contador <= limiteDoLoop; contador++){
    var pacientes = readlineSync.question("Qual o nome do paciente? ")
    var peso = readlineSync.questionFloat("Qual o peso?")
    var altura = readlineSync.questionFloat("Qual e a altura?")
    var imc = peso / (altura * altura)
    console.log("O IMC do paciente: " + pacientes + " e: " + imc.toFixed(2))
}