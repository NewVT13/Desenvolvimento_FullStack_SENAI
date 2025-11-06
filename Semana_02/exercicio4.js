const readlineSync = require('readline-sync');

var negativado = readlineSync.question("Cliente é negativado? ")
var ehnegativado = negativado == "v" ? true : false

var rendaComprovada = readlineSync.question("Cliente tem renda comprovada? ")
var temRendaComprovada = rendaComprovada == "v" ? true : false

var tempoDeCliente = readlineSync.question("E cliente antigo? ")
var temTempoDeCliente = tempoDeCliente == "v" ? true : false

var clientePreferencial = readlineSync.question("E cliente preferencial? ")
var ehClientePreferencial = clientePreferencial == "v" ? true : false

if (ehnegativado) {
    console.log("O emprestimo não vai ser concedido!")
} else {
    temRendaComprovada || 
    (temTempoDeCliente && ehClientePreferencial) 
    ? console.log("Emprestimo aprovado") : console.log("Emprestimo não aprovado")
}