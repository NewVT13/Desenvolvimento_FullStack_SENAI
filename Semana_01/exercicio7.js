const readlineSync = require('readline-sync');

function calcularImc (altura, peso){
    return peso / (altura * altura)
}

console.log(calcularImc(1.70, 75))

