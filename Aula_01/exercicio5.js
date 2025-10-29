const readlineSync = crequire('readline-sync');

var precoProduto = readlineSync.question("Qual o valor do produto? ")
var precoFrete = readlineSync.question("Qual o valor do frete?")
var precoTotal = Number(precoFrete) + Number(precoProduto)

console.log("O valor total da sua compra será: " + precoTotal)