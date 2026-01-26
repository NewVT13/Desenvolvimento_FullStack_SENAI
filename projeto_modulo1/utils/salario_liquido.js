const { calcularImpostoRenda } = require("./imposto_renda");
const { calcularINSS } = require("./inss");

function calcularSalarioLiquido(salarioBruto) {
	var salarioLiquido =
		salarioBruto -
		calcularImpostoRenda(salarioBruto) -
		calcularINSS(salarioBruto);
	return salarioLiquido;
}

module.exports = { calcularSalarioLiquido };
