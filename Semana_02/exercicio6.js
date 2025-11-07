const readlineSync = require('readline-sync');

var senha = readlineSync.question("Digite a sua senha...")

if (senha.length >=16){
    console.log("tamanho ok")
}else if (senha.length >= 8 && senha.length < 16){
    console.log("senha média")
}else {
    console.log("Senha fraca")
}
