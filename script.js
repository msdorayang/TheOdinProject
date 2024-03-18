// declare variables
var computerScore = 0;
var userScore = 0;
var computerChoice;
var userChoice;
var roundResult;
var finalResult;

// function to randomly return from rock(1), paper(2), or scissors(3) 
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

//users select their choice
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
    // user and computer with same choice
    if (userChoice === "rock" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "paper") {
        userScore = ++userScore;
        computerScore = ++computerScore;
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
    computerScore = 0;
    userScore = 0;
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
    // show final score of the game
    console.log("Your final score is " + userScore + " & the computer's final score is " + computerScore)
    // show final result of the game
    if (userScore > computerScore) {
        finalResult = "Congratulations, you won!"
    } else if (computerScore > userScore) {
        finalResult = "Sorry, you lost!"
    } else if (computerScore = userScore) {
        finalResult = "You tied!"
    }
    console.log(finalResult);
    }