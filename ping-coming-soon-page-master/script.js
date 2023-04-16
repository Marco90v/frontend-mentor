const form = document.querySelector("form");

const submit = (e) => {
    e.preventDefault();
    for (let i = 0; i < form.childNodes.length; i++) {
        const type = form[i]?.nodeName;
        if( type === "INPUT"){
            const value = form[i]?.value;
            const arroba = value.includes("@");
            const puntoCom = value.includes(".com");
            const partes = value.split("@");
            if(value === "" || !arroba || !puntoCom || partes.length < 2){
                form[i].parentElement.classList.add("error");
            }else{
                form[i].parentElement.classList.remove("error");
            }
        }
    }
}

form.addEventListener("submit", submit);