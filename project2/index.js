let firstCard = 1;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");


function getRandomCard() {
    
}

function startGame() {
    renderGame();
}

 function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

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

    cards.push(newCard);
    sum += newCard;

    renderGame();
}

