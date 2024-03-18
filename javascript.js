// function to randomly return "rock", "paper", or "scissors".
function getComputerChoice(){
   let rndInt = Math.floor(Math.random() * 3) + 1
   if (rndInt == 1) {
    return "rock";
   } else if (rndInt == 2) {
    return "paper";
   } else {
    return "scissors";
   }
}

//function for users to select their choice
function getUserChoice () {
    let UserChoice = prompt ("Rock, paper, or scissors?");
    return UserChoice;
}