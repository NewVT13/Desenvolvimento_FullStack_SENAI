const readlineSync = require("readline-sync");

var loop = true;
var pacientes = [];

while (loop == true) {
	console.log(
		"Digite 1 para cadastrar \nDigite 2 para consulta \nDigite 3 para sair"
	);
	var resposta = readlineSync.questionInt(`Qual e a opcao desejada? `);
	if (resposta == 1) {
		var nome_paciente = readlineSync.question("Qual o nome do paciente? ");
		var sintoma = readlineSync.question("Qual o sintoma");
		var paciente = {
			nome: nome_paciente,
			sintoma: sintoma,
		};
		pacientes.push(paciente);
	} else if (resposta == 2) {
		console.log(pacientes);
	} else if (resposta == 3) {
		loop = false;
	} else {
		console.log("digite uma opção válida");
	}
}
