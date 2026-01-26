const readlineSync = require('readline-sync');

function alterarNotas(inserirNota) {
    if (inserirNota >= 9) {
        return "A - Aprovado"
    } else if (inserirNota >= 7 && inserirNota <= 8.9) {
        return "B - Bom"
    } else if (inserirNota >= 5 && inserirNota <= 6.9) {
        return "C - Suficiente"
    } else {
        return "D - Reprovado"
    }
}

var inserirNota = readlineSync.questionFloat("Qual e a nota do aluno? ")

console.log("Sua nota foi " + alterarNotas(inserirNota))