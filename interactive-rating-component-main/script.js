const div = document.querySelectorAll("main > div");
const span = document.querySelector("main > div > span");
const getVote = document.querySelectorAll("div.star > ul > li");
const getSubmit = document.querySelector("div.star > button");
let vote = 0;

function voting(i){
    vote = i.target.id;
    getVote.forEach(value => {
        if(value.id == vote){
            value.classList.add("active");
        }else{
            value.classList.remove("active");
        }
    });
}
function submit(){
    if(vote){
        span.textContent = `You selected ${vote} out of 5`;
        div.forEach(value => {
            value.classList.toggle("hidden");
        });
    }
}

getVote.forEach((value) => {
    value.addEventListener("click", voting);
});

getSubmit.addEventListener("click", submit);