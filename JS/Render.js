export function renderUi() {
  const appDiv = document.querySelector(".app");
  appDiv.innerHTML = `
<div class="top-info-container">
			<h2>Try Your Chance!</h2>
			<div class="bottom-section">
				<div class="score"></div>
				<button class="reset-btn" id="reset">Reset</button>
			</div>
		</div>
		<section class="memory-game">
			<div class="memory-card" data-framework="air">
				<img class="front-face" src="images/air.png" alt="Aurelia" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="air">
				<img class="front-face" src="images/air.png" alt="Aurelia" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>

			<div class="memory-card" data-framework="photo">
				<img class="front-face" src="images/photo.png" alt="Vue" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="photo">
				<img class="front-face" src="images/photo.png" alt="Vue" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>

			<div class="memory-card" data-framework="experience">
				<img class="front-face" src="images/experience.png" alt="Angular" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="experience">
				<img class="front-face" src="images/experience.png" alt="Angular" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>

			<div class="memory-card" data-framework="ilustrator">
				<img class="front-face" src="images/illustrator.png" alt="Ember" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="ilustrator">
				<img class="front-face" src="images/illustrator.png" alt="Ember" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>

			<div class="memory-card" data-framework="lightroom">
				<img class="front-face" src="images/lightroom.png" alt="Backbone" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="lightroom">
				<img class="front-face" src="images/lightroom.png" alt="Backbone" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>

			<div class="memory-card" data-framework="photoshop">
				<img class="front-face" src="images/photoshop.png" alt="React" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
			<div class="memory-card" data-framework="photoshop">
				<img class="front-face" src="images/photoshop.png" alt="React" />
				<img class="back-face" src="images/java-script.png" alt="JS Badge" />
			</div>
		</section>
`;
  return {
    cards: appDiv.querySelectorAll(".memory-card"),
    scoreDiv: appDiv.querySelector(".score"),
    resetBtn: appDiv.querySelector("#reset"),
  };
}
