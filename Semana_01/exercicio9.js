const readlineSync = require('readline-sync');

var notaUm = readlineSync.questionFloat("Qual é a primeira nota? ")
var notaDois = readlineSync.questionFloat("Qual é a Segunda nota? ")
var notaTres = readlineSync.questionFloat("Qual é a Terceira nota? ")
var notaQuatro = readlineSync.questionFloat("Qual é a Quarta nota? ")
var media = (notaUm + notaDois + notaTres + notaQuatro) / 4

function exibirMensagem(media) {
    if (media >= 6) {
        return "parabéns voce passou!"
    } else {
        return "Você precisa se recuperar!"
    }
}

console.log(exibirMensagem(media))