var emails = [
	{
		id: 1,
		remetente: "douglas@gmail.com",
		destinatario: "maria@gmail.com",
		assunto: "Feedback de entrevista",
		mensagem:
			"Olá Maria, gostaria de compartilhar o feedback da sua entrevista. Ficamos muito impressionados com suas habilidades técnicas e sua experiência. Você demonstrou grande conhecimento e estamos animados para dar continuidade ao processo seletivo.",
		arquivos: [
			{
				name: "comprovante",
				arquivo:
					"https://totalmei.com/wp-content/uploads/2022/02/ccmei-emitte-1-1.png",
			},
			{
				name: "foto_x",
				arquivo:
					"https://totalmei.com/wp-content/uploads/2022/02/ccmei-emitte-1-1.png",
			},
			{
				name: "foto_y",
				arquivo:
					"https://totalmei.com/wp-content/uploads/2022/02/ccmei-emitte-1-1.png",
			},
		],
	},
	{
		id: 2,
		remetente: "joao@gmail.com",
		destinatario: "patricia@gmail.com",
		assunto: "Relatório mensal de entrevista",
		mensagem:
			"Prezada Patrícia, segue em anexo o relatório mensal referente ao mês de março. Foram realizadas 15 entrevistas com aproveitamento de 60%. Destaco os candidatos com perfil técnico avançado que estão em fase final do processo.",
		arquivos: [],
	},
	{
		id: 3,
		remetente: "ana@gmail.com",
		destinatario: "carlos@gmail.com",
		assunto: "Convite para reunião",
		mensagem:
			"Oi Carlos, tudo bem? Estou agendando uma reunião para discutirmos os próximos passos do projeto. A reunião está marcada para quinta-feira às 14h na sala de conferências. Por favor, confirme sua presença.",
		arquivos: [],
	},
	{
		id: 4,
		remetente: "fernanda@gmail.com",
		destinatario: "lucas@gmail.com",
		assunto: "Proposta comercial",
		mensagem:
			"Prezado Lucas, conforme nossa conversa, segue em anexo a proposta comercial para o desenvolvimento do sistema de gestão. O projeto tem duração estimada de 6 meses com investimento de R$ 150.000. Aguardo seu retorno.",
		arquivos: [],
	},
	{
		id: 5,
		remetente: "roberto@gmail.com",
		destinatario: "juliana@gmail.com",
		assunto: "Atualização do projeto",
		mensagem:
			"Juliana, informo que concluímos 75% do projeto conforme planejado. Estamos dentro do prazo e seguindo o orçamento previsto. Na próxima sprint iniciaremos a fase de testes. Qualquer dúvida, estou à disposição.",
		arquivos: [],
	},
	{
		id: 6,
		remetente: "camila@gmail.com",
		destinatario: "bruno@gmail.com",
		assunto: "Confirmação de pagamento",
		mensagem:
			"Olá Bruno, confirmo o recebimento do pagamento no valor de R$ 5.500,00 referente à nota fiscal 1234. O pagamento foi identificado em nossa conta na data de hoje. Agradeço pela pontualidade.",
		arquivos: [],
	},
];

document.getElementById("form_pesquisa").addEventListener("submit", event => {
	event.preventDefault();

	var palavraDigitada = document.getElementById("palavra").value.toUpperCase();

	console.log(palavraDigitada);

	var emailsFiltrados = emails.filter(
		email =>
			email.assunto.toUpperCase().includes(palavraDigitada) ||
			email.mensagem.toUpperCase().includes(palavraDigitada)
	);

	document.getElementById("lista").innerHTML = "";

	emailsFiltrados.forEach(email => {
		var blocoHTML = ` 
    <li class="email_container">
        <p>Remetente: ${email.remetente}</p>
        <p>Assunto: ${email.assunto}</p>
        <p>Conteudo: ${email.mensagem}</p>
      </li>
    `;

		document.getElementById("lista").insertAdjacentHTML("afterbegin", blocoHTML);
	});

	console.log(emailsFiltrados);
});
