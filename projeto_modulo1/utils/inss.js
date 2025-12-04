function calcularINSS(salarioBruto) {
	if (salarioBruto <= 1518) {
		return salarioBruto * 0.075;
	} else if (salarioBruto >= 1518.01 && salarioBruto <= 2793.88) {
		return salarioBruto * 0.09 - 22.77;
	} else if (salarioBruto >= 2793.89 && salarioBruto <= 4190.83) {
		return salarioBruto * 0.12 - 106.59;
	} else if (salarioBruto >= 4190.84 && salarioBruto <= 8157.41) {
		return salarioBruto * 0.14 - 190.4;
	} else if (salarioBruto >= 8157.42) {
		return salarioBruto - 951.62;
	}
}

module.exports = { calcularINSS };
