const form = document.querySelector("form")
const divInput = document.querySelectorAll("div.input")

const radioCheck = document.querySelectorAll("span.radioCheck")
const checked = document.querySelector("span.checked")

const alertEle = document.querySelector("div.alert")

function validarEmail(value){
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!regex.test(value)) {
        return false
    } else {
        return true
    }
}

function submit(e) {
    e.preventDefault()
    let success = true
    for (let i = 0; i < divInput.length; i++) {
        const element = divInput[i];
        const input = element.querySelectorAll("input")
        const textarea = element.querySelector("textarea")
        const span = element.querySelector("span.error")

        if(textarea && textarea.value === ""){
            span.classList.add("visible")
            textarea.classList.add("error")
            success = false
        }else if(textarea && textarea.value !== ""){
            span.classList.remove("visible")
            textarea.classList.remove("error")
            success = true
        }

        if(input.length === 1){
            if(input[0].type === "checkbox"){
                if(!input[0].checked){
                    span.classList.add("visible")
                    success = false
                }else{
                    span.classList.remove("visible")
                    success = true
                }
            }else{                
                if(input[0].value === ""){
                    if(input[0].name === "email"){
                        span.innerHTML = "This field is required"
                    }
                    input[0].classList.add("error")
                    span.classList.add("visible")
                    success = false
                }else{
                    span.classList.remove("visible")
                    input[0].classList.remove("error")
                    success = true
                }

                if(input[0].name === "email" && input[0].value !== ""){
                    if(!validarEmail(input[0].value)){
                        span.innerHTML = "Please enter a valid email address"
                        span.classList.add("visible")
                        success = false
                    }else{
                        success = true
                    }
                }
            }
        }else if(input.length === 2){
            if(!input[0].checked && !input[1].checked){
                span.classList.add("visible")
                success = false
            }else{
                span.classList.remove("visible")
                success = true
            }
        }
    }
    if(success){
        console.log(alertEle)
        alertEle.classList.add("success")
    }
}

function clickCkecked(e) {
    const ele = e.srcElement.parentNode.querySelector("input")
    if(ele.type === "checkbox"){
        ele.checked = !ele.checked
    }else{
        ele.checked = true
    }
}

form.addEventListener("submit", submit)
checked.addEventListener("click", clickCkecked)
for (let i = 0; i < radioCheck.length; i++) {
    radioCheck[i].addEventListener("click", clickCkecked)
}
