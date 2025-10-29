const readlineSync = require('readline-sync');

let cidade = readlineSync.question('Qual a sua cidade? ')
let siglaDoEstado = readlineSync.question('Qual a sigla do estado? ')

console.log('Eu moro em '+ cidade+'/'+siglaDoEstado)