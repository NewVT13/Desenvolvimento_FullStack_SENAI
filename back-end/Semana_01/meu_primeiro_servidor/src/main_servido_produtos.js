import express, { response } from "express";
import cors from "cors";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import Produto from "./classes/Produto.js";

const app = express();
const PORTA_APP = 8888;

let contadorProdutos = 1;

app.use(cors());
app.use(express.json());

// configuração do banco de dados
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { produtos: [], contadorProdutos: 1 });
await db.read();
////////////////////////////////////////////////////////////
app.get("/produtos", (requeste, response) => {
	response.send(db.data.produtos);
});

app.get("/produtos/:id", (request, response) => {
	const idProdutos = Number(request.params.id);
	const produtos = db.data.produtos;

	const produtoEncontrado = produtos.find(produto => produto.id === idProdutos);

	if (!produtoEncontrado) {
		response.status(404).send({ error: "Produto não encontrado na base" });
	} else {
		response.send(produtoEncontrado);
	}
});

app.post("/produtos", (request, response) => {
	const meusDados = request.body;

	if (!meusDados.nome || typeof meusDados.nome !== "string") {
		response.status(400).send({ error: "Nome é obrigatório" });
	} else if (typeof meusDados.preco !== "number" || meusDados.preco <= 0) {
		response.status(400).send({ error: "Preço deve ser númerico e maior 0" });
	} else if (typeof meusDados.estoque !== "number" || meusDados.estoque < 0) {
		response
			.status(400)
			.send({ error: "Estoque dever ser númerico e no mínimo 0" });
	} else if (typeof meusDados.ativo !== "boolean") {
		response.status(400).send({ error: "O status deve sert um booleano" });
	} else {
		const produto = new Produto(
			meusDados.nome,
			meusDados.preco,
			meusDados.ativo,
			meusDados.estoque
		);
		produto.criar();
		response.status(201).send({ data: produto });
	}
});

app.listen(PORTA_APP, () => {
	console.log("Servidor Rodando");
});
