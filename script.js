const cricketer = "Kagiso Rabada";
const clues = [
    "This player once took a hat-trick in a T20 World Cup match.",
    "He’s known for a fiery on-field celebration that went viral.",
    "Role: Bowler",
    "Batting Hand: Left",
    "Birth Year: 1988",
    "Current IPL Club: Delhi Capitals",
    "Nationality: South African"
];

let currentClueIndex = 2;
let guessCount = 0;
let maxGuesses = 5;
let stars = 5;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clue1").textContent = clues[0];
    document.getElementById("clue2").textContent = clues[1];
    document.getElementById("submit-guess").addEventListener("click", checkGuess);
    document.getElementById("guess-input").addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkGuess();
    });
});

function checkGuess() {
    const guess = document.getElementById("guess-input").value.trim().toLowerCase();
    guessCount++;

    if (guess === cricketer.toLowerCase()) {
        showResult(`Correct! You guessed "${cricketer}" in ${guessCount} tries. Stars: ${stars}`);
        endGame();
    } else if (guessCount >= maxGuesses) {
        showResult(`Game Over! The answer was "${cricketer}". Stars: 0`);
        revealAllClues();
        endGame();
    } else {
        stars--;
        document.getElementById("star-count").textContent = stars;
        revealNextClue();
    }

    document.getElementById("guess-input").value = "";
}

function revealNextClue() {
    if (currentClueIndex < clues.length) {
        const nextClue = document.getElementById(`clue${currentClueIndex + 1}`);
        nextClue.textContent = clues[currentClueIndex];
        nextClue.classList.remove("hidden");
        currentClueIndex++;
    }
}

function revealAllClues() {
    for (let i = 2; i < clues.length; i++) {
        const clueElement = document.getElementById(`clue${i + 1}`);
        clueElement.textContent = clues[i];
        clueElement.classList.remove("hidden");
    }
}

function showResult(message) {
    const result = document.getElementById("result");
    result.textContent = message;
    result.classList.remove("hidden");
}

function endGame() {
    document.getElementById("submit-guess").disabled = true;
    document.getElementById("guess-input").disabled = true;
}