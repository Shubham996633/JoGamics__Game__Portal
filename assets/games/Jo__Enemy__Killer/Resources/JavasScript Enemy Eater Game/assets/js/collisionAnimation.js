const gamePlay = document.querySelector('.game__play')
const endScreen = document.querySelector('.end-game')
const tryAgain = document.querySelector('.try-again')

const result = document.querySelector('.result')
const endImage = document.querySelector('.end-image')

tryAgain.addEventListener('click', revertGame)
function revertGame(){
    location.replace("./././index.html")
}

export class CollisionAnimation {
    constructor(game, x, y){
        this.game = game
        this.image = document.getElementById('collisionAnimation')
        this.spriteWidth = 100
        this.spriteHeight = 90
        this.speedModifier = Math.random() + 0.5
        this.width = this.spriteWidth * this.speedModifier
        this.height = this.spriteHeight * this.speedModifier
        this.x = x - this.width * 0.5
        this.y = y - this.height * 0.5
        this.frameX = 0
        this.maxFrame = 4
        this.markedForDeletion = false
        this.fps = Math.random() * 10 + 5
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0

    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
    update(deltaTime){
        this.x -= this.game.speed
        if(this.frameTimer > this.frameInterval){
            this.frameX++
            this.frameTimer = 0

        }else{
            this.frameTimer += deltaTime
        }
        if(this.frameX > this.maxFrame) this.markedForDeletion = true
    }
}