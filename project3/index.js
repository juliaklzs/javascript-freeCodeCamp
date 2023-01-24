const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLinks = [];

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads() {
    let listItems = "";
    for (let i=0; i < myLinks.length; i++) {
        listItems += "<li>" + myLinks[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}
