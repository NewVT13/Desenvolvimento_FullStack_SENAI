const produtos = [
	{
		id: 0,
		imagem:
			"https://cdn.awsli.com.br/600x450/681/681419/produto/238644608/pimenta-o-vermelho-10kg-1gks5c1n3c.png",
		nome: "Pimentão vermelho",
		peso: 225,
		preco: 2.02,
	},
	{
		id: 1,
		imagem:
			"https://ibassets.com.br/ib.item.image.large/l-efa2c0a943f24bd884c9a1aed57a2c7b.jpeg",
		nome: "Feijão verde",
		peso: 250,
		preco: 2.5,
	},
	{
		id: 2,
		imagem:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uoNrXkhg9eYXbLAkV9epi43ojXGIyKvcOA&s",
		nome: "Pepino Japônes",
		peso: 150,
		preco: 1.27,
	},
	{
		id: 3,
		imagem:
			"https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/10-kg-cebola-branca-natural-e-fresca-da-jacobina-shopping/oliststore/mgl206y8c0ddfw27/9ebb2110d8fadf45e7082d3d4b44ffad.jpeg",
		nome: "Cebola Branca",
		peso: 200,
		preco: 0.7,
	},
	{
		id: 4,
		imagem:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCuyird4GPGaxa7AO9plyOLGi_NlwaLN5Uw&s",
		nome: "Cenouras",
		peso: 200,
		preco: 0.48,
	},
];

produtos.forEach(function (meuItem) {
	const meusItensHTML = `<div class="produto">
			<img src="${meuItem.imagem}" />
			<div class="produto_info">
				<h2>${meuItem.nome}</h2>
				<p>cada - aproximadamente ${meuItem.peso}g</p>
			</div>
			<span>La Manna Fresh</span>
			<p class="produto_preco">R$ ${meuItem.preco.toFixed(2)}</p>
			<div class="conteiner_botoes">
				<div>
					<button>-</button>
					<button>+</button>
				</div>
				<button class="botao_add">Add 1 por ${meuItem.preco.toFixed(2)}</button>
			</div>
		</div> `;
	document
		.getElementById("lista")
		.insertAdjacentHTML("beforeend", meusItensHTML);
});
