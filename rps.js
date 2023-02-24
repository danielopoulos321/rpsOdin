//Prompt User for rock, paper or sceissors
//Randomly generate r, p or s for computer
//Compare user vs Computer choice, print appropriate message

let userScore = 0;
let pcScore = 0;
game();
displayWinner(userScore,pcScore);

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum == 0){
        return 'rock';
    } else if (randomNum == 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "Tie!"
    }
    if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            pcScore++;
            return "You Lose! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            userScore++;
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            userScore++;
            return "You Win! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            pcScore++;
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            pcScore++;
            return "You Lose! Rock beats Scissors!";
        }
        if (computerSelection == 'paper'){
            userScore++;
            return "You Win! Scissors beats Paper!";
        }
    }
}

function displayWinner(userScore, pcScore){
    if (userScore == pcScore){
        console.log("Final result is Tie!")
    } else if (userScore > pcScore){
        console.log("You are the Winner!")
    } else {
        console.log("You are the Loser!")
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let userChoice = prompt("Type Rock, Paper or Scissors")
        console.log(playRound(userChoice,getComputerChoice()));
    }
}
