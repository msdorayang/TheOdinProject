// function to randomly return "rock", "paper", or "scissors".
function getComputerChoice(){
   let computerChoice = Math.floor(Math.random() * 3) + 1
   if (computerChoice == 1) {
    computerChoice = "rock";
   } else if (computerChoice == 2) {
    computerChoice = "paper";
   } else {
    computerChoice= "scissors";
   }
   return computerChoice;
}

//function for users to select their choice
function getUserChoice () {
    let userChoice = prompt ("rock, paper, or scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}