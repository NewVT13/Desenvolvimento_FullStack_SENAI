import React, { useState } from "react";
import "./Login.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

function Login() {
	const [user, setUser] = useState("");
	const [senha, setSenha] = useState("");

	const navegate = useNavigate();

	async function realizarLogin(event: React.SubmitEvent) {
		try {
			event.preventDefault();

			const resposta = await fetch("http://localhost:3000/auth/login", {
				method: "post",
				body: JSON.stringify({
					email: user,
					password: senha,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (resposta.ok === false) {
				const dadosErro = await resposta.json();
				throw new Error(dadosErro.resposta);
			}

			Swal.fire({
				icon: "info",
				title: "Usuário encontrado",
				text: "Seu usuário foi encontrado e vc já será redirecionado",
			});
			navegate("anuncio");
		} catch (error) {
			const errorMessage = error ? error.message : "Erro desconhecido";
			Swal.fire({
				icon: "error",
				title: "Erro ao realizar login",
				text: errorMessage,
			});
		}
	}
	return (
		<div className="container_home">
			<div className="container_esquerda">
				<h2>Welcome back!</h2>
				<p>you can sign in to acess with yout existing account.</p>
			</div>
			<form onSubmit={realizarLogin} className="container_direita">
				<h1>Sing in</h1>
				<div className="container_input">
					<FaRegUser size={20} color="#ccc" />
					<input
						value={user}
						onChange={e => setUser(e.target.value)}
						placeholder="User email"
					/>
				</div>
				<div className="container_input">
					<RiLockPasswordLine size={20} color="#ccc" />
					<input
						type="password"
						placeholder="Password"
						value={senha}
						onChange={e => setSenha(e.target.value)}
					/>
				</div>
				<button type="submit" className="botao_logar">
					Sing In
				</button>
				<p>
					new here?{" "}
					<Link className="link_criar_conta" to="/criar_conta">
						Create an account
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Login;
