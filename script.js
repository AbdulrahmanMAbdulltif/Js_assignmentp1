function playAround(playerSelection, computerSelection) {
  /*check the user input*/

  if ((playerSelection === "rock") & (computerSelection === "paper")) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else if ((playerSelection === "rock") & (computerSelection === "rock")) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "rock") &
    (computerSelection === "scissors")
  ) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if ((playerSelection === "paper") & (computerSelection === "rock")) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if (
    (playerSelection === "paper") &
    (computerSelection === "scissors")
  ) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else if ((playerSelection === "paper") & (computerSelection === "paper")) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "scissors")
  ) {
    return `It's a draw! We both played the ${computerSelection}. None of us made a point 🙄`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "paper")
  ) {
    return `You win! Your ${playerSelection} beats my ${computerSelection}`;
  } else if (
    (playerSelection === "scissors") &
    (computerSelection === "rock")
  ) {
    return `You lose! My ${computerSelection} beats your ${playerSelection}`;
  } else {
    return "Something is wrong, try again";
  }
}

function playerPlayed() {
  let playerChoice = prompt("Please enter rock, paper, or scissors:");

  if (!isNaN(playerChoice)) {
    console.log(
      "Ohh are you afraid of losing? Come on, choose your tool: rock, paper or scissors? "
    );
  }
  if (playerChoice === null) {
    return null;
  }
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
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
  let gameRound;
  let playerScore = 0;
  let computerScore = 0;
  for (let gameRound = 0; gameRound < 5; gameRound++) {
    const playerSelection = playerPlayed();
    if (playerSelection === null) {
      playerPlayed();
      break;
    }
    const computerSelection = computerPlay();
    let check = playAround(playerSelection, computerSelection);
    console.log(check);

    if (check.includes("You win!")) {
      playerScore += 1;
    } else if (check.includes("You lose!")) {
      computerScore += 1;
    }
  }

  if (gameRound < 5) {
    return console.log(
      `Running away, are you? That's right, run and hide while I conquer the world muahhhhaahahahahaah`
    );
  } else if (playerScore > computerScore) {
    console.log(`Oh noooo 😱 You defeated me!! Ohhh nooo`);
  } else if (computerScore > playerScore) {
    console.log(
      `GAME OVER! Loserrrrr 😂😂😂😂. Now, I shall conquer the world!`
    );
  } else {
    console.log("It's a tie! Let's play again.");
  }
}

console.log(game());
