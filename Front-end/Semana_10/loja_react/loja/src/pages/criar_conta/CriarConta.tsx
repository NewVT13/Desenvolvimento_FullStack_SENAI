import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import "./CriarConta.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function CriarConta() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [opcao, setOpcao] = useState("");

	const navagate = useNavigate();

	async function cadastrar(event: React.SubmitEvent) {
		try {
			event.preventDefault();

			const resposta = await fetch("http://localhost:3000/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: nome,
					password: senha,
					email: email,
					plan: opcao,
				}),
			});
			if (resposta.ok === false) {
				const dadosErro = await resposta.json();
				throw new Error(dadosErro.error);
			}
			Swal.fire({
				icon: "success",
				title: "Conta criada",
				text: "Agora você poderá fazer o login e desfrutar da plataforma",
				confirmButtonText: "Tudo certo!",
			});
			navagate("/");
		} catch (error) {
			const errorMessage = error ? error.message : "Erro desconhecido";
			Swal.fire({
				icon: "error",
				title: "Ops!!",
				text: errorMessage,
			});
		}
	}

	function alterarNome(event: React.ChangeEvent<HTMLInputElement>) {
		setNome(event.target.value);
	}
	return (
		<div className="container_home">
			<div className="container_esquerda">
				<h2>Crie sua conta</h2>
				<p>Escolha seu plano e comece a anunciar hoje mesmo.</p>
			</div>
			<form onSubmit={cadastrar} className="container_direita">
				<h1>Cadastro</h1>
				<div className="container_input">
					<FaRegUser size={20} color="#ccc" />
					<input
						placeholder="Usuário"
						required
						value={nome}
						onChange={alterarNome}
					/>
				</div>
				<div className="container_input">
					<MdOutlineEmail size={20} color="#ccc" />
					<input
						placeholder="E-mail"
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="container_input">
					<RiLockPasswordLine size={20} color="#ccc" />
					<input
						placeholder="Senha"
						required
						type="password"
						value={senha}
						onChange={e => setSenha(e.target.value)}
					/>
				</div>
				<div className="container_input">
					<select value={opcao} required onChange={e => setOpcao(e.target.value)}>
						<option value="">Selecione um plano...</option>
						<option value="Gratuito">Gratuito - 10 anuncios por mês</option>
						<option value="Bronze">Bronze - 20 anuncios por mês</option>
						<option value="Prata">Prata - 50 anuncios por mês</option>
						<option value="Ouro">Ouro - Anuncios ilimitados</option>
					</select>
				</div>
				<button type="submit" className="botao_logar">
					Cadastrar
				</button>
			</form>
		</div>
	);
}

export default CriarConta;
