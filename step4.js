// Step 4: Shuffle the computer's emoji choices.

var playerChoice = "";
var computerChoice = "";
var emojis = ["✂️", "📄", "🪨"];
var currentEmojiNumber = 0;

// New
var shuffleIntervalID = setInterval(shuffleEmojis, 150);

var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);


function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
}

function shuffleEmojis() {
    //                      New
    computerChoice = emojis[currentEmojiNumber];
    emojiShuffleElement.textContent = computerChoice;

    // New
    if (currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    }

     else {
        currentEmojiNumber = 0;
    }
}


