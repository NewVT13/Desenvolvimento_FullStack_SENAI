const readlineSync = require('readline-sync');

var contador = 1

while (contador <= 6) {
    var cidade = readlineSync.question("Qual e a sua cidade? ")
    var estado = readlineSync.question("Qual e o estado? ")
    console.log("A sua cidade é: " + cidade + "/" + estado)
    contador++
}