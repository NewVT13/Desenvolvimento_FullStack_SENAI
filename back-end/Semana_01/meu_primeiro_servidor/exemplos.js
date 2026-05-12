function calcularImposto(numero) {
	return numero * 0.175;
}

const exibirImposto = calcularImposto(500);
console.log(exibirImposto);

function calcularIRenda(valor) {
	if (valor >= 2000) {
		return valor * 0.175;
	} else if (valor <= 1999) {
		return 0;
	}
}
