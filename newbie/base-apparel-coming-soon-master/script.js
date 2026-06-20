
const button = document.querySelector("button#send");
const errorIcon = document.querySelector("#form-email>img");
const errorMsg = document.querySelector("#form-email>span");
const email = document.querySelector("input#email");

function Error(){
    errorIcon.classList.contains("hidden") && errorIcon.classList.remove("hidden");
    errorMsg.classList.contains("hidden") && errorMsg.classList.remove("hidden");
}

function Ok(){
    !errorIcon.classList.contains("hidden") && errorIcon.classList.add("hidden");
    !errorMsg.classList.contains("hidden") && errorMsg.classList.add("hidden");
}

function send(e){
    e.preventDefault();
    email.checkValidity() ? Ok() : Error()
}

button.addEventListener('click',send);