function handlerClick(e){
    if(e.target.localName === "li"){
        e.target.classList.toggle("expanded")
    }else{
        e.currentTarget.classList.toggle("expanded")
    }
}
const li = document.querySelectorAll("li")
for (let index = 0; index < li.length; index++) {
    li[index].addEventListener("click", handlerClick)
}