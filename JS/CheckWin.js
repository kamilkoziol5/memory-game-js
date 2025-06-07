export function checkWinCondition(cards, number, resetGame) {
  const allDisabled = [...cards].every((card) =>
    card.classList.contains("disabled")
  );
  if (allDisabled) {
    const popup = document.createElement("div");
    popup.classList.add("popup", "visible");

    popup.innerHTML = `
        <div class="popup-wrapper">
          <div class="title">
            <img src="images/winner.png" alt="" />
            <h3>You won!!</h3>
          </div>
          <span class="score-number-span">
            Twoja liczba ruchów to
            <span id="score-number">${number}</span>
          </span>
          <button class="close-popup">Reset</button>
        </div>
      `;

    popup.style.left = "0";

    popup.querySelector(".close-popup").addEventListener("click", () => {
      popup.classList.remove("visible");
      resetGame();
    });

    document.body.append(popup);
  }
}
