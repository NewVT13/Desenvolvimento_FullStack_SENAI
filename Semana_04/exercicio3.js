const readlineSync = require("readline-sync");

var paciente = {};

paciente.nome = readlineSync.question("Qual o nome do paciente? ");
paciente.idade = readlineSync.questionInt("Qual a idade do paciente? ");
paciente.peso = readlineSync.questionFloat("Qual e o peso do paciente? ");
paciente.altura = readlineSync.questionFloat("Qual e a altura do paciente? ");

paciente.saude = {};

paciente.saude.imc = paciente.peso / paciente.altura ** 2;

var imc = paciente.saude.imc;

if (imc < 18.5) {
	paciente.saude.situacao = "Abaixo do peso";
} else if (imc < 25) {
	paciente.saude.situacao = "Peso normal";
} else if (imc < 30) {
	paciente.saude.situacao = "Sobrepeso";
} else if (imc < 35) {
	paciente.saude.situacao = "Obesidade grau 1";
} else if (imc < 40) {
	paciente.saude.situacao = "Obesidade grau 2";
} else {
	paciente.saude.situacao = "Obesidade grau 3 (grave)";
}

paciente.saude.alergias = {};

function perguntarAlergia(texto) {
	var resposta;
	do {
		resposta = readlineSync.question(`${texto} (Sim/Nao): `).toLowerCase();
	} while (resposta !== "sim" && resposta !== "não" && resposta !== "nao");
	{
		return resposta === "sim" ? "Sim" : "Nao";
	}
}
paciente.saude.alergias.frutoDoMar = perguntarAlergia(
	"Alergia a fruto do mar?"
);
paciente.saude.alergias.abelhas = perguntarAlergia("Alergia a abelhas?");
paciente.saude.alergias.pelosAnimais = perguntarAlergia(
	"Alergia a pelos de animais?"
);
paciente.saude.alergias.polen = perguntarAlergia("Alergia a polen?");
paciente.saude.alergias.lactose = perguntarAlergia("Alergia à lactose?");

console.log(paciente);
