const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let myLinks = [];
let listItems = "";

inputBtn.addEventListener("click", function() {
    pushLink();
})

function pushLink() {
    myLinks.push(inputEl.value);
    
}

for (let i=0; i < myLinks.length; i++) {
    listItems += "<li>" + myLinks[i] + "</li>";
}

ulEl.innerHTML = listItems;