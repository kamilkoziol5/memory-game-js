const cards = document.querySelectorAll('.memory-card');
const scoreDiv = document.querySelector('.score');
const resetBtn = document.querySelector('#reset');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let number = 0;

function flipCard() {
	if (lockBoard) return;

	if (this === firstCard) return;

	this.classList.add('flip');

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
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	firstCard.classList.add('disabled');
	secondCard.classList.add('disabled');
	firstCard.style.cursor = 'not-allowed';
	secondCard.style.cursor = 'not-allowed';
	number++;
	checkWinCondition();
	updateScore();
}

function unflipCard() {
	lockBoard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
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
	cards.forEach(card => {
		const index = Math.floor(Math.random() * 12);
		card.style.order = index;
	});
}

function updateScore() {
	scoreDiv.innerHTML = `
	Attempts: 
<span class="score-number">${number}</span> 
	`;
}

function checkWinCondition() {
	const allDisabled = [...cards].every(card =>
		card.classList.contains('disabled')
	);
	if (allDisabled) {
		const popup = document.createElement('div');
		popup.classList.add('popup');
		popup.classList.add('visible');

		popup.innerHTML = `
		<div class="popup-wrapper">
				<div class="title">
					<img src="images/winner.png" alt="" />
					<h3>You won!!</h3>
				</div>
				<span class="score-number-span"
					>Twoja liczba ruchów to
					<span id="score-number">${number}</span></span
				>
				<button class="close-popup">Reset</button>
			</div>
		`;

		popup.style.left = '0';

		const closeBtn = popup
			.querySelector('.close-popup')
			.addEventListener('click', () => {
				popup.classList.remove('visible');
				resetGame();
			});

		document.body.append(popup);
	}
}

function resetGame() {
	cards.forEach(card => {
		card.classList.remove('flip');
		card.addEventListener('click', flipCard);
		card.style.cursor = 'pointer';
		card.classList.remove('disabled');
	});

	number = 0;
	updateScore();
	resetBoard();
	shuffling();
}

resetBtn.addEventListener('click', resetGame);

cards.forEach(card => card.addEventListener('click', flipCard));
updateScore();
shuffling();
