import { FaRegUser } from "react-icons/fa";
import "./CriarConta.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

function CriarConta() {
	return (
		<div className="container_home">
			<div className="container_esquerda">
				<h2>Crie sua conta</h2>
				<p>Escolha seu plano e comece a anunciar hoje mesmo.</p>
			</div>
			<div className="container_direita">
				<h1>Cadastro</h1>
				<div className="container_input">
					<FaRegUser size={20} color="#ccc" />
					<input placeholder="Usuário" />
				</div>
				<div className="container_input">
					<MdOutlineEmail size={20} color="#ccc" />
					<input placeholder="E-mail" />
				</div>
				<div className="container_input">
					<RiLockPasswordLine size={20} color="#ccc" />
					<input placeholder="Senha" />
				</div>
				<div className="container_input">
					<select name="" id="">
						<option value="">Selecione um plano...</option>
						<option value="10a">Gratuito - 10 anuncios por mês</option>
					</select>
				</div>
				<button className="botao_logar">Criar conta</button>
			</div>
		</div>
	);
}

export default CriarConta;
