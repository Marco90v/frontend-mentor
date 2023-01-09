const form = document.querySelector("form");

const div = document.querySelectorAll("main > div");
const span = document.querySelector("main > div > span");
let vote = 0;

function submit(e){
    e.preventDefault();
    [...e.target].forEach(element=>{
        if(element.checked){
            vote = element.value;
            span.textContent = `You selected ${vote} out of 5`;
            div.forEach(value => {
                value.classList.toggle("hidden");
            });
        }
    })
}
form.addEventListener("submit", submit);