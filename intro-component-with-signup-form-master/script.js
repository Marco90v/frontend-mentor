const form = document.querySelector("form");

const submit = (e) => {
    e.preventDefault();
    for (let i = 0; i < form.childNodes.length; i++) {
        const value = form[i]?.value;
        const type = form[i]?.nodeName;
        if( type === "INPUT"){
            if(value === ""){
                form[i].parentElement.classList.add("error");
            }else{
                form[i].parentElement.classList.remove("error");
            }
        }
    }
}

form.addEventListener("submit", submit);