const openBtn = document.querySelector("button#open")
const closeBtn = document.querySelector("button#close")
const nav = document.querySelector("nav")

function toggleNav(e) {
    nav.classList.toggle("open")
}

openBtn.addEventListener("click", toggleNav)
closeBtn.addEventListener("click", toggleNav)

function resize(e) {
    if(e.target.screen.availWidth >= 1300){
        nav.classList.remove("open")
    }
}
window.addEventListener('resize', resize)
