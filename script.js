let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const yourChoice = prompt("enter your choice:rock,paper,scissor");
  return yourChoice;
}

function getComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const choices = ["rock", "paper", "scissor"];

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log("You wone! rock break scissor");
    humanScore++;
  } else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log("You lose! rock break scissor");
    computerScore++;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log("You wone! scissor cut paper");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log("You lose! scissor cut paper");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You wone! paper beats rock");
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! paper beats rock");
    computerScore++;
  } else {
    console.log("a tie!");
  }
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice(choices));
}
playGame();