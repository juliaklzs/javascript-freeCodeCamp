let firstCard = 2;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

 function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if (sum <= 20) {
            message = ("Do you want to draw another card?");
        } else if (sum === 21) {
            message = ("BlackJack!!");
            hasBlackJack = true;
        } else {
            isAlive = false;
            message = ("You've lost");
        }

        messageEl.textContent = message;
}

function addCard() {
    newCard = 8;
    sum += newCard;

    renderGame();
}
