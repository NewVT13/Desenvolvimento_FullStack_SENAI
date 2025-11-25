const readlineSync = require("readline-sync");

var aluno = {};

aluno.nome = readlineSync.question("Qual o nome do aluno? ");
aluno.matricula = readlineSync.questionInt("Qual a matricula? ");
aluno.curso = readlineSync.question("Qual e o curso? ");

var soma_notas = 0;
var contador = 1;

for (contador; contador <= 4; contador++) {
	var nota = readlineSync.questionFloat(
		`Qual e a nota do ${contador}º bimestre? `
	);
	soma_notas = nota + soma_notas;
}

aluno.media = soma_notas / 4;

if (aluno.media >= 7 && aluno.media <= 10) {
	aluno.situacao = "Aprovado";
	console.log(`O ${aluno.nome} foi aprovado`);
} else {
	aluno.situacao = "Reprovado";
	console.log(`O ${aluno.nome} foi reprovado`);
}

console.log(aluno);
