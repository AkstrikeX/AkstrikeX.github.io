gameOver = false

document.addEventListener("keydown",()=>{
    if (event.key === "w") {
        player.move('cima')
    }
    if (event.key === "a") {
        player.move('esquerda')

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
    player.acceleration = 10
});

async function startGame() {
    player.setPosition()
    while(!gameOver){
        await sleep(200)
        bullet.create()
    }
}

function reiniciar() {
    gameOver = false
    player.setPosition()
    startGame()
    bullets = document.querySelectorAll('.bullet')
    bullets.forEach(element => {
        element.remove()
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}