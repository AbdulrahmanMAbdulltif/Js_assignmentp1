function playAround(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toLowerCase();

    /*check the user input*/

    if (!isNaN(playerSelection)) {
        console.log("You enterd the wrong input")
    } else {

        if (playerSelection === "rock" & computerSelection === "paper") {
            return "You Lose! Paper beats Rock ";
        } else if (playerSelection === "paper" & computerSelection === "rock") {
            return "You win! Rock beats paper ";
        } else if (playerSelection === "rock" & computerSelection === "scissors") {
            return "You win! Rock beats scissors ";
        } else if (playerSelection === "scissors" & computerSelection === "rock") {
            return "You lose! Rock beats scissors ";
        } else if (playerSelection === "paper" & computerSelection === "scissors") {
            return "You lose! Scissors beats paper ";
        } else if (playerSelection === "scissors" & computerSelection === "paper") {
            return "You win! Scissors beats paper ";
        } else if (playerSelection === "scissors" & computerSelection === "scissors") {
            return "it is draw";
        } else if (playerSelection === "paper" & computerSelection === "paper") {
            return "You win! Scissors beats paper ";
        } else if (playerSelection === "rock" & computerSelection === "rock") {
            return "it is draw";
        } else {
            return "You enterd the wrong input"
        }

    }
}

function computerPlay() {

    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return "rock";
    } else if (randomNum == 2) {
        return "scissors";

    } else {
        return "paper";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter rock, paper, or scissors:");
        const computerSelection = computerPlay();
        console.log(playAround(playerSelection, computerSelection));
    }

}

console.log(game());