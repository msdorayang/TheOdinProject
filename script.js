// declare variables
var computerScore = 0;
var userScore = 0;
var computerChoice;
var userChoice;
var result;

// function to randomly return "rock", "paper", or "scissors".
function getComputerChoice(){
   var computerChoice = Math.floor(Math.random() * 3) + 1
   if (computerChoice === 1) {
    computerChoice = "rock";
   } else if (computerChoice === 2) {
    computerChoice = "paper";
   } else {
    computerChoice = "scissors";
   }
   return computerChoice;
}

//function for users to select their choice
function getUserChoice () {
    var userChoice = prompt ("rock, paper, or scissors?").toLowerCase();
    return userChoice;
}

//function to play single round
function playRound () {
    // variations call the function to save the return value of the call
    var computerChoice = getComputerChoice();
    var userChoice = getUserChoice();
    console.log("You've selected " + userChoice);
    console.log("The computer has selected " + computerChoice);
    // user and computer choosing the same thing
    if (userChoice === "rock" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "paper") {
        roundResult = "It's a tie!";
    } 
    // user wins
    else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        userScore = ++userScore;
        roundResult = "You win!";
    }
    // user loses
    else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "scissors") {
        computerScore = ++computerScore;
        roundResult = "You lose!";
    } else {
        roundResult = "Invalid Entry!";
    }
    console.log(roundResult);
    console.log("Computer: " + computerScore + "  |  You: " + userScore);
}

//10 rounds rps with a final score
function playGame() {
    var computerScore = 0;
    var userScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    // show winner
    if (userScore > computerScore) {
        finalResult = "Yay! You won the game!"
    } else if (computerScore > userScore) {
        finalResult = "Sorry, the computer won!"
    } else {
        finalResult = "You tied this game, try again!"
    }
    console.log(finalResult);
    }