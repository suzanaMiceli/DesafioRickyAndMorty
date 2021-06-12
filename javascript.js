let imagem = document.querySelector('#imagem');
let personagem = document.querySelector(".nome-do-personagem");


let totalDePersonagem = 671;


numeroAleatorio = () => {
	return Math.floor(Math.random() * totalDePersonagem + 1 );
}

pegarPersonagem = () => {
	let id = numeroAleatorio();
	return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}

	}).then((response) => response.json()).then((data) => {
		imagem.src = data.image;
		imagem.alt = data.name;

	});
};
