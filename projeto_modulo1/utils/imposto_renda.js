function calcularImpostoRenda(salarioBruto) {
	if (salarioBruto <= 2428.8) {
		return 0;
	} else if (salarioBruto >= 2428.81 && salarioBruto <= 2826.65) {
		return salarioBruto * 0.075 - 182.16;
	} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
		return salarioBruto * 0.15 - 394.16;
	} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
		return salarioBruto * 0.225 - 675.49;
	} else if (salarioBruto >= 4664.69) {
		return salarioBruto * 0.275 - 908.73;
	}
}

module.exports = { calcularImpostoRenda };
