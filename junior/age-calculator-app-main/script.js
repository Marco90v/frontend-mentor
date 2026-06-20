const fechaActual = new Date();
const anoActual = fechaActual.getFullYear();
const mesActual = fechaActual.getMonth() + 1;
const diaActual = fechaActual.getDate();

const yearInput = document.querySelector("input#year");
const monthInput = document.querySelector("input#month");
const dayInput = document.querySelector("input#day");

const button = document.querySelector("button")

yearInput.max = anoActual

function validateYear({target:{value}}){
    if(value > anoActual) yearInput.value = anoActual
    if(value < 0) yearInput.value = 0
    yearInput.value = Number(yearInput.value).toFixed(0)
}

function validateMonth({target:{value}}){
    if(value > 12) monthInput.value = 12
    if(value < 0) monthInput.value = 0
    monthInput.value = Number(monthInput.value).toFixed(0)
}

function validateDay({target:{value}}){
    if(value > 31) dayInput.value = 31
    if(value < 0) dayInput.value = 0
    dayInput.value = Number(dayInput.value).toFixed(0)
}

function error(input, max){
    const value = Number(input.value)
    const spanNext = input.nextSibling.nextSibling
    const spanPrevious = input.previousSibling.previousSibling
    if(value === "" || value === 0 || value < 0 || value > max){
        spanNext.classList.add("show")
        input.classList.add("error")
        spanPrevious.classList.add("danger")
        return true
    }else{
        spanNext.classList.remove("show")
        input.classList.remove("error")
        spanPrevious.classList.remove("danger")
        return false
    }
}

function send() {

    const yInput = Number(yearInput.value);
    const mInput = Number(monthInput.value);
    const dInput = Number(dayInput.value);

    let years = anoActual - yInput
    let months = mesActual - mInput
    let days = diaActual - dInput

    if (months < 0 || months === 0 && days < 0) {
        years--;
        months += 12;
    }
    if (days < 0 || days < 0 && months > 0) {
        const lastDayPreviousMonth = new Date(anoActual, mesActual - 1, 0).getDate();
        days += lastDayPreviousMonth;
        months--;
    }

    console.log(years, months, days)

    const y = error(yearInput, anoActual)
    const m = error(monthInput, 12)
    const maxD = new Date(anoActual, monthInput.value, 0).getDate() // maxima fecha del mes seleccionado
    const d = error(dayInput, maxD)

    if(!y || !m || !d){
        const ySpam = document.querySelector("#y")
        const mSpam = document.querySelector("#m")
        const dSpam = document.querySelector("#d")
        ySpam.innerHTML = years
        mSpam.innerHTML = months
        dSpam.innerHTML = days
    }

}

button.addEventListener("click", send)
yearInput.addEventListener("input", validateYear)
monthInput.addEventListener("input", validateMonth)
dayInput.addEventListener("input", validateDay)
