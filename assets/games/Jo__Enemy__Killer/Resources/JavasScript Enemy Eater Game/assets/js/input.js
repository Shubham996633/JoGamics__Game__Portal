const gamePlay = document.querySelector('.game__play')
const endScreen = document.querySelector('.end-game')
const tryAgain = document.querySelector('.try-again')

const result = document.querySelector('.result')
const endImage = document.querySelector('.end-image')
const powermode = document.querySelector('.powermode')
const run = document.querySelector('.run')

tryAgain.addEventListener('click', revertGame)
function revertGame(){
    location.replace("./././index.html")
}

export class InputHandler {
    constructor(game){
        this.game = game
        this.keys = []
        window.addEventListener('keydown', e => {
            if((    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key == 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === ' '
                )   && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key)
            }else if (e.key === 'd' || e.key === 'D') this.game.debug = !this.game.debug

        })

    

        window.addEventListener('keyup', e => {
            if(     e.key === 'ArrowDown' || 
                    e.key == 'ArrowUp' ||
                    e.key == 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === ' '
               ){
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }

        })
    }
}
// 7:21