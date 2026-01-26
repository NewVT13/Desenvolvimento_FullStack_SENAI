const readlineSync = require('readline-sync');

function mensagemSaudacao() {
    var nome = readlineSync.question("Qual e o seu nome? ")
    console.log("Olá " + nome)
}


mensagemSaudacao()