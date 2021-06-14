//estou chamando o HTML(<img> pela id e <p> pela class) e declarando dentro das variáveis
let imagem1 = document.querySelector('.imagemPersonagem1');
let imagem2 = document.querySelector('.imagemPersonagem2');
let imagem3 = document.querySelector('.imagemPersonagem3');
let imagem4 = document.querySelector('.imagemPersonagem4');

let personagem1 = document.querySelector(".nomeDoPersonagem1");
let personagem2 = document.querySelector(".nomeDoPersonagem2");
let personagem3 = document.querySelector(".nomeDoPersonagem3");
let personagem4 = document.querySelector(".nomeDoPersonagem4");
 


let totalDePersonagem = 671;



numeroAleatorio = () => {return Math.floor(Math.random() * totalDePersonagem + 1)};


let p1 = numeroAleatorio();
let p2 = numeroAleatorio();
let p3 = numeroAleatorio();
let p4 = numeroAleatorio();


//caso aja algum nº repetido ele chama a função novamente

if(p1,p2,p3,p4 == p1,p2,p3,p4){
	numeroAleatorio();	
};

console.log(p1,p2,p3,p4);


pegarPersonagem1 = () => {

	return fetch(`https://rickandmortyapi.com/api/character/${p1}`,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}
		}).then((response) => response.json()).then((data) => {
			
			imagem1.src = data.image;
			imagem1.alt = data.name;
			personagem1.innerHTML = data.name;

	});
	
};


pegarPersonagem2 = () => {

	return fetch(`https://rickandmortyapi.com/api/character/${p2}`,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}
		}).then((response) => response.json()).then((data) => {
			
			imagem2.src = data.image;
			imagem2.alt = data.name;
			personagem2.innerHTML = data.name;

	});
	
};

pegarPersonagem3 = () => {

	return fetch(`https://rickandmortyapi.com/api/character/${p3}`,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}
		}).then((response) => response.json()).then((data) => {
			
			imagem3.src = data.image;
			imagem3.alt = data.name;
			personagem3.innerHTML = data.name;

	});
	
};

pegarPersonagem4 = () => {

	return fetch(`https://rickandmortyapi.com/api/character/${p4}`,{
		method: 'GET',
		headers: {
			Accept: 'application/json',
			"Content-Type":'application/json'
		}
		}).then((response) => response.json()).then((data) => {
			
			imagem4.src = data.image;
			imagem4.alt = data.name;
			personagem4.innerHTML = data.name;

	});
	
};


//chama a função toda vez que a página é recarregada
window.addEventListener('load', pegarPersonagem1);
window.addEventListener('load', pegarPersonagem2);
window.addEventListener('load', pegarPersonagem3);
window.addEventListener('load', pegarPersonagem4);

