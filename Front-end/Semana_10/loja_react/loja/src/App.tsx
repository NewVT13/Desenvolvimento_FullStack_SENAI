import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function App() {
	return (
		<div className="container_home">
			<div className="container_esquerda">
				<h2>Welcome back!</h2>
				<p>you can sign in to acess with yout existing account.</p>
			</div>
			<div className="container_direita">
				<h1>Sing in</h1>
				<div className="container_input">
					<FaRegUser size={20} color="#ccc" />
					<input placeholder="User email" />
				</div>
				<div className="container_input">
					<RiLockPasswordLine size={20} color="#ccc" />
					<input placeholder="Password" />
				</div>
				<button className="botao_logar">Sing In</button>
				<p>
					new here?{" "}
					<a className="link_criar_conta" href="">
						Create an account
					</a>
				</p>
			</div>
		</div>
	);
}

export default App;
