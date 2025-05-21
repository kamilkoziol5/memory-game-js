const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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
	let isMatch =
		firstCard.dataset.framework === secondCard.dataset.framework
			? disableCard()
			: unflipCards();
}

function disableCard() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	firstCard.classList.add('disabled');
	secondCard.classList.add('disabled');
	firstCard.style.cursor = 'not-allowed';
	secondCard.style.cursor = 'not-allowed';
}

function unflipCards() {
	lockBoard = !lockBoard;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		resetBoard();
	}, 1200);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

(function shuffling() {
	cards.forEach(card => {
		const index = Math.floor(Math.random() * 12);

		card.style.order = index;
	});
})();

cards.forEach(card => card.addEventListener('click', flipCard));
