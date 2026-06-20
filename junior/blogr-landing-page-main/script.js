const primaryMenu = document.querySelectorAll("ul.primary-menu>li>span");
const btnMenu = document.querySelector("button#toogleMenu");

function toggleSubMenu(e) {
    const subMenu = e.target.nextSibling.nextSibling;
    const iconArrow = e.target.children[0];
    subMenu.classList.toggle("show");
    iconArrow.classList.toggle("rotate");
}

function toggleMenu() {
    const menu = document.querySelector("div.menu");
    btnMenu.classList.toggle("open");
    btnMenu.classList.toggle("close");
    menu.classList.toggle("show");
}

function resize(width) {
    if (width > 1200) btnMenu.classList.remove("show");
    if (width < 1200) btnMenu.classList.add("show");
}

primaryMenu.forEach(elem => {
    elem.addEventListener("click", toggleSubMenu);
});

btnMenu.addEventListener("click", toggleMenu);

window.addEventListener("resize", ({target:{innerWidth}})=>resize(innerWidth))

resize(window.screen.width);