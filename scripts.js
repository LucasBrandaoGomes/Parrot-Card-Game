alert("Bem Vinde ao PARROT CARD GAMES - JOGO DA MEMÓRIA");
let jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
while ((jogo>14) || (jogo%2 !== 0)){
        jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
}

function comparador() { 
	return Math.random() - 0.5; 
}

const cartasParaAparecer = [
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/bobrossparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/bobrossparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/explodyparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/explodyparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/fiestaparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/fiestaparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/metalparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/metalparrot.gif">
</div>`, 
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/revertitparrot.gif">
</div>`, 
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/revertitparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/tripletsparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/tripletsparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/unicornparrot.gif">
</div>`,
`<div class="imagens">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/unicornparrot.gif">
</div>`]

const cartas = document.querySelector(".container");

function cartasEmbaralhadas(){

    cartas.innerHTML="";

    let embaralhadas = [];

    for(let i=0; i<jogo; i++){
        embaralhadas.push(cartasParaAparecer[i]);
    }
    embaralhadas.sort(comparador);
    for (let j=0; j<embaralhadas.length; j++){
        cartas.innerHTML+=`${embaralhadas[j]}`;
    }
}
cartasEmbaralhadas()

function virarCarta() {
    
  this.classList.toggle('virar');
}

