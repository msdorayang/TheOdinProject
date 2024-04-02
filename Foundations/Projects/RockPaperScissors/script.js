// initialize scores
var computerScore = 0;
var userScore = 0;

// event listener to buttons that call playRound function with the correct userChoice when clicked
const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        var userChoice = button.textContent;
        playRound(userChoice);
    })
})

// randomly return from rock(1), paper(2), or scissors(3) to generate computerChoice
function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3) + 1
   if (computerChoice === 1) {
    return "rock";
   } else if (computerChoice === 2) {
    return "paper";
   } else {
    return "scissors";
   }
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
    }
    return roundResult;
    }

//end game
function final(userScore, computerScore) {
    if (userScore === 10 && computerScore === 10) {
    return "You and the computer tied!!"
} else if (userScore === 10 && computerScore != 10) {
    return "You are the winner!!";
} else if (computerScore === 10 && userScore != 10) {
    return "The computer is the winner!!";
} else {
    return "";
}
}

//function to play single round
function playRound (userChoice) {
    // variations call the function to save the return value of the call
    var computerChoice = getComputerChoice();
    var roundResult = result(userChoice, computerChoice);
    var scoreBoard = "Computer: " + computerScore + "  |  You: " + userScore;
    var selectionMsg = "You have selected " + userChoice + "<br>The computer has selected " + computerChoice
    var finalResult = final(userScore, computerScore);
    document.getElementById("current-round").innerHTML = selectionMsg + "<br>" + roundResult;
    document.getElementById("score").innerHTML = "Player: " + userScore + "       |       Computer: " + computerScore;
    document.getElementById("winner").innerHTML = finalResult;
}


