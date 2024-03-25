// declare variables
var computerScore = 0;
var userScore = 0;
var gameOver = false;

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

// event listener to the buttons that call playRound function with the correct userChoice when a button is clicked
const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        var userChoice = button.textContent;
        playRound(userChoice);
    })
})

//function to play single round
function playRound (userChoice) {
    // variations call the function to save the return value of the call
    var computerChoice = getComputerChoice();
    var roundResult = result(userChoice, computerChoice);
    var scoreBoard = "Computer: " + computerScore + "  |  You: " + userScore;
    var selectionMsg = "You have selected " + userChoice + "<br>The computer has selected " + computerChoice
    document.getElementById("current-round").innerHTML = selectionMsg + "<br>" + roundResult;
    document.getElementById("score").innerHTML = "Player: " + userScore + "       |       Computer: " + computerScore;
}
    // user and computer with same choice
function result (userChoice, computerChoice) {
    if (userChoice === "rock" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "paper") {
        roundResult = "It's a tie!";
    } 
    // user wins
    else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        roundResult = "You win!";
    }
    // user loses
    else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "scissors" && computerChoice === "rock" || userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        roundResult = "You lose!";
    } else {
        roundResult = "Invalid Entry!";
    }
    return roundResult;
}

// End game
if (userScore === 5 && computerScore === 5) {
    var gameover = true;
    document.getElementById("winner").innerHTML="You and the computer tied!!"
} else if (userScore === 5 && computerScore != 5) {
    var gameover = true;
    document.getElementById("winner").innerHTML="You are the winner!!";
} else if (computerScore === 5 && userScore != 5) {
    var gameover = true;
    document.getElementById("winner").innerHTML="The computer is the winner!!";
} else {
    var gameover = false;
}