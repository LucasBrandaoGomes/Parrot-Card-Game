alert("Bem Vinde ao PARROT CARD GAMES - JOGO DA MEMÓRIA");
let jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
while ((jogo>14) || (jogo%2 !== 0)){
        jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
}

function comparador() { 
	return Math.random() - 0.5; 
}

const cartasParaAparecer = [
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/bobrossparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/bobrossparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/explodyparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/explodyparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/fiestaparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/fiestaparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/metalparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/metalparrot.gif">
</div>`, 
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/revertitparrot.gif">
</div>`, 
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/revertitparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/tripletsparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/tripletsparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
    <img class="frente" src="img/front.png">
    <img class="verso" src="img/unicornparrot.gif">
</div>`,
`<div class="imagens" onclick="virarCarta(this)">
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

const carta = document.querySelectorAll(".imagens")
let contadorJogadas=0;

//varíável para guardar se existe ou não cartas viradas//
let temCartaVirada = false;

//variáveis para guardar qual carta foi virada primeiro e segundo//
let primeiraCarta;
let segundaCarta;

//função que vai verificar se existe carta virada ou nãoo e atribuir os valores as variaveis primeira e segundCarta//
function virarCarta(carta) {

  carta.classList.add('virar');

  if (temCartaVirada === false){
      temCartaVirada=true;
      primeiraCarta=carta;
  }else{
      segundaCarta=carta;
      temCartaVirada=false;//ao final do bloco, independende do que acontecer, essa variável volta a ser false para uma p´roxima jogada//
  }
  
  setTimeout(verificaçãoDasCartas, 5000);
}
function verificaçãoDasCartas(){
    if (primeiraCarta.innerHTML===segundaCarta.innerHTML){
        //remover o onclick dessas cartas//
        
        primeiraCarta.removeEventListener('click', virarCarta);
        segundaCarta.removeEventListener('click', virarCarta);

        contadorJogadas++//contar uma jogada - um par de cartas//
        console.log(contadorJogadas);
    }else{
        setTimeout(desvirarCartas, 1000);
        contadorJogadas++//contar uma jogada - um par de cartas//
        console.log(contadorJogadas);
    }
}

function desvirarCartas(){
    primeiraCarta.classList.remove('virar');
    segundaCarta.classList.remove('virar');
}
