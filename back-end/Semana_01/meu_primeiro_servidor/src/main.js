import express, { request, response } from "express";
import cors from "cors";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";

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
	const cliente = request.body;

	if (!cliente.nome || typeof cliente.nome !== "string") {
		response.status(400).send({ error: "Nome é obrigatório" });
	} else if (
		!cliente.salario ||
		typeof cliente.salario !== "number" ||
		cliente.salario < 0
	) {
		response.status(400).send({ error: "O salario precisa ser positivo" });
	} else if (typeof cliente.habilitado !== "boolean") {
		response.status(400).send({ error: "O valor precisa ser True ou False" });
	} else {
		const novoCliente = { id: db.data.contador_clientes++, ...cliente };
		db.data.clientes.push(novoCliente);
		db.write();

		response.status(201).send({ data: cliente });
	}
});

app.listen(PORTA_APP, () => {
	console.log("Rodando o server");
});
