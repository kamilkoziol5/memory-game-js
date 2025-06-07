import { renderUi } from "./Render.js";
import { checkWinCondition } from "./CheckWin.js";

const { cards, scoreDiv, resetBtn } = renderUi();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let number = 0;

function flipCard() {
  if (lockBoard) return;

  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  const isMatch =
    firstCard.dataset.framework === secondCard.dataset.framework
      ? disableCard()
      : unflipCard();
}

function disableCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  firstCard.classList.add("disabled");
  secondCard.classList.add("disabled");
  firstCard.style.cursor = "not-allowed";
  secondCard.style.cursor = "not-allowed";
  number++;
  updateScore();
  checkWinCondition(cards, number, resetGame);
}

function unflipCard() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
    number++;
    updateScore();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffling() {
  cards.forEach((card) => {
    const index = Math.floor(Math.random() * cards.length);
    card.style.order = index;
  });
}

function updateScore() {
  scoreDiv.innerHTML = `
	Attempts: 
<span class="score-number">${number}</span> 
	`;
}

function resetGame() {
  cards.forEach((card) => {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
    card.style.cursor = "pointer";
    card.classList.remove("disabled");
  });

  number = 0;
  updateScore();
  resetBoard();
  shuffling();
}

resetBtn.addEventListener("click", resetGame);

updateScore();
shuffling();
