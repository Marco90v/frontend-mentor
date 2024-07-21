const checkbox = document.querySelector("#switch");
const priceInput = document.querySelectorAll("#price");
let action = true;
const data = [
    [
        "&dollar;19.99",
        "&dollar;199.99"
    ],
    [
        "&dollar;24.99",
        "&dollar;249.99"
    ],
    [
        "&dollar;39.99",
        "&dollar;399.99"
    ],
]
function handlerSwitch() {
    action = !action;
    for (let i = 0; i < priceInput.length; i++) {
        priceInput[i].innerHTML = data[i][Number(action)];
    }
}
handlerSwitch();
checkbox.addEventListener("click", handlerSwitch)