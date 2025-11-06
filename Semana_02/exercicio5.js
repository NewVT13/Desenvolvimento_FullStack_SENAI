const readlineSync = require('readline-sync');

var ladoA = readlineSync.questionFloat("Digite o Lado A")
var ladoB = readlineSync.questionFloat("Digite o Lado B")
var ladoC = readlineSync.questionFloat("Digite o Lado C")

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("Equilatero")
} else if (ladoA != ladoB && ladoB != ladoC){
    console.log("Escaleno")
}else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
    console.log("Isosceles")
}