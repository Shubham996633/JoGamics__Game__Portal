/** @type {HTMLCanvasElement} */
const canavs = document.getElementById('canvas1')
const ctx = canavs.getContext('2d')
CANVAS_WIDTH = canavs.width = 500
CANVAS_HEIGHT = canavs.height = 1000
const numberofEnemies = 30
const enemiesArray = []
let gameFrame = 0



class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = './assets/img/enemies/enemy4.png'
     
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 213
        this.spriteHeight = 213
        this.width = this.spriteWidth / 3
        this.height = this.spriteHeight / 2.1
        this.x = Math.random() * (canavs.width - this.width)
        this.y = Math.random() * (canavs.height - this.height)
        this.newX = Math.random() * (canavs.width - this.width)
        this.newY = Math.random() * (canavs.height - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.interval = Math.floor(Math.random() * 200 + 50)
     
    }
    update(){
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (canavs.width - this.width)
            this.newY = Math.random() * (canavs.height - this.height)
        }
        let dx = this.x - this.newX

        
        let dy = this.y - this.newY
        this.x -= dx/70
        this.y -= dy/70
        if(this.x + this.width < 0) this.x = canavs.width
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++

        }
    }
    draw(){
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}
for(let i = 0; i < numberofEnemies; i++){
    enemiesArray.push(new Enemy())


}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}

animate()