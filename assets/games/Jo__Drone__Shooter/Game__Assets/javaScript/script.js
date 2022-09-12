game = document.querySelector('.start-create')

game.addEventListener('click', shootingGame)

function shootingGame(){
    location.replace("./Game__Assets/index.html")
}


var widths = [0, 1000, 3840];

function resizeFn() {
    if (window.innerWidth<widths[1]) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Screen Size must be greator than 1000 to run the Game',
            footer: 'Please Try on a device whose width Greator than 1000px '
          })
        

        const homeImag = document.querySelector('.home__img')
        homeImag.style.display = 'none'
      
        game.style.display = 'none'

      




    }
}

window.onresize = resizeFn;
resizeFn();