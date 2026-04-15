import "./Anuncios.css";

function Anuncios() {
	return (
		<div className="container_lista_anuncios">
			<h1>Menu anúncios</h1>

			<table className="tabela_anuncios">
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Valor</th>
						<th>Situação</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Action figure Pikachu</td>
						<td>R$ 300</td>
						<td>Não publicado</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Anuncios;
