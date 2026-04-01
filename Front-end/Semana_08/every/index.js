var carrinho = [
	{
		id: 1,
		nome: "Geladeira Gamer",
		preco: 3000.4,
		quantidade: 2,
		categoria: "Eletro-Doméstico",
		garantia: true,
		cores: ["cinza", "branco"],
	},
	{
		id: 2,
		nome: "Micro-ondas Philco 30L",
		preco: 650.0,
		quantidade: 1,
		categoria: "Eletro-Doméstico",
		garantia: true,
		cores: ["branco", "preto"],
	},
	{
		id: 3,
		nome: "Liquidificador Turbo",
		preco: 180.5,
		quantidade: 3,
		categoria: "Eletro-Doméstico",
		garantia: true,
		cores: ["vermelho", "preto", "branco"],
	},
	{
		id: 4,
		nome: "Notebook Dell Inspiron 15",
		preco: 4500.0,
		quantidade: 1,
		categoria: "Informática",
		garantia: true,
		cores: ["prata", "preto"],
	},
	{
		id: 5,
		nome: "Mouse Gamer RGB",
		preco: 150.99,
		quantidade: 2,
		categoria: "Periféricos",
		garantia: true,
		cores: ["preto"],
	},
	{
		id: 6,
		nome: "Cadeira de Escritório Ergonômica",
		preco: 890.0,
		quantidade: 1,
		categoria: "Móveis",
		garantia: true,
		cores: ["preto", "cinza"],
	},
	{
		id: 7,
		nome: "Monitor LG 27 Polegadas",
		preco: 1200.0,
		quantidade: 2,
		categoria: "Informática",
		garantia: true,
		cores: ["preto"],
	},
];

var ehTodosMesmaCategoria = carrinho.every(
	item => item.categoria === "Eletro-doméstico"
);

function ganharDesconto() {
	var ehTodosMesmaCategoria = carrinho.every(
		item => item.preco >= 10 && item.categoria === "Informática"
	);

	if (ehTodosMesmaCategoria) {
	} else {
	}
	console.log(ehTodosMesmaCategoria);
}
