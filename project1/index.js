
let count = 0;

console.log(count);

function increment() {
    count ++;
    document.getElementById("count-el").textContent = count;
}

function save() {
    let saveEl = document.getElementById("save-el");
    let countEl = document.getElementById("count-el");
    saveEl.textContent += " "+ countEl.textContent + " - ";
    count = 0;
    countEl.textContent = count;
}