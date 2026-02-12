function realizarLogin() {
	var email = document.getElementById("email").value;
	var senha = document.getElementById("senha").value;

	if (!email) {
		document.getElementById("email").style.borderColor = "tomato";
		return;
	}

	if (!senha) {
		document.getElementById("email").style.borderColor = "tomato";
		return;
	}

	if (email === "senai@gmail.com" && senha === "senai") {
		window.location.href = "home.html";
	} else {
		/*document.getElementById("senha_invalida").innerText =
			"Login ou senha invalidos";*/
		alert("Login ou senha invalidos");
	}
}

function exibirSenha() {
	var tipo_atual = document.getElementById("senha").type;

	if (tipo_atual === "text") {
		document.getElementById("senha").type = "password";
	} else {
		document.getElementById("senha").type = "text";
	}
}
