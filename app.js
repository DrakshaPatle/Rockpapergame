var playerChoice = "";
var computerChoice = "";



let playerScore = 0;
    let computerScore = 0;
/*

 * Note that the scissors emoji has to have an extra space!
 */
var emojis = ["✂️ ", "📄", "🪨"];
var currentEmojiNumber = 0;

var shuffleIntervalID = setInterval(shuffleEmojis, 150);

var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function determineGameWinner() {
    var gameResultMessageElement = document.querySelector("#game-result-message");
    var gameResultMessage = "";

    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');


    if (playerChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
    } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
        gameResultMessage = "Player wins!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if (playerChoice === "📄" && computerChoice === "🪨") {
        gameResultMessage = "Player wins!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResultMessage = "Player wins!";
        playerScore++;
        playerScoreBoard.textContent = playerScore;

    } else {
        gameResultMessage = "Computer wins!";
        computerScore++;
        computerScoreBoard.textContent = computerScore;

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