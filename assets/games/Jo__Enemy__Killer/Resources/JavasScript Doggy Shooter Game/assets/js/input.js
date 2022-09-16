export class InputHandler {
    constructor(){
        this.keys = []
        window.addEventListener('keydown', e => {
            if(e.key === 'ArrowDown' && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key)
            }
            console.log(e.key, this.keys)

        })

        window.addEventListener('keyup', e => {
            if(e.key === 'ArrowDown'){
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
            console.log(e.key, this.keys)

        })
    }
}
// 7:21