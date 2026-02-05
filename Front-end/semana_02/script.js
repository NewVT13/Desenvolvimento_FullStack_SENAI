function calcular() {
	var altura = parseFloat(document.getElementById("altura").value);
	var peso = parseFloat(document.getElementById("peso").value);
	//console.log(typeof peso);
	var resultado = peso / altura ** 2;
	//alert(resultado);
	document.getElementById("resultado").innerText = resultado;
}
