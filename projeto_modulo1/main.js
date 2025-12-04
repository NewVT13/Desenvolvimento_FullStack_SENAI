const readline = require("readline-sync");
const {
	sobreSoftware,
	menuSalarioLiquido,
	meses,
} = require("./utils/funcoes_array");
const { calcularImpostoRenda } = require("./utils/imposto_renda");
const { calcularINSS } = require("./utils/inss");
const { calcularSalarioFerias } = require("./utils/salario_ferias");
const { calcularSalarioLiquido } = require("./utils/salario_liquido");
const { calcularFGTS } = require("./utils/fgts");

var empresa = {
	nome: "",
	razao_social: "",
	cnpj: "",
	inscricao_estadual: "",
	areas_atuacao: [],
	meta_anual: [],
	dataFundacao: "",
	endereco: {
		logradouro: "",
		numero: "",
		complemento: "",
		bairro: "",
		cidade: "",
		estado: "",
		cep: "",
	},
	contato: {
		telefone: "",
		email: "",
		site: "",
	},
	funcionarios: [],
};

function exibirMenu() {
	var loop = true;
	while (loop == true) {
		console.log(`=======================================
       Menu do sistema de gestão
=======================================
1 - Informações do software
2 - Calculadora de Salário Líquido
3 - Editar Dados Básicos da Empresa
4 - Editar Endereço da Empresa
5 - Editar Dados de Contato
6 - Editar Meta Anual
7 - Editar Áreas de Atuação
8 - Exibir Informações da Empresa
9 - Cadastrar Novo Funcionário
10 - Exibir Quadro de Funcionários
11 - Exibir Folha de Pagamento
0 - Sair

========================================`);
		var resposta = readline.questionInt("Qual opcao vc deseja? ");
		if (resposta == 1) {
			console.log(sobreSoftware());
		} else if (resposta == 2) {
			console.log(menuSalarioLiquido());
		} else if (resposta == 3) {
			empresa.nome = readline.question("Qual e o nome da empresa? ");
			empresa.razao_social = readline.question("Qual e a razao social? ");
			empresa.cnpj = readline.question("Qual e o CNPJ? ");
			empresa.inscricao_estadual = readline.question(
				"Qual e a inscricao estadual? "
			);
			empresa.dataFundacao = readline.question(
				"Qual e a data de fundacao? DD/MM/AAAA "
			);
		} else if (resposta == 4) {
			empresa.endereco.logradouro = readline.question("Qual e o Logradouro? ");
			empresa.endereco.numero = readline.question("Qual e o numero? ");
			empresa.endereco.complemento = readline.question(
				"Qual e o complemento? "
			);
			empresa.endereco.bairro = readline.question("Qual e o bairro? ");
			empresa.endereco.cidade = readline.question("Qual e a cidade? ");
			empresa.endereco.estado = readline.question("Qual e o estado ");
			empresa.endereco.cep = readline.question("Qual e o CEP? ");
		} else if (resposta == 5) {
			empresa.contato.telefone = readline.question("Qual e o telefone? ");
			empresa.contato.email = readline.question("Qual e o e-mail? ");
			empresa.contato.site = readline.question("Qual e o site? ");
		} else if (resposta == 6) {
			contador = 1;
			for (contador; contador <= 12; contador++) {
				empresa.meta_anual.push(
					readline.questionFloat(`Qual a meta para o mes ${contador}? `)
				);
			}
		} else if (resposta == 7) {
			contador = 1;
			for (contador; contador <= 4; contador++) {
				empresa.areas_atuacao.push(
					readline.question("Qual a area de atuacao? ")
				);
			}
		} else if (resposta == 8) {
			console.log(
				"============================================================"
			);
			console.log("         📁 CADASTRO DE EMPRESA 📁");
			console.log(
				"============================================================\n"
			);

			console.log("📌 DADOS DA EMPRESA:");
			console.log(`Nome Fantasia: ${empresa.nome}`);
			console.log(`Razão Social: ${empresa.razao_social}`);
			console.log(`CNPJ: ${empresa.cnpj}`);
			console.log(`Inscrição Estadual: ${empresa.inscricao_estadual}`);
			console.log(`Data de Fundação: ${empresa.dataFundacao}\n`);

			console.log(" ÁREAS DE ATUAÇÃO:");
			var contador = 0;
			for (contador; contador < 4; contador++) {
				console.log(`✔️  ${empresa.areas_atuacao[contador]}`);
			}
			console.log("");

			console.log("📊 METAS ANUAIS (POR MÊS):");
			let total = 0;
			var contador = 0;
			for (contador; contador < empresa.meta_anual.length; contador++) {
				console.log(`${meses[contador]}: R$ ${empresa.meta_anual[contador]}`);
				total += empresa.meta_anual[contador];
			}

			console.log(`\nTotal Anual: R$ ${total}\n`);

			console.log("📍 ENDEREÇO:");
			console.log(`Logradouro: ${empresa.endereco.logradouro}`);
			console.log(`Bairro: ${empresa.endereco.bairro}`);
			console.log(`${empresa.endereco.cidade} - ${empresa.endereco.estado}`);
			console.log(`CEP: ${empresa.endereco.cep}\n`);

			console.log("☎️ CONTATO:");
			console.log(`Telefone: ${empresa.contato.telefone}`);
			console.log(`E-mail: ${empresa.contato.email}`);
			console.log(`Site: ${empresa.contato.site}\n`);

			console.log(
				"============================================================"
			);
		} else if (resposta == 9) {
			var funcionario = {
				nome: readline.question("Qual e o nome do funcionario? "),
				cpf: readline.question("Qual e o CPF do funcionario? "),
				genero: readline.question("Qual e o genero do funcionario? "),
				estadoCivil: readline.question(
					"Qual e o estado civil do funcionario? "
				),
				idade: readline.questionInt("Qual e a idade do funcionario? "),
				salario_bruto: readline.questionFloat(
					"Qual e o salario bruto do funcionario? "
				),
			};
			empresa.funcionarios.push(funcionario);
		} else if (resposta == 10) {
			console.log("=== Funcionários Cadastrados ===");

			console.log("👥 FUNCIONÁRIOS: \n");

			console.log(`Total de Funcionários: ${empresa.funcionarios.length}\n`);

			console.log("🥇 Primeiro Funcionário:\n");

			console.log(`Nome: ${empresa.funcionarios[0].nome}`);
			console.log(`Salario: ${empresa.funcionarios[0].salario_bruto}\n`);

			console.log("🏁 Último Funcionário:\n");

			var ultimoFuncionario = empresa.funcionarios.length - 1;

			console.log(`Nome: ${empresa.funcionarios[ultimoFuncionario].nome}`);
			console.log(
				`Salario: ${empresa.funcionarios[ultimoFuncionario].salario_bruto}\n`
			);

			console.log("📋 Lista Completa: \n");

			var contador = 0;

			for (contador; contador <= ultimoFuncionario; contador++) {
				console.log(`Nome: ${empresa.funcionarios[contador].nome}`);
				console.log(
					`Salario: ${empresa.funcionarios[contador].salario_bruto}\n`
				);
			}
			console.log("================================");
		} else if (resposta == 11) {
			var data_atual = new Date().toLocaleDateString();
			console.log(
				"============================================================"
			);
			console.log(`📄 DETALHAMENTO POR FUNCIONÁRIO:  ${data_atual} `);
			console.log(
				"============================================================\n"
			);
			console.log(`✨ ${empresa.nome} CNPJ:${empresa.cnpj}`);
			console.log(
				"============================================================\n"
			);

			var totalBruto = 0;
			var totalINSS = 0;
			var totalIRRF = 0;
			var totalLiquido = 0;
			var totalFGTS = 0;
			var contador = 0;

			for (contador; contador < empresa.funcionarios.length; contador++) {
				var funcionario = empresa.funcionarios[contador];
				var descontoINSS = calcularINSS(funcionario.salario_bruto);
				var descontoImpostoDeRenda = calcularImpostoRenda(
					funcionario.salario_bruto - descontoINSS
				);
				var salarioLiquido = calcularSalarioLiquido(funcionario.salario_bruto);
				var fgts = calcularFGTS(funcionario.salario_bruto);
				var ferias = calcularSalarioFerias(funcionario.salario_bruto);

				totalBruto += funcionario.salario_bruto;
				totalINSS += descontoINSS;
				totalIRRF += descontoImpostoDeRenda;
				totalLiquido += salarioLiquido;
				totalFGTS += fgts;

				console.log(`${contador + 1}. 🧑 ${funcionario.nome}`);
				console.log("");
				console.log(
					`   💰 Salário Bruto:       R$ ${funcionario.salario_bruto.toFixed(
						2
					)}`
				);
				console.log(`   🏛️ Desconto INSS:       R$ ${descontoINSS.toFixed(2)}`);
				console.log(
					`   🧾 Desconto IRRF:       R$ ${descontoImpostoDeRenda.toFixed(2)}`
				);
				console.log(
					"------------------------------------------------------------"
				);
				console.log(
					`   💵 Salário Líquido:     R$ ${salarioLiquido.toFixed(2)}`
				);
				console.log(`   🏦 FGTS (8%):            R$ ${fgts.toFixed(2)}`);
				console.log(`   🌴 Férias (Liq + 1/3):   R$ ${ferias.toFixed(2)}`);
				console.log(
					"============================================================\n"
				);
			}
			console.log("📊 RESUMO TOTAL DA FOLHA");
			console.log(
				"============================================================"
			);
			console.log(`💰 Total Salários Brutos:   R$ ${totalBruto.toFixed(2)}`);
			console.log(`🏛️ Total INSS:              R$ ${totalINSS.toFixed(2)}`);
			console.log(`🧾 Total IRRF:              R$ ${totalIRRF.toFixed(2)}`);
			console.log(
				`💵 Total Líquido a Pagar:   R$ ${totalLiquido.toFixed(2)}\n`
			);

			console.log("📌 INFORMAÇÕES ADICIONAIS:");
			console.log(`🏦 Total FGTS (8%):          R$ ${totalFGTS.toFixed(2)}`);
			console.log(
				"============================================================\n"
			);
		} else if (resposta == 0) {
			loop = false;
		} else {
			console.log("digite um numero valido");
		}
	}
	return "";
}

console.log(exibirMenu());
