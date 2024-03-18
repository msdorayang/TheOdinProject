// function to randomly return "rock", "paper", or "scissors".
function getComputerChoice(){
   let comInt = Math.floor(Math.random() * 3) + 1
   if (comInt == 1) {
    return "rock";
   } else if (comInt == 2) {
    return "paper";
   } else {
    return "scissors";
   }
   return getComputerChoice;
}
