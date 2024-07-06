const btnMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")

function toogleMenu(){
    // console.log(menu)
    menu.classList.toggle("show")
}

btnMenu.addEventListener("click", toogleMenu)