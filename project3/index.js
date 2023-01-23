const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
let myLinks = [];

inputBtn.addEventListener("click", function() {
    pushLink();
})

function pushLink() {
    myLinks.push(inputEl.value);
    
}