function calcular() {
	var altura = parseFloat(document.getElementById("altura").value);
	var peso = parseFloat(document.getElementById("peso").value);
	//console.log(typeof peso);
	var resultado = peso / altura ** 2;
	//alert(resultado);
	//document.getElementById("resultado").innerText = resultado.toFixed(2);

	document.getElementById("resultado").style.display = "flex";
	document.getElementById("resultado_imc").innerText = resultado.toFixed(2);

	document.getElementById("resultado_descricao").innerText =
		pegarDescricaoIMC(resultado);

	function pegarDescricaoIMC(imc) {
		if (imc <= 18.5) {
			return "Abaixo do peso";
		} else if (imc > 18.5 && imc <= 24.9) {
			return "Peso normal";
		} else if (imc >= 25 && imc <= 29.9) {
			return "Sobrepeso";
		} else if (imc >= 30.0 && imc <= 34.9) {
			return "Obesidade Grau I";
		} else if (imc >= 35.0 && imc <= 39.9) {
			return "Obesidade Grau II";
		} else {
			return "Obesidade Grau III";
		}
	}
}

function resetForm() {
	document.getElementById("altura").value = "";
	document.getElementById("peso").value = "";
	document.getElementById("resultado").style.display = "none";
}
