const readlineSync = require('readline-sync');

var nomeTitular = readlineSync.question('Qual e o numero do cartao? ')
var numeroCartao = readlineSync.question('Qual o número do cartao? ')
var dataDeValidade = readlineSync.question('Qual e a data de validade (MM/AA) ?')
var cvv = readlineSync.question('Qual o CVV? com 3 ou 4 digitos')

console.log('Dados do cartao+ o cartao pertence a'+ nomeTitular)
console.log(' numero: '+ numeroCartao)
console.log(' data de validade: '+ dataDeValidade)
console.log(' codigo de seguranca: '+ cvv )