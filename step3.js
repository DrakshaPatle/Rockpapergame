
/* Step 2: Show an emoji on the page for the computer's choice
 */
var playerChoice = "";
var computerChoice = "";  // New
/*
 * Note that the scissors emoji has to have an extra space!
 */
// New
var emojis = ["✂️ ", "📄", "🪨"];

var playerChoiceContainer = document.querySelector("#player-choice-container");
// New
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

// New
shuffleEmojis();

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
}


// New
function shuffleEmojis() {
    computerChoice = emojis[1];
    emojiShuffleElement.textContent = computerChoice;
}