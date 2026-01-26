const readlineSync = require('readline-sync');

var produtoSazional = readlineSync.question("Produto e sazional?")
var ehprodutoSazional = produtoSazional == "v" ? true : false // if ternario

var produtoExessoEstoque = readlineSync.question("O produto está em exesso no estoque?")
var temProdutoExessoEstoque = produtoExessoEstoque == "v" ? true : false

var precoProduto = readlineSync.questionFloat("Qual o valor da compra? ")

var descontoEspecial = (ehprodutoSazional && temProdutoExessoEstoque) || 
precoProduto >= 80 ? "tem desconto" : "Não tem desconto"


console.log(descontoEspecial)