const { calcularImpostoRenda } = require("./imposto_renda");
const { calcularINSS } = require("./inss");

calculoFerias = 0;

function calcularSalarioFerias(salarioBruto) {
	var calculoFerias = salarioBruto * 0.3333 + salarioBruto;
	return (
		calculoFerias -
		calcularImpostoRenda(salarioBruto) -
		calcularINSS(salarioBruto)
	);
}
console.log(calcularSalarioFerias(3000));

module.exports = { calcularSalarioFerias };
