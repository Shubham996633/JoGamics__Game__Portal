const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
const start = document.querySelector('.start-create')

var widths = [0, 999, 3840];

function resizeFn() {
    if (window.innerWidth<widths[1]) {
        start.style.display = 'none'
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Screen Size must be greator than 999px to run the Game',
            footer: 'Please Try on a device whose width Greator than 999px '
          })

        console.log('hat bee')




    }else{
        start.style.display = 'block'
      

        
    }
}

function startgame(){
    setTimeout(() => {
        document.querySelector('.start-game').style.display = 'none'
        document.querySelector('.fighter').style.display = 'inline-block'
        animate()

   
        decreaseTimer()

       
        
    }, 639);
}


start.addEventListener('click', startgame)
window.onresize = resizeFn;
resizeFn();

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = .72
const background = new Sprite({
    position:{
        x:0,
        y: 0
    },
    imageSrc: './assets/img/background.png'
})

const shop = new Sprite({
    position:{
        x: 600,
        y: 128
    },
    imageSrc: './assets/img/shop.png',
    scale: 2.75,
    framesMax: 6

})



const player = new Fighter({
    position: {
        x:0,
        y:0
    },
    velocity: {
        x:0,
        y:10
    },
    offset: {
        x:0,
        y:0
    },
    imageSrc: './assets/img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x:215,
        y:157
    },
    sprites: {
        idle: {
            imageSrc: './assets/img/samuraiMack/Idle.png',
            framesMax: 8
        },
        run: {
            imageSrc: './assets/img/samuraiMack/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './assets/img/samuraiMack/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './assets/img/samuraiMack/Fall.png',
            framesMax: 2,

        },
        attack1: {
            imageSrc: './assets/img/samuraiMack/Attack1.png',
            framesMax: 6,

        },
        takeHit: {
            imageSrc: './assets/img/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4
        },
        death:{
            imageSrc: './assets/img/samuraiMack/Death.png',
            framesMax: 6

        }
    },
    attackBox: {
        offset: {
            x:115,
            y:50
        },
        width:140,
        height:50
    },
    

})


const enemy = new Fighter({
    position: {
        x:400,
        y:100
    },
    velocity: {
        x:0,
        y:0
    },
    color: 'blue',
    offset: {
        x:-50,
        y:0
    },


    imageSrc: './assets/img/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x:215,
        y:167
    },
    sprites: {
        idle: {
            imageSrc: './assets/img/kenji/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './assets/img/kenji/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './assets/img/kenji/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './assets/img/kenji/Fall.png',
            framesMax: 2,

        },
        attack1: {
            imageSrc: './assets/img/kenji/Attack1.png',
            framesMax: 4,

        },
        takeHit: {
            imageSrc: './assets/img/kenji/Take hit.png',
            framesMax: 3
        },
        death:{
            imageSrc: './assets/img/kenji/Death.png',
            framesMax: 7

        }
    },
    attackBox: {
        offset: {
            x:-170,
            y:50
        },
        width:175,
        height:50
    }
})

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w:{
        pressed: false
    },
    ArrowRight: {
        pressed:false
    },
    ArrowLeft: {
        pressed:false
    }
}


function rectangularCollision({
    rectangle1,
    rectangle2
}) {
    return (
        rectangle1.attackBox.position.x <=rectangle2.position.x + rectangle2.width && 
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determinerWinner({player, enemy, timerId}) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'

    if(player.health === enemy.health){
        document.querySelector('#displayText').innerHTML = 'It Seems Tie'
        setTimeout(() => {
            document.querySelector('.result').innerHTML = 'It Seems Tie'
            document.querySelector('.end-image').setAttribute('src', './assets/img/tie.png')
            document.querySelector('.end-game').style.display = 'block'
            document.querySelector('.fighter').style.display = 'none'
        }, 2100);

     }else if(player.health > enemy.health){
         document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
         setTimeout(() => {
            document.querySelector('.result').innerHTML = 'Player 1 Wins'
            document.querySelector('.end-image').setAttribute('src', './assets/img/player1.png')
            document.querySelector('.end-game').style.display = 'block'
            document.querySelector('.fighter').style.display = 'none'
        }, 2100);
     }else if(player.health < enemy.health){
         document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
         setTimeout(() => {
            document.querySelector('.result').innerHTML = 'Player 2 Wins'

            document.querySelector('.end-image').setAttribute('src', './assets/img/player2.png')
                
            document.querySelector('.end-game').style.display = 'block'
            document.querySelector('.fighter').style.display = 'none'
        }, 2100);
     }
}
let timer = 100
let timerId
function decreaseTimer(){
    if(timer > 0){
        timerId = setTimeout(decreaseTimer , 1000);

        timer--
        document.querySelector('#timer').innerHTML = timer

    }
    if (timer === 0){
        determinerWinner({player, enemy, timerId})
         swordDeath.play()
       
        

    }
}


function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    c.fillStyle ='rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    player.velocity.x = 0
    enemy.velocity.x = 0


    if(keys.a.pressed && player.lastkey === 'a'){
        player.velocity.x = -5
        player.switchSprite('run')

    }else if(keys.d.pressed && player.lastkey === 'd'){
        player.velocity.x = 5
        player.switchSprite('run')


    }else{
        player.switchSprite('idle')

    }

    if(player.velocity.y < 0){
        player.switchSprite('jump')
    }else if( player.velocity.y >0){
        player.switchSprite('fall')
        
    }
    
    if(keys.ArrowLeft.pressed && enemy.lastkey === 'ArrowLeft'){
        enemy.velocity.x = -5
        enemy.switchSprite('run')


    }else if(keys.ArrowRight.pressed && enemy.lastkey === 'ArrowRight'){
        enemy.velocity.x = 5
        enemy.switchSprite('run')

    }else{
        enemy.switchSprite('idle')

    }

    if(enemy.velocity.y < 0){
        enemy.switchSprite('jump')
    }else if( enemy.velocity.y >0){
        enemy.switchSprite('fall')
        
    }

    if(
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        })
        && player.isAttacking && player.framesCurrent === 4){
            enemy.takeHit()
            player.isAttacking = false
            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            })
    }

    if(player.isAttacking && player.framesCurrent === 4){
        player.isAttacking = false

    }

    if(
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        })
        && enemy.isAttacking && enemy.framesCurrent === 2 ){
            player.takeHit()
            enemy.isAttacking = false

            gsap.to('#playerHealth', {
                width: player.health + '%'
            })
    }
    if(enemy.isAttacking && enemy.framesCurrent === 2){
        enemy.isAttacking = false

    }

    if(enemy.health <=0 || player.health <=0){
        determinerWinner({player, enemy, timerId})

    }
}


window.addEventListener('keydown', (event) => {
    if(!player.dead){
        
        switch (event.key){
            case 'd' :
                keys.d.pressed = true
                player.lastkey = 'd'
                break
    
            case 'a' :
                keys.a.pressed = true
                player.lastkey = 'a'
    
                break  
    
            case 'w' :
                player.velocity.y = -18
    
                break 
    
            case ' ':
                player.attack()
                break
    
        }
    }

    if(!enemy.dead){

        switch(event.key) {
            
            case 'ArrowRight' :
                keys.ArrowRight.pressed = true
                enemy.lastkey = 'ArrowRight'
                break
    
            case 'ArrowLeft' :
                keys.ArrowLeft.pressed = true
                enemy.lastkey = 'ArrowLeft'
    
                break  
    
            case 'ArrowUp' :
                enemy.velocity.y = -18
    
                break
    
            case 'ArrowDown' :
                enemy.attack()
                break
        }
    }

})


window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'd' :
            keys.d.pressed = false
            break

        case 'a' :
            keys.a.pressed = false
            break

       

        
    }

    switch (event.key){
        case 'ArrowRight' :
            keys.ArrowRight.pressed = false
            break

        case 'ArrowLeft' :
            keys.ArrowLeft.pressed = false
            break

       

        
    }


})


