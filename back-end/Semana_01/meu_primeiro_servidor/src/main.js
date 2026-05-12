console.log("Funcionando");
import express from "express";
// const express = require("express"); import em commonjs

const app = express();
const PORTA_APP = 8888;

app.get("/bemvindo", (request, response) => {
	response.send("Entrei na sala bem vindo");
});

app.listen(PORTA_APP, () => {
	console.log("Servidor Rodando");
});
