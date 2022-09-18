'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}


const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


function fullScreen(theURL) {
    window.open(theURL, '', 'fullscreen=yes, scrollbars=yes,location=no,resizable=yes');
    }

const mustTry = document.querySelector('.must__try')

mustTry.innerHTML = `

                        <li class="scrollbar-item">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src = "assets/img/drone.png" width="400" height="470" loading="lazy"
                            alt="Drone Galaxy Shooter" class="img-cover">
                        </figure>

                        <div class="card-content">

                       

                            <h3 class="h3">
                            <a onclick=
                            'fullScreen("./assets/games/Jo__Drone__Shooter/index.html");' class="card-title">Drone Galaxy Shooter <span class="span">Action</span></a>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </li>



                        <li class="scrollbar-item">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src="assets/img/enemy.png" width="400" height="470" loading="lazy"
                            alt="Enemy Forest Hunter" class="img-cover">
                        </figure>

                        <div class="card-content">

                            

                            <h3 class="h3">
                            <a onclick=
                            'fullScreen("./assets/games/Jo__Enemy__Killer/index.html")' class="card-title">Enemy Forest Eater <span class="span">Action</span></a>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </li>



                        <li class="scrollbar-item">
                        <div class="latest-game-card">

                        <figure class="card-banner img-holder" style="--width: 400; --height: 470;">
                            <img src="assets/img/samurai.png" width="400" height="470" loading="lazy"
                            alt="Samurai Fighting" class="img-cover">
                        </figure>

                        <div class="card-content">

                            

                            <h3 class="h3">
                            <a onclick=
                            'fullScreen("./assets/games/Jo__Fighting__Game/index.html")' class="card-title">Samurai Fighting <span class="span">Action</span></a>
                            </h3>

                            <p class="card-price">
                            Build Language : <span class="span">JavaScript</span>
                            </p>

                        </div>

                        </div>
                        </li>

                    `


const allReleased = document.querySelector('.all__released')

allReleased.innerHTML = `
                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/dronebig.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">Must Try
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Drone__Shooter/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">DRONE GALAXY SHOOTER  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Drone__Shooter/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>


                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/enemy.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">Must Try
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Enemy__Killer/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">Enemy Forest Eater  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Enemy__Killer/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>

                            

                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/samurai.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Fighting__Game/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">SAMURAI FIGHTING  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Fighting__Game/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>



                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/fire.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Fires__Blaster/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">Fire Blaster  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Fires__Blaster/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>


                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/spaceship.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Space__Invaders/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">Space Invaders  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Space__Invaders/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>


                                <li class="scrollbar-item">
                                <div class="featured-game-card">

                                <figure class="card-banner img-holder" style="--width: 450; --height: 600;">
                                    <img src="assets/img/pacman.png" width="450" height="600" loading="lazy"
                                    alt="Just for Gamers" class="img-cover">
                                </figure>

                                <div class="card-content">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Pacman__Game/index.html")' class="card-title" tabindex="-1">
                                         <span class="span">Pacman  </span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    <i class='bx bxl-javascript'></i>

                                    <span class="span">Based on JavaScript</span>
                                    </span>

                                </div>

                                <div class="card-content-overlay">

                                    <img src="assets/img/featured-game-icon.png" width="36" height="61" loading="lazy" alt=""
                                    class="card-icon">

                                    <h3 class="h3">
                                    <a onclick=
                                    'fullScreen("./assets/games/Jo__Pacman__Game/index.html")' class="card-title">
                                        Click Here to <span class="span">Play</span>
                                    </a>
                                    </h3>

                                    <span class="card-meta">
                                    

                                   
                                    </span>

                                </div>

                                </div>
                                </li>


                        `