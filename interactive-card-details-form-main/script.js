const textNotBlank = "Can't be blank"
const errorFormat = "Wrong format, numbers only"
const classFailure = "failure"

const submit = document.querySelector("button#send")
const inputmm = document.querySelector("input#mm")
const inputyy = document.querySelector("input#yy")
const inputcvc = document.querySelector("input#cvc")

function validate(selectString, selectContent, selectSpan){
    const input = document.querySelector(selectString)
    const letters = input.value.match(/[A-z]|[a-z]/g)
    const content = document.querySelector(selectContent)
    const span = document.querySelector(selectSpan)
    if(input.value === "" || Number(input.value) === 0){
        span.innerHTML = textNotBlank
        content.classList.add(classFailure)
        return false
    }else if(letters && selectString === "input#cardNumber" ){
        span.innerHTML = errorFormat
        content.classList.add(classFailure)
        return false
    }
    else{
        span.innerHTML = ""
        content.classList.remove(classFailure)
        return true
    }
}

function send(e) {
    e.preventDefault();
    const name = validate("input#cardName", "div.name", "div.name>span")
    const number = validate("input#cardNumber", "div.numberCard", "div.numberCard>span")
    const mm = validate("input#mm", "div.inputMM", "div.inputMM>span")
    const yy = validate("input#yy", "div.inputYY", "div.inputYY>span")
    const cvc = validate("input#cvc", "div.inputCVC", "div.inputCVC>span")
}

function validateDate({target:{value}}, input, min, max) {
    if(value < min) input.value = min
    if(value > max) input.value = max
}

submit.addEventListener("click", send)
inputmm.addEventListener("input", (e)=>validateDate(e, inputmm, 0, 12))
inputyy.addEventListener("input", (e)=>validateDate(e, inputyy, 0, 99))
inputcvc.addEventListener("input", (e)=>validateDate(e, inputcvc, 0, 999))