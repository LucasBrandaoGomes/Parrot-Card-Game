/* Lista com as conteiners de cada carta frente/verso*/

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

/* funções para embaralhar cartas */

function comparador() { 
	return Math.random() - 0.5; 
}
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
/* Definindo variáveis globais */

const cartas = document.querySelector(".container");
const carta = document.querySelectorAll(".imagens")
let contadorJogadas=0;
let temCartaVirada = false; //varíável para guardar se existe ou não cartas viradas//

//variáveis para guardar qual carta foi virada primeiro e segundo//
let primeiraCarta;
let segundaCarta;

let tempo = 0; //variável para funções  do relógio
let idInterval;//variavél para funções do relógio

//função que vai verificar se existe carta virada ou nãoo e atribuir os valores as variaveis primeira e segundCarta//
//Essa funçaõ é chamada ao clicar em uma carta//
function virarCarta(carta) {

  carta.classList.add('virar');

  if (temCartaVirada === false){
      temCartaVirada=true;
      primeiraCarta=carta;
  }else{
      segundaCarta=carta;
      temCartaVirada=false;//ao final do bloco, independende do que acontecer, essa variável volta a ser false para uma p´roxima jogada//

      //estando então dentro do bloco do else, existem duas cartas viradas, e por isso é hora de chamar a verificação//
        verificaçãoDasCartas()  
  }
}

const paresVirados=[]; //lista para receber em ordem os pares virados, por ela será indicado quando o jogo acaba)//
                      //o jogo acaba quando o número de elementos dessa lista foir igual ao de cartas escolhidos pelo usuário//

function verificaçãoDasCartas(){

    if (primeiraCarta.innerHTML === segundaCarta.innerHTML){
       
        //remover o onclick dessas cartas//
        primeiraCarta.removeEventListener('click', virarCarta);
        segundaCarta.removeEventListener('click', virarCarta);
        
        paresVirados.push(primeiraCarta.innerHTML);
        paresVirados.push(segundaCarta.innerHTML);
        
        contadorJogadas++ //contar uma jogada - um par de cartas//
        
    }else{
        setTimeout(desvirarCartas, 1000);
        contadorJogadas++ //contar uma jogada - um par de cartas//    
    }
}

function desvirarCartas(){
    primeiraCarta.classList.remove('virar')
    segundaCarta.classList.remove('virar')
}

function finalizarJogo(){
    alert(`PARABÉNS! Você venceu o PARROT com ${contadorJogadas} jogadas no tempo de ${tempo} segundos!`);
}

// funções referentes ao relogio//


function contarTempo() {
    idInterval = setInterval(incrementarTempo, 1000)
}
function incrementarTempo() {
    tempo++;
    document.querySelector(".contador").innerHTML = tempo;
    if (paresVirados.length === jogo) {
        clearInterval(idInterval);
        setTimeout(finalizarJogo, 500);
    }
}

alert("Bem Vinde ao PARROT CARD GAMES - JOGO DA MEMÓRIA");
let jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
    while ((jogo>14) || (jogo%2 !== 0)){
        jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14 cartas"));
    }   

cartasEmbaralhadas()

contarTempo()