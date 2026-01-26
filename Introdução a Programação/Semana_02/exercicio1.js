const readlineSync = require('readline-sync');

function calcularDesconto(totalCompra) {
    if (totalCompra >= 500) {
        console.log("Voce vai receber 20% de desconto.")
        return totalCompra - (totalCompra * 0.2)
    } else if (totalCompra >= 200) {
        console.log("Voce vai receber 10% de desconto.")
        return totalCompra - (totalCompra * 0.1)
    } else {
        console.log("Você não tem desconto!")
        return totalCompra
    }
}

var totalCompra = readlineSync.questionFloat("Qual o valor da compra? ")

console.log(calcularDesconto(totalCompra))