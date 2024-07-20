const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const li = document.querySelector("li:first-child");

function handlerClick(e) {
    if(e){
        li.classList.add("moveLeft");
    }else{
        li.classList.remove("moveLeft");
    }
}

next.addEventListener("click", ()=>handlerClick(1));
prev.addEventListener("click", ()=>handlerClick(0));