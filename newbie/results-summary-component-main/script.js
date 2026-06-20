(async ()=>{
    const data = await fetch("./data.json",{cache:"no-cache"}).then(e=>e.json());
    const ul = document.querySelector("ul");
    data.forEach(element => {
        const { category, score, icon } = element;
        const newElement = `
            <li class="${category}">
                <div class="nameData">
                    <img src=${icon} alt=${category} >
                    <span>${category}</span>
                </div>
                <div class="data">
                    <p>${score}<span> / 100</span></p>
                </div>
            </li>
        `;
        ul.insertAdjacentHTML("beforeend",newElement);
    });
})();