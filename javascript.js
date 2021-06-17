const personagens = []
const totalDePersonagem = 671;
//gera nº aleatório
const randomIntegerNumber = (maxValue) => {
	return Math.floor( Math.random() * maxValue + 1 )
};


for (let index = 0; index < 4; index++) {
	personagens.push({
		image: document.querySelector(`.imagemPersonagem${index+1}`),
		name: document.querySelector(`.nomeDoPersonagem${index+1}`),
		numero: randomIntegerNumber(totalDePersonagem) 
	})	
}

const url = 'https://rickandmortyapi.com/api/character'
personagens.forEach(personagem => {
	fetch(`${url}/${personagem.numero}`,
	{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}
	})
	.then((response) => response.json()).then((data) => {
		personagem.image.src = data.image
		personagem.image.alt = data.name
		personagem.name.innerHTML = data.name
	})
});