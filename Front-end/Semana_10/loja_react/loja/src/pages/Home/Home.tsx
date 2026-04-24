import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
	const [anuncios, setAnuncios] = useState([]);

	async function getAnuncios() {
		const resposta = await fetch("http://localhost:3000/anuncios");
		const dados = await resposta.json();
		setAnuncios(dados);
	}

	useEffect(() => {
		getAnuncios();
	}, []);
	return (
		<div className="conteiner_site">
			<div className="conteiner_titulo">
				<div>
					<h1>Anuncios em destaque</h1>
					<p>Encontre colecionaveis, mangas e acessorios do universo anime.</p>
				</div>
				<Link to="/login">
					<button className="botao_login">Quero anunciar</button>
				</Link>
			</div>
			<div className="conteiner_cards_principal">
				{anuncios.map(anuncio => (
					<div className="conteiner_card" key={anuncio.id}>
						<img src={anuncio.url} width={200} />
						<div className="conteiner_info">
							<h2>{anuncio.nome}</h2>
							<p>{anuncio.descricao}</p>
							<span className="info_preco">R$ {anuncio.preco}</span>
							<span>
								em até {anuncio.parcelamento}x de R${" "}
								{(anuncio.preco / anuncio.parcelamento).toFixed(2)} sem juros
							</span>

							<a target="blank" href={`https://wa.me/+55${anuncio.contato}`}>
								<FaWhatsapp />
								Negociar
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
