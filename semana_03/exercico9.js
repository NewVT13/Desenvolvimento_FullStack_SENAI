const readlineSync = require('readline-sync');

var rendaAnual = []
var contadorMeses = 1
var somaDosLucros = 0
for(contadorMeses; contadorMeses <= 12; contadorMeses++){
    var lucroMensal = readlineSync.questionFloat("Qual o lucro do mês " + contadorMeses +" ?")
    rendaAnual.push(lucroMensal)
    somaDosLucros = somaDosLucros + lucroMensal
}
var quantidadeDeFuncionarios = readlineSync.questionInt("Quantos funcionarios tem na empresa?")
var dividendos = somaDosLucros / quantidadeDeFuncionarios


