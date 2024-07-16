const form = document.querySelector("form");

function showResult(monthlyPayment, totalRepayment) {
    const preResult = document.querySelector(".preResult");
    const postResult = document.querySelector(".postResult");
    const monthlyPay = document.querySelector(".monthly > .pay");
    const totalPay = document.querySelector(".total > .pay");
    
    preResult.classList.add("hidden");
    postResult.classList.remove("hidden");
    monthlyPay.innerHTML = `${"£" + monthlyPayment.toString()}`;
    totalPay.innerHTML = `${"£" + totalRepayment.toString()}`;
}

function validateInput(obj) {
    const {amount,rate,term} = obj;
    if(amount!="" && term!="" && rate!=""){
        return typeof amount === "number" && typeof term === "number" && typeof rate === "number";        
    }else{
        return false
    }
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
}

form.addEventListener("submit", handlerSubmit);