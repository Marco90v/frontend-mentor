function handlerClick(e){
    // console.log(e)
    // console.log(e)
    // console.log(e.target.tagName)
    // console.log(e.currentTarget)
    // e.srcElement.parentElement.classList.toggle("expanded")
    if(e.target.localName === "li"){
        e.target.classList.toggle("expanded")
    }else{
        // e.srcElement.parentElement.classList.toggle("expanded")
        e.currentTarget.classList.toggle("expanded")
    }
}
const li = document.querySelectorAll("li")
for (let index = 0; index < li.length; index++) {
    // console.log(li[index])
    li[index].addEventListener("click", handlerClick)
}
// li.addEventListener("click", handlerClick)
// console.log(li)