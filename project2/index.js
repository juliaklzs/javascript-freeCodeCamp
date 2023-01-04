let firstCard = 2;
let secondCard = 11;

let sum = firstCard + secondCard;

if (sum <= 20) {
    console.log("Do you want to play another card? 🙂");
} else if (sum === 21) {
    console.log("BlackJack!! 🥳");
} else {
    console.log("You've lost 😭");
}
