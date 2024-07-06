const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")

function toogleMenu(){
    menu.classList.toggle("show")
}

function removeClass(c) {
    menu.classList.remove(c)
}

function resize(e) {
    const width = e.target.innerWidth;
    if (width > 765) removeClass("show")
}

btnMenu.addEventListener("click", toogleMenu)

window.addEventListener("resize", resize)