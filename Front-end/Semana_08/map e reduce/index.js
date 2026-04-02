var resumo = [
	{
		id: 1,
		nome: "Action Figure Mago",
		preco: 350.99,
		quantidade: 3,
		peso: 100,
		medida: "Gramas",
		imagem:
			"https://cdn.awsli.com.br/2657/2657807/produto/264961719/imagem_2024-04-24_105320037-removebg-preview-5zy7jfpxlf.png",
	},
	{
		id: 2,
		nome: "Action Figure Guerreiro",
		preco: 425.5,
		quantidade: 2,
		peso: 150,
		medida: "Gramas",
		imagem:
			"https://cdn.awsli.com.br/2657/2657807/produto/264961719/imagem_2024-04-24_105320037-removebg-preview-5zy7jfpxlf.png",
	},
	{
		id: 3,
		nome: "Action Figure Arqueiro",
		preco: 299.99,
		quantidade: 5,
		peso: 80,
		medida: "Gramas",
		imagem:
			"https://cdn.awsli.com.br/2657/2657807/produto/264961719/imagem_2024-04-24_105320037-removebg-preview-5zy7jfpxlf.png",
	},
	{
		id: 4,
		nome: "Action Figure Cavaleiro",
		preco: 489.9,
		quantidade: 1,
		peso: 200,
		medida: "Gramas",
		imagem:
			"https://cdn.awsli.com.br/2657/2657807/produto/264961719/imagem_2024-04-24_105320037-removebg-preview-5zy7jfpxlf.png",
	},
];

var novoResumo = resumo.map(item => {
	item.subTotal = item.preco * item.quantidade;
	return item;
});

novoResumo.forEach(item => {
	var blocoHTML = `
        <tr>
			<td>
				<img
    				src=${item.imagem}
    				width="100px"
				/>
			</td>
			<td>${item.nome}</td>
			<td>R$ ${item.preco}</td>
			<td>${item.quantidade}</td>
            <td>R$ ${item.subTotal}</td>
		</tr>
    `;

	document
		.getElementById("corpo_resumo")
		.insertAdjacentHTML("afterbegin", blocoHTML);
});

var total = novoResumo.reduce((acc, item) => {
	return item.subTotal + acc;
}, 0);

document.getElementById("total").innerText = total;
