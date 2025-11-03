const readlineSync = require('readline-sync');

var codigoDoProduto = readlineSync.questionInt("Qual é o codigo do produto? ")
var quantidadeDoProduto = readlineSync.questionInt("Qual é a quantidade? ")

function calcularPreco(codigoDoProduto, quantidadeDoProduto) {
    if (codigoDoProduto == 100) {
        return 1.20 * quantidadeDoProduto
    } else if (codigoDoProduto == 101) {
        return 1.30 * quantidadeDoProduto
    } else if (codigoDoProduto == 102) {
        return 1.50 * quantidadeDoProduto
    } else if (codigoDoProduto == 103) {
        return 1.20 * quantidadeDoProduto
    } else if (codigoDoProduto == 104) {
        return 1.30 * quantidadeDoProduto
    } else if (codigoDoProduto == 105) {
        return 1 * quantidadeDoProduto
    }
}

console.log(calcularPreco(codigoDoProduto, quantidadeDoProduto))