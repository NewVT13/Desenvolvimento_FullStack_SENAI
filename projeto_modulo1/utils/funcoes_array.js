const readline = require("readline-sync");
const { calcularINSS } = require("./inss");
const { calcularImpostoRenda } = require("./imposto_renda");
const { calcularSalarioLiquido } = require("./salario_liquido");

function sobreSoftware() {
	console.log("========================================");
	console.log("|==== Sistem de gestao empresarial ====|");
	console.log("========================================");
	console.log("| Autor: Vinicius Tarouquela Moura     |");
	console.log("|Descricao: Um sistema voltado para    |");
	console.log("|automação de RH com objetivo de faci- |");
	console.log("|litar a vida do usuario final. ;-)    |");
	console.log("========================================\n");
	console.log("============================================================");
	console.log("          DESCRIÇÃO DAS FUNÇÕES DO SISTEMA DE GESTÃO       ");
	console.log("============================================================\n");

	console.log("1 - Informações do Software");
	console.log(
		"   ➜ Mostra detalhes sobre a versão, autor e funções do sistema.\n"
	);

	console.log("2 - Calculadora de Salário Líquido");
	console.log("   ➜ Solicita o salário bruto e calcula:");
	console.log("       • Desconto do INSS");
	console.log("       • Desconto do IRRF");
	console.log("       • Salário líquido final");
	console.log("     Também exibe a fórmula usada no cálculo.\n");

	console.log("3 - Editar Dados Básicos da Empresa");
	console.log("   ➜ Permite alterar:");
	console.log("       • Nome da empresa");
	console.log("       • CNPJ");
	console.log("       • Nome fantasia");
	console.log("       • Razão social\n");

	console.log("4 - Editar Endereço da Empresa");
	console.log("   ➜ Permite modificar o endereço completo:");
	console.log("       • Rua, número, bairro");
	console.log("       • Cidade, estado e CEP\n");

	console.log("5 - Editar Dados de Contato");
	console.log("   ➜ Atualiza as informações de comunicação da empresa:");
	console.log("       • Telefone");
	console.log("       • E-mail");
	console.log("       • Site\n");

	console.log("6 - Editar Meta Anual");
	console.log("   ➜ Define a meta de faturamento anual da empresa.\n");

	console.log("7 - Editar Áreas de Atuação");
	console.log("   ➜ Permite adicionar setores de atuação da empresa.\n");

	console.log("8 - Exibir Informações da Empresa");
	console.log("   ➜ Mostra todas as informações cadastradas:");
	console.log("       • Dados básicos");
	console.log("       • Endereço");
	console.log("       • Contato");
	console.log("       • Metas e áreas de atuação\n");

	console.log("9 - Cadastrar Novo Funcionário");
	console.log("   ➜ Registra um novo funcionário, incluindo:");

	console.log("10 - Exibir Quadro de Funcionários");
	console.log("   ➜ Lista todos os funcionários cadastrados no sistema.\n");

	console.log("11 - Exibir Folha de Pagamento");
	console.log("   ➜ Mostra a folha salarial de todos os funcionários:");
	console.log("       • Salário bruto");
	console.log("       • INSS");
	console.log("       • IRRF");
	console.log("       • Salário líquido\n");

	console.log("0 - Sair");
	console.log("   ➜ Encerra o sistema.\n");
	return "";
}

function menuSalarioLiquido() {
	console.log("============================================================");
	console.log("                 CALCULADORA DE SALARIO LIQUIDO            ");
	console.log("============================================================\n");

	var salarioBruto = readline.questionFloat("Digite o salario bruto: R$ ");
	console.log("============================================================");
	console.log("                 DEMONSTRATIVO DE PAGAMENTO                ");
	console.log("============================================================\n");
	console.log(`Salario Bruto:        R$ ${salarioBruto}`);
	console.log(
		`Desconto INSS:        R$ ${calcularINSS(salarioBruto).toFixed(2)}`
	);
	console.log(
		`Desconto IRRF:        R$ ${calcularImpostoRenda(salarioBruto).toFixed(2)}`
	);
	console.log("------------------------------------------------------------");
	console.log(
		`Salario Liquido:      R$ ${calcularSalarioLiquido(salarioBruto).toFixed(
			2
		)}\n`
	);

	console.log("============================================================");
	console.log("                     FORMULA DO CALCULO                     ");
	console.log("============================================================\n");

	console.log("Salario Liquido = Salario Bruto - INSS - IRRF\n");
	console.log(
		`Salario Liquido = ${salarioBruto.toFixed(2)} - ${calcularINSS(
			salarioBruto
		).toFixed(2)} - ${calcularImpostoRenda(salarioBruto).toFixed(2)}\n`
	);

	console.log("============================================================");
	return "";
}

var meses = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

module.exports = { sobreSoftware, menuSalarioLiquido, meses };
