const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLinks = [];

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value);
    renderLinks();
    inputEl.value = "";
})

function renderLinks() {
    let listItems = "";
    for (let i=0; i < myLinks.length; i++) {
        listItems += `
            <li>
             <a target='_blank' href='${myLinks[i]}'>${myLinks[i]}</a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
}
