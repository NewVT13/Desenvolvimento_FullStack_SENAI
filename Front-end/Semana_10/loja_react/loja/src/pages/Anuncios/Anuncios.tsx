import { Link } from "react-router";
import "./Anuncios.css";
import { useEffect, useState } from "react";

function Anuncios() {
	const [anuncios, setAnuncios] = useState([]);

	function formatarParaReal(valor: number) {
		return new Intl.NumberFormat("pt-br", {
			style: "currency",
			currency: "BRL",
		}).format(valor);
	}

	async function getAnuncios() {
		const resposta = await fetch("http://localhost:3000/anuncios");
		const dados = await resposta.json();
		setAnuncios(dados);
	}

	useEffect(() => {
		getAnuncios();
	}, []);
	return (
		<div className="container_lista_anuncios">
			<h1>Menu anúncios</h1>
			<Link className="botao_login botao_novo_anuncio" to="/anuncios/cadastro">
				Novo anúncio
			</Link>
			<table className="tabela_anuncios">
				<thead>
					<tr>
						<th>Id</th>
						<th>Imagem</th>
						<th>Nome</th>
						<th>Valor</th>
						<th>Situação</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{anuncios.map(anuncio => (
						<tr key={anuncio.id}>
							<td>{anuncio.id}</td>
							<td>
								<img width={30} src={anuncio.url} />
							</td>
							<td>{anuncio.nome}</td>
							<td> {formatarParaReal(anuncio.preco)}</td>
							<td>{anuncio.status}</td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Anuncios;
