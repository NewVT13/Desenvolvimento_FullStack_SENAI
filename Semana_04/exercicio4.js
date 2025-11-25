const readlineSync = require("readline-sync");

var tamanho_lista = readlineSync.questionInt(
	"Quantos produtos você quer comprar?"
);
var contador = 1;
var produtos = [];

for (contador; contador <= tamanho_lista; contador++) {
	var produto = readlineSync.question("Qual o nome do produto?");
	var quantidade = readlineSync.questionFloat("Qual a quantidade?");
	var item_produto = {
		nome: produto,
		quantidade: quantidade,
	};
	produtos.push(item_produto);
}

var quantidade_produtos = produtos.lenght;

if (quantidade_produtos > 2) {
	console.log(`Primeira informacao: ${produtos[0].nome}`);
	console.log(`Ultima informacao: ${produtos[quantidade_produtos - 1].nome}`);

	var posicao_produto_meio = parseInt((quantidade_produtos - 1) / 2);

	console.log(`Meio informacao: ${produtos[posicao_produto_meio].nome}`);
} else if (quantidade_produtos == 2) {
	console.log(`Primeira informacao: ${produtos[0].nome}`);
	console.log(`Ultima informacao: ${produtos[quantidade_produtos - 1].nome}`);
} else if (quantidade_produtos == 1) {
	console.log(`Primeira informacao: ${produtos[0].nome}`);
} else {
	console.log("Nao tem item na lista");
}
