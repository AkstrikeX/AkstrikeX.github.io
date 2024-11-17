//ativa Botões do painel de controle
// const input = document.querySelector("input")
document.addEventListener("keydown",()=>{
    if (event.key === "w") {
        player.move('cima')
        console.log("w")
    }
    if (event.key === "a") {
        player.move('esquerda')
        console.log("w")

    }
    if (event.key === "s") {
        player.move('baixo')
    }
    if (event.key === "d") {
        player.move('direita')
    }

    if (event.key === "ArrowUp") {
        player.move('cima')
    }
    if (event.key === "ArrowLeft") {
        player.move('esquerda')
    }
    if (event.key === "ArrowDown") {
        player.move('baixo')
    }
    if (event.key === "ArrowRight") {
        player.move('direita')
    }
});

document.addEventListener("keyup",()=>{
    player.acceleration = 3
});
// input.addEventListener("click",()=>{ move('acima')});
// input.addEventListener("click", ()=>{altura(5)});
// input.addEventListener("click", ()=>{altura(-5)});
// input.addEventListener("click", ()=>{largura(5)});
// input.addEventListener("click", ()=>{largura(-5)});
// input.addEventListener("click", ()=>{cores()});

function startGame() {
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}