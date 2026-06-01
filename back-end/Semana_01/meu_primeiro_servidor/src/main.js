import express, { request, response } from "express";
import cors from "cors";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import Cliente from "./classes/Cliente.js";

const app = express();
const PORTA_APP = 8888;

app.use(cors());
app.use(express.json());

const adapter = new JSONFile("db_clientes.json");
const db = new Low(adapter, { clientes: [], contador_clientes: 1 });
await db.read();

app.get("/clientes", (request, response) => {
	response.send(db.data.clientes);
});
app.get("/clientes/:id", (request, response) => {
	const idCliente = Number(request.params.id);
	const clientes = db.data.clientes;

	const clienteEncontrado = clientes.find(cliente => cliente.id === idCliente);
	response.send(clienteEncontrado);
});
app.post("/clientes", (request, response) => {
	const meusDados = request.body;

	if (!meusDados.nome || typeof meusDados.nome !== "string") {
		response.status(400).send({ error: "Nome é obrigatório" });
	} else if (
		!meusDados.salario ||
		typeof meusDados.salario !== "number" ||
		meusDados.salario < 0
	) {
		response.status(400).send({ error: "O salario precisa ser positivo" });
	} else if (typeof meusDados.habilitado !== "boolean") {
		response.status(400).send({ error: "O valor precisa ser True ou False" });
	} else {
		const cliente = new Cliente(
			meusDados.nome,
			meusDados.salario,
			meusDados.habilitado
		);
		cliente.criar();
		response.status(201).send({ data: cliente });
	}
});

app.delete("/clientes/:id", async (request, response) => {
	const id = Number(request.params.id);
	const clienteExiste = db.data.clientes.some(cliente => cliente.id === id);

	if (!clienteExiste) {
		return response.status(404).send({ error: "Cliente não encontrado" });
	}

	const clientesFiltrados = db.data.clientes.filter(
		cliente => cliente.id !== id
	);
	db.data.clientes = clientesFiltrados;
	await db.write();

	response.send({ mensagem: "Cliente deletado com sucesso" });
});

app.put("/clientes/:id", async (request, response) => {
	const idCliente = Number(request.params.id); // 5
	const dadosNoBody = request.body; // {nome: "joaquim"}

	/* ETAPA  1 - VALIDICACAO */
	if (
		dadosNoBody.nome !== undefined &&
		(typeof dadosNoBody.nome !== "string" || dadosNoBody.nome.trim() === "")
	) {
		response.status(400).send({
			error: "O nome não pode ser vazio",
		});
		return;
	}
	if (
		dadosNoBody.salario !== undefined &&
		(typeof dadosNoBody.salario !== "Number" || dadosNoBody.salario < 0)
	) {
		response.status(400).send({ error: "O salario precisa ser maior do que 0" });
		return;
	}
	if (
		dadosNoBody.habilitado !== undefined &&
		typeof dadosNoBody.habilitado !== "boolean"
	) {
		response.status(400).send({ error: "A habilitação deve ser um booleano" });
		return;
	}

	const clienteEncontrado = db.data.clientes.some(
		cliente => cliente.id === idCliente
	);

	if (!clienteEncontrado) {
		response.status(404).send({ error: "Cliente nao encontrado" });
	} else {
		// ETAPA 2 - MAPEAMENTO
		const clientesAlterados = db.data.clientes.map(cliente => {
			if (cliente.id === idCliente) {
				if (dadosNoBody.nome !== undefined) {
					cliente.nome = dadosNoBody.nome;
				}

				if (dadosNoBody.salario !== undefined) {
					cliente.salario = dadosNoBody.salario;
				}

				if (dadosNoBody.habilitado !== undefined) {
					cliente.habilitado = dadosNoBody.habilitado;
				}
			}
			return cliente;
		});

		// ETAPA 3 - PERSISTENCIA
		db.data.clientes = clientesAlterados;
		await db.write();

		response.send({ messagem: "Dados atualizados com sucesso" });
	}
	/*FIM DA VALIDACAO */
});
app.listen(PORTA_APP, () => {
	console.log("Rodando o server");
});
