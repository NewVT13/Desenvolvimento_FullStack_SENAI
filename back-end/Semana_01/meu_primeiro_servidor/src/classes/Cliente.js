import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";

class Cliente {
	constructor(nome, salario, habilitado) {
		this.nome = nome;
		this.salario = salario;
		this.habilitado = habilitado;
	}
	async criar() {
		const adapter = new JSONFile("db_clientes.json");
		const db = new Low(adapter, { clientes: [], contador_clientes: 1 });
		await db.read();

		db.data.clientes.push({
			id: db.data.contador_clientes++,
			nome: this.nome,
			salario: this.salario,
			habilitado: this.habilitado,
		});
		await db.write();
	}
}

export default Cliente;
