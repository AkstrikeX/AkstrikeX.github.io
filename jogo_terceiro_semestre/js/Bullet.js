class Bullet {
    count = 1;
    screen = document.getElementById('tela')

    create() {
        var bala = document.createElement("div")
        bala.setAttribute("id", "bullet" + this.count)
        bala.classList.add("bullet")
    
        this.screen.appendChild(bala)
        this.move()
        this.count++

    }

    async move() {
        var bala = document.getElementById("bullet" + this.count)

        let top = parseInt(getComputedStyle(bala).top)
        let left = parseInt(getComputedStyle(bala).left)                
        let bullet_width = parseInt(getComputedStyle(bala).width)                
        let bullet_height = parseInt(getComputedStyle(bala).height)                
        
        let screen_height = parseInt(getComputedStyle(this.screen).height)
        let screen_width = parseInt(getComputedStyle(this.screen).width)
        let speed = getRandomInt(10,30)

        let side = getRandomInt(1,4)

        if (side == 1) { /*esquerda*/
            let starting_point = getRandomInt(bullet_height,screen_height-bullet_height)
            bala.style.top = `${starting_point}px`
            bala.style.left = `${bullet_height}px`

            while (left < screen_width) {
                await sleep(speed)
                left = parseInt(getComputedStyle(bala).left)                
                bala.style.left = `${left + 3}px`
                this.collision(bala)
            }

        } else if (side == 2) { /*cima*/
            let starting_point = getRandomInt(bullet_width,screen_width-bullet_width)
            bala.style.left = `${starting_point}px`
            bala.style.top = `${bullet_height}px`

            while (top < screen_height) {
                await sleep(speed)
                top = parseInt(getComputedStyle(bala).top)                
                bala.style.top = `${top + 3}px`
                this.collision(bala)
            }

        } else if (side == 3) { /*direita*/
            let starting_point = getRandomInt(bullet_height,screen_height-bullet_height)
            bala.style.left = `${screen_width-bullet_width}px`
            bala.style.top = `${starting_point}px`

            while (left > 0) {
                await sleep(speed)
                left = parseInt(getComputedStyle(bala).left)                
                bala.style.left = `${left - 3}px`
                this.collision(bala)
            }

        } else { /*baixo*/
            let starting_point = getRandomInt(bullet_width,screen_width-bullet_width)
            bala.style.left = `${starting_point}px`
            bala.style.top = `${screen_height-bullet_height}px`

            while (top > 0) {
                await sleep(speed)
                top = parseInt(getComputedStyle(bala).top)                
                bala.style.top = `${top - 3}px`
                this.collision(bala)
            }
        }
        bala.remove()
        
    }
    
    collision(bala) {
        var player = document.getElementById("player")

        let top = parseInt(getComputedStyle(bala).top)
        let left = parseInt(getComputedStyle(bala).left)                
        let right = parseInt(getComputedStyle(bala).right)                
        let bottom = parseInt(getComputedStyle(bala).bottom)                
        let bullet_width = parseInt(getComputedStyle(bala).width)                
        let bullet_height = parseInt(getComputedStyle(bala).height)

        let player_top = parseInt(getComputedStyle(player).top)
        let player_left = parseInt(getComputedStyle(player).left)                                
        let player_width = parseInt(getComputedStyle(player).width)                
        let player_height = parseInt(getComputedStyle(player).height) 


        if (((left >= player_left && left <= player_left+player_width) && (top >= player_top && top <= player_top + player_height)) || ( (right >= player_left && right <= player_left+player_width) && (bottom <= player_top && bottom >= player_top + player_height))){
            return gameOver = true
        }
    }

}

