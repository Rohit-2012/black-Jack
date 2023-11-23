let player = {
  name: prompt("Enter your first name"),
  credits: 0,
};
let cards = [];
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackJack = false;
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEL = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
let creditsEl = document.getElementById("credits-el");

function getPlayerDetails() {
  if (player.name) {
    playerEl.textContent += player.name;
  } else {
    playerEl.textContent += "Noob";
  }
  creditsEl.textContent += player.credits;
}
getPlayerDetails();

function getCard() {
  let result = Math.floor(Math.random() * 13) + 1;
  if (result === 1) {
    return 11;
  } else if (result > 10) {
    return 10;
  } else {
    return result;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You have got Black Jack!";
    hasBlackJack = true;
    player.credits += 50;
    creditsEl.textContent = `Credits: ₹${player.credits}`;
  } else {
    message = "Sorry, You lost this round";
    isAlive = false;
  }
  messageEL.textContent = message;
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getCard();
  let secondCard = getCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
