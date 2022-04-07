alert("Bem Vinde ao PARROT CARD GAMES - JOGO DA MEMÓRIA");
let jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
while ((jogo>14) || (jogo%2 !== 0)){
        jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
}

function comparador() { 
	return Math.random() - 0.5; 
}

const cartas = [];

function cartasEmbaralhadas(){
    let cont = 1;
    while (cont<=jogo){
        cartas.push(document.querySelector(`.container div:nth-child(${cont}`));
        cont = cont + 1;
    }

    for (let i=0; i<cartas.length; i++){
        cartas[i].classList.remove("escondido");
    }
}
cartasEmbaralhadas()
