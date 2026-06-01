import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";

class Produto {
	constructor(nome, preco, ativo, estoque) {
		this.nome = nome;
		this.preco = preco;
		this.ativo = ativo;
		this.estoque = estoque;
	}

	async criar() {
		const adapter = new JSONFile("db.json");
		const db = new Low(adapter, { produtos: [], contadorProdutos: 1 });
		await db.read();

		db.data.produtos.push({
			id: db.data.contadorProdutos++,
			nome: this.nome,
			preco: this.preco,
			ativo: this.ativo,
			estoque: this.estoque,
		});
		await db.write();
	}
}

export default Produto;
