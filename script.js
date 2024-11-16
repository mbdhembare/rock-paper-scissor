function getHumanChoice() {
    const yourChoice = prompt("enter your choice:rock,paper,scissor");
    return yourChoice;
  }
  
  function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  const choices = ["rock", "paper", "scissor"];
  
  