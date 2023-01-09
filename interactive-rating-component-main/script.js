let vote = 0;
function voting(i){
    vote = i.target.id;
}
function submit(){
    if(vote){
        const span = document.querySelector("main > div > span");
        span.textContent = `You selected ${vote} out of 5`
        const div = document.querySelectorAll("main > div");
        div.forEach(value=>{
            value.classList.toggle("hidden");
        });
    }
}

const getVote = document.querySelectorAll("div.star > ul >li");
getVote.forEach((value)=>{
    value.addEventListener("click", voting);
});

const getSubmit = document.querySelector("div.star > button");
getSubmit.addEventListener("click", submit);