var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;

var canHit = true

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const types = ["C", "D", "H", "S"]
    let deck = [];
//initializing
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
    return deck;
}

const deck = buildDeck();

const dealButton = document.getElementById('deal');

dealButton.addEventListener('click', () => {
  const playerHand = document.getElementById('your-cards');  
  const dealerHand = document.getElementById('dealer-cards');

  function dealPlayer() {
    const playerCard = ['./images/back.png'];
    const imgTag = document.createElement('img');
    imgTag.src = playerCard[0];
    playerHand.appendChild(imgTag);
  }

  function dealDealer() {
    const dealerCard = ['./images/back.png'];
    const imgTag = document.createElement('img');
    imgTag.src = dealerCard[0];
    dealerHand.appendChild(imgTag);
  }

  
  myTimeout = setTimeout(dealPlayer, 500);
 
  myTimeout = setTimeout(dealDealer, 1000);
  
  myTimeout = setTimeout(dealPlayer, 1500);
  
  myTimeout = setTimeout(dealDealer, 2000);
});

const hitButton = document.getElementById('hit');

hitButton.addEventListener('click', () => {
  const playerHand = document.getElementById('your-cards');  
  const dealerHand = document.getElementById('dealer-cards');

  function hitPlayer() {
    const playerCard = ['./images/back.png'];
    const imgTag = document.createElement('img');
    imgTag.src = playerCard[0];
    playerHand.appendChild(imgTag);
  }

  function hitDealer() {
    const dealerCard = ['./images/back.png'];
    const imgTag = document.createElement('img');
    imgTag.src = dealerCard[0];
    dealerHand.appendChild(imgTag);
  }

  
  myTimeout = setTimeout(hitPlayer, 500);
 
  myTimeout = setTimeout(hitDealer, 1000);
  

});

function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] =deck[j];
    deck[j] = temp;
  }
  console.log(deck);
}

function startGame() {
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  while (dealerSum < 17) {
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = "./images/" + card + ".png";
    dealerSum += getValue(card);
dealerAceCount += chackAce(card);
document.getElementById('dealer-cards').append(cardImg);
  }
  console.log(dealerSum);

  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = "./images/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById('your-cards').append(cardImg);
  }

  console.log(yourSum);
  document.getElementById('hit').addEventListener("click", hit);
  document.getElementById('stay').addEventListener('click', stay);
}

function hit() {
  if (!canHit) {
    return;

  }

  let cardImg = document.createElement('img');
  let card = deck.pop();
  
}