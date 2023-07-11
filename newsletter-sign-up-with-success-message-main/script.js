const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramEmail = urlParams.get('email');
const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

paramEmail ? submitted() : confForm();

function submitted(){
    const spanEmail = document.getElementById("email");
    spanEmail.innerText = `${paramEmail}.`;
    const buttonReturn = document.getElementById("return");
    buttonReturn.addEventListener("click", back);
}

function back(){
    history.back();
}

function confForm(){
    const formSend = document.getElementById("formSend");
    formSend.addEventListener("submit", send);
}

function send(e){
    e.preventDefault();
    const spanError = e.target.children['error'];
    const email = e.target["email"];
    const validate = regex.test(email.value);
    if(!validate){
        spanError.classList.add('error');
        email.classList.add('error');
    }else{
        spanError.classList.remove('error');
        email.classList.remove('error');
        location.href = `./send.html?email=${email.value}`;
    }
}