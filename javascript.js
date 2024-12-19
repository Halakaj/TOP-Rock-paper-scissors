
function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } else if (computer === 2) {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    const resultsDiv = document.getElementById("results");

    // Check if the game has already been won
    if (humanScore === 5 || computerScore === 5) {
        resultsDiv.innerHTML = humanScore === 5
            ? `<p>You win the game! Final score - Human: ${humanScore}, Computer: ${computerScore}</p>`
            : `<p>Computer wins the game! Final score - Human: ${humanScore}, Computer: ${computerScore}</p>`;
        return; // Stop the game after one player wins
    }

    if (human === computer) {
        resultsDiv.innerHTML = `<p>It's a tie!, Human: ${humanScore}, Computer: ${computerScore}</p>`;
    } else if (
        (human === "scissors" && computer === "rock") ||
        (human === "paper" && computer === "scissors") ||
        (human === "rock" && computer === "paper")
    ) {
        computerScore++;
        resultsDiv.innerHTML = `<p>Computer wins this round! Human: ${humanScore}, Computer: ${computerScore}</p>`;
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++;
        resultsDiv.innerHTML = `<p>You win this round! Human: ${humanScore}, Computer: ${computerScore}</p>`;
    } else {
        resultsDiv.innerHTML = "<p>Invalid choice! Please select rock, paper, or scissors.</p>";
    }
}

// Add event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".choice-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.id; // The button's id matches the choice
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
});
