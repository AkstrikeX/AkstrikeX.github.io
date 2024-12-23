class Player {
    acceleration = 3
    speed = 9
    screen = document.getElementById("tela")


    constructor() {
        let screen_height = parseInt(getComputedStyle(this.screen).height)
        let screen_width = parseInt(getComputedStyle(this.screen).width)

        var player = document.createElement("div")
        player.setAttribute("id", "player")
        player.classList.add("player")
        player.style.left = `${Math.floor(screen_width/4)}px`
        player.style.top = `${Math.floor(screen_height/2)}px`

        this.screen.appendChild(player)

    }

    move(direcao) {
        let player = document.getElementById("player")  
        let top = parseInt(getComputedStyle(player).top)
        let left = parseInt(getComputedStyle(player).left)
        let height = parseInt(getComputedStyle(player).height)
        let width = parseInt(getComputedStyle(player).width)

        this.canAccelerate()

        let screen_height = parseInt(getComputedStyle(this.screen).height)
        let screen_width = parseInt(getComputedStyle(this.screen).width)

        if (direcao == "cima") {
            if (top - (height/2)  <= 0) {
                
            } else {
                player.style.top = `${top - this.speed}px`
            }   
            
        } else if (direcao == "esquerda") {
            if (left - (width/2)  <= 0) {
                
            } else {
                player.style.left = `${left - this.speed}px`
            }
        } else if (direcao == "baixo") {
            if (top + height  >= screen_height) {
                
            } else {
                player.style.top = `${top + this.speed}px`
            }
        } else { /*direita*/
            if (left + width  >= screen_width) {
                
            } else {
                player.style.left = `${left + this.speed}px`
            }
        }
    }

    async canAccelerate(){
        if (this.acceleration > 0) {
            this.speed = 12
            this.acceleration--
        } else {
            this.speed = 9
            await sleep(3000)
            this.acceleration = 10
        }
    }

    setPosition() {
        let screen_height = parseInt(getComputedStyle(document.getElementById("tela")).height)
        let screen_width = parseInt(getComputedStyle(document.getElementById("tela")).width)
        let player = document.getElementById("player")

        player.style.left = `${Math.floor(screen_width/2)}px`
        player.style.top = `${Math.floor(screen_height/2)}px`
    }
}
