const readlineSync = require('readline-sync');
var quantasVezesVaiContar = readlineSync.questionInt("Até quanto vc quer que conte? ")
var contador = 1

for(contador; contador <= quantasVezesVaiContar; contador++){
    console.log("Agora é " + contador)
}