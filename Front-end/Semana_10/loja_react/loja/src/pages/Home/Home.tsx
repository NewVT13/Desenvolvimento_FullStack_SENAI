import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css";
import anuncios from "../../mock/data";

function Home() {
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
					<div className="conteiner_card">
						<img src={anuncio.imagem} width={200} />
						<div className="conteiner_info">
							<h2>{anuncio.nome}</h2>
							<p>{anuncio.descricao}</p>
							<span className="info_preco">R$ {anuncio.valor}</span>
							<span>em até 3x de R$ {(anuncio.valor / 3).toFixed(2)} sem juros</span>

							<a target="blank" href="https://wa.me/5541987888514">
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
