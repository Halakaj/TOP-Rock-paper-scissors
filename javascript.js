function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return "rock";
    } else if (computer === 1) {
        return "paper";
    } else if (computer === 2) {
        return "scissors";
    } else {
        console.log("Oops");
    }
}

function getHumanChoice() {
    let human = prompt("Rock, paper, or scissors?").toLowerCase();
    return human;
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
    if (human === computer) {
        console.log("It's a tie!");
    } else if (
        (human === "scissors" && computer === "rock") ||
        (human === "paper" && computer === "scissors") ||
        (human === "rock" && computer === "paper")
    ) {
        computerScore++;
        console.log("Computer wins this round!");
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        humanScore++;
        console.log("You win this round!");
    } else {
        console.log("Invalid choice! Please select rock, paper, or scissors.");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) { // Play 5 rounds
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer wins the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
