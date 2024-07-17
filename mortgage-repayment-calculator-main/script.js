const form = document.querySelector("form");
const clear = document.querySelector(".clear");

function showResult(monthlyPayment, totalRepayment) {
    const preResult = document.querySelector(".preResult");
    const postResult = document.querySelector(".postResult");
    const monthlyPay = document.querySelector(".monthly > .pay");
    const totalPay = document.querySelector(".total > .pay");
    if(monthlyPayment && totalRepayment){
        preResult.classList.add("hidden");
        postResult.classList.remove("hidden");
        monthlyPay.innerHTML = `£${monthlyPayment.toString()}`;
        totalPay.innerHTML = `£${totalRepayment.toString()}`;
    }else{
        preResult.classList.remove("hidden");
        postResult.classList.add("hidden");
        monthlyPay.innerHTML = "";
        totalPay.innerHTML = "";
    }
}

function validateInput(obj) {
    let vI = true;
    const {type, ...input} = obj;
    Object.entries(input).forEach(([k,v])=>{
        const elements = document.querySelector(`#${k}`);
        if(v === 0){
            vI = false;
            elements.classList.add("error");
            elements.parentNode.nextSibling.nextSibling.innerHTML = "This field is required";
            elements.parentNode.nextSibling.nextSibling.classList.add("mt");
        }else{
            elements.classList.remove("error");
            elements.parentNode.nextSibling.nextSibling.innerHTML = "";
            elements.parentNode.nextSibling.nextSibling.classList.remove("mt");
        }
    })
    const elements = document.querySelector("#typeError");
    if(!type){
        vI = false;
        elements.innerHTML = "This field is required";
    }else{
        elements.innerHTML = "";
    }
    return vI;
}

function handlerSubmit(e) {
    e.preventDefault();
    const data = {}
    let monthlyPayment = 0;
    let totalRepayment = 0;
    for (let index = 0; index < e.target.length; index++) {
        if(e.target[index].type === "number"){
            data[e.target[index].id] = Number(e.target[index].value);
        }
        if(e.target[index].type === "radio" && e.target[index].checked === true){
            data.type = e.target[index].value;
        }
    }
    if(validateInput(data) && data.type){
        data.rate = data.rate / 100;
        if(data.type === "repayment"){
            const monthlyRate = data.rate / 12;
            const n = data.term * 12;
            monthlyPayment = (data.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
            totalRepayment = monthlyPayment * n;
        }else if(data.type === "only"){
            monthlyPayment = (data.amount * data.rate) / 12;
            totalRepayment = monthlyPayment * data.term * 12;
        }
        showResult(monthlyPayment.toFixed(2), totalRepayment.toFixed(2));
    }
    else { showResult(0, 0); }
}

function handlerClick() {
    for (let index = 0; index < form.elements.length; index++) {
        if(form.elements[index].type === "number"){
            form.elements[index].value = "";
        }else if(form.elements[index].type === "radio"){
            form.elements[index].checked = false;
        }
    }
    showResult(0,0)
}

form.addEventListener("submit", handlerSubmit);
clear.addEventListener("click", handlerClick);