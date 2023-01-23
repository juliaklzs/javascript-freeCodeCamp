let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

/*let player = {
    name: "Julia",
    chips: 5,
    winGame: function addChips() {
        chips += 10;
        playerEl.textContent = player.name + ": $" + player.chips;
    },
    loseGame: function removeChips() {
        chips -=  5;
        playerEl.textContent = player.name + ": $" + player.chips;
    },
}*/

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard > 10) {
        randomCard = 10;
    }

    return randomCard;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
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

    if (isAlive === true && hasBlackJack === false) {
        newCard = getRandomCard();

        cards.push(newCard);
        sum += newCard;

        renderGame();
    } else {
        window.alert("To get a new card, start the game (again).");
    }
}
