console.log("Funcionando");
import express, { response } from "express";
import cors from "cors";
// const express = require("express"); import em commonjs

const app = express();
const PORTA_APP = 8888;
const mensagens = [
	"Acredite no seu potencial — grandes conquistas começam com um único passo.",
	"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
	"Não espere pela oportunidade perfeita. Crie-a.",
	"Cada dia é uma nova chance de ser melhor do que ontem.",
	"A persistência transforma o impossível em possível.",
	"Você é mais forte do que pensa e mais capaz do que imagina.",
	"O único limite que existe é aquele que você mesmo cria.",
	"Grandes resultados exigem grandes comprometimentos.",
	"Errar faz parte do processo — desistir é a única derrota real.",
	"Foque no progresso, não na perfeição.",
];

app.use(cors());

app.get("/bemvindo", (request, response) => {
	response.send("Entrei na sala bem vindo");
});
app.get("/ola", (request, response) => {
	response.send({ string: "você esta na sala olá" });
});
app.get("/mensagem", (request, response) => {
	const numeroAleatorio = parseInt(Math.random() * mensagens.length);
	response.send({
		mensagem: mensagens[numeroAleatorio],
	});
});
app.get("/sorteio", (request, response) => {
	const nomesRecebidos = request.query.split(",");
	const numeroAleatorio = parseInt(Math.random() * nomesRecebidos.length);
	response.send({ resultado: nomesRecebidos[numeroAleatorio] });
});

app.listen(PORTA_APP, () => {
	console.log("Servidor Rodando");
});
