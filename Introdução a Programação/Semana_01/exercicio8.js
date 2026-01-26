const readlineSync = require('readline-sync');

function verificarVogal() {
    var digitador = readlineSync.question("Digite uma letra: ")
    if (digitador.toUpperCase() == "A" ||
        digitador.toUpperCase() == "E" || 
        digitador.toUpperCase() == "I" || 
        digitador.toUpperCase() == "O" || 
        digitador.toUpperCase() == "U"
    ) {
        console.log("Essa letra é uma vogal!")
    }else{
        console.log("Essa letra é uma consoante!")
    }
}

console.log(verificarVogal())