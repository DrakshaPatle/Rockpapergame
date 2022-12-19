/* Step 6: Decide who won the game.
*/
var playerChoice = "";
var computerChoice = "";
var emojis = ["✂️ ", "📄", "🪨"];
var currentEmojiNumber = 0;

var shuffleIntervalID = setInterval(shuffleEmojis, 150);

var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function determineGameWinner() {
   var gameResultMessageElement = document.querySelector("#game-result-message");
   var gameResultMessage = "";

   if (playerChoice === computerChoice) {
       gameResultMessage = "It's a tie!";
       // Note the extra space in the scissors emoji!
   } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
       gameResultMessage = "Player wins!";
   } else if (playerChoice === "📄" && computerChoice === "🪨") {
       gameResultMessage = "Player wins!";
   } else if (playerChoice === "✂️ " && computerChoice === "📄") {
       gameResultMessage = "Player wins!";
   } else {
       gameResultMessage = "Computer wins!";
   }

   gameResultMessageElement.textContent = gameResultMessage + " Refresh to play again!";
}

function handlePlayerChoice(event) {
   if (!event.target.classList.contains("emoji")) return;
   playerChoice = event.target.textContent;
   playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
   clearInterval(shuffleIntervalID);
   determineGameWinner();
}

function shuffleEmojis() {
   computerChoice = emojis[currentEmojiNumber];
   emojiShuffleElement.textContent = computerChoice;

   if (currentEmojiNumber < emojis.length - 1) {
       currentEmojiNumber++;
   } else {
       currentEmojiNumber = 0;
   }
}
