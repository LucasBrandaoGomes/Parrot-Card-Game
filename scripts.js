alert("BEM VINDO AO PARROT CARD GAMES - JOGO DA MEMÓRIA");
let jogo = prompt("Com quantas cartas deseja jogar?");

function numeroDeCartas(){
    
    let n = Number(jogo);
    let cont = 1;
    while (cont<=n){
        document.querySelector(`.container div:nth-child(${cont}`).classList.remove("escondido");
        cont = cont + 1;
    }
}
numeroDeCartas()
