/** @type {HTMLCanvasElement} */
const canavs = document.getElementById('canvas1')
const ctx = canavs.getContext('2d')
CANVAS_WIDTH = canavs.width = 500
CANVAS_HEIGHT = canavs.height = 1000
const numberofEnemies = 50
const enemiesArray = []
let gameFrame = 0



class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = './assets/img/enemies/enemy3.png'
     
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 218
        this.spriteHeight = 177
        this.width = this.spriteWidth / 3
        this.height = this.spriteHeight / 2.1
        this.x = Math.random() * (canavs.width - this.width)
        this.y = Math.random() * (canavs.height - this.height)

        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.angle = Math.random() * 500
        this.angleSpeed = Math.random() * .5 + 0.5
        // this.curve = Math.random() * 200 + 50

    }
    update(){
        this.x = canavs.width/2 * Math.cos(this.angle * Math.PI/200) + (canavs.width/2 - this.width/2)
        
        this.y = canavs.height/2 * Math.sin(this.angle * Math.PI/300) + (canavs.height/2 - this.height/2)
        this.angle += this.angleSpeed
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