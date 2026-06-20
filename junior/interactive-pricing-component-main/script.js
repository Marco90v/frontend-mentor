const range = document.querySelector("input[type='range']");
const numberPages = document.querySelector("p.pages>span");
const checked = document.querySelector("input[type='checkbox']");
const spanPrice = document.querySelector(".price");

const data = {
    0:{"pages":10, "price":8.00},
    25:{"pages":50, "price":12.00},
    50:{"pages":100, "price":16.00},
    75:{"pages":150, "price":20.00},
    100:{"pages":200, "price":24.00},
};

function handlerChecked() {
    const value = range.value;
    const price = data[value].price;
    if(!checked.checked){
        spanPrice.innerHTML = `$${price.toFixed(2)}`
    }else{
        spanPrice.innerHTML = `$${(price - (price * 0.25) ).toFixed(2)} `;
    }
}

function handlerInput(e) {
    const value = e.target.value;
    const pages = data[value].pages;
    const x = ((range.value - range.min) / (range.max - range.min)) * 100;
    const color = `linear-gradient(90deg, #10d5c2 ${x}%, #eaeefb ${x}%)`;
    range.style.background = color;
    numberPages.innerHTML = `${pages}K `;
    handlerChecked()
}

range.addEventListener("input",handlerInput);
checked.addEventListener("change",handlerChecked);