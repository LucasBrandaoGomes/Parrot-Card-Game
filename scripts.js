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

/* fun????es para embaralhar cartas */

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
/* Definindo vari??veis globais */

const cartas = document.querySelector(".container");
const carta = document.querySelectorAll(".imagens")
let contadorJogadas=0;
let temCartaVirada = false; //var????vel para guardar se existe ou n??o cartas viradas//

//vari??veis para guardar qual carta foi virada primeiro e segundo//
let primeiraCarta;
let segundaCarta;

let tempo = 0; //vari??vel para fun????es  do rel??gio
let idInterval;//variav??l para fun????es do rel??gio

//fun????o que vai verificar se existe carta virada ou n??oo e atribuir os valores as variaveis primeira e segundCarta//
//Essa fun??a?? ?? chamada ao clicar em uma carta//
function virarCarta(carta) {

  carta.classList.add('virar');

  if (temCartaVirada === false){
      temCartaVirada=true;
      primeiraCarta=carta;
  }else{
      segundaCarta=carta;
      temCartaVirada=false;//ao final do bloco, independende do que acontecer, essa vari??vel volta a ser false para uma p??roxima jogada//

      //estando ent??o dentro do bloco do else, existem duas cartas viradas, e por isso ?? hora de chamar a verifica????o//
        verifica????oDasCartas()  
  }
}

const paresVirados=[]; //lista para receber em ordem os pares virados, por ela ser?? indicado quando o jogo acaba)//
                      //o jogo acaba quando o n??mero de elementos dessa lista foir igual ao de cartas escolhidos pelo usu??rio//

function verifica????oDasCartas(){

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
    alert(`PARAB??NS! Voc?? venceu o PARROT com ${contadorJogadas} jogadas no tempo de ${tempo} segundos!`);
}

// fun????es referentes ao relogio//


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

alert("Bem Vinde ao PARROT CARD GAMES - JOGO DA MEM??RIA");
let jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um n??mero par entre 4 e 14 cartas"));
    while ((jogo>14) || (jogo%2 !== 0)){
        jogo = Number(prompt("Com quantas cartas deseja jogar? Escolha um n??mero par entre 4 e 14 cartas"));
    }   

cartasEmbaralhadas()

contarTempo()