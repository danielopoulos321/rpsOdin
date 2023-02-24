//Prompt User for rock, paper or sceissors
//Randomly generate r, p or s for computer
//Compare user vs Computer choice, print appropriate message


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
            return "You Lose! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            return "You Win! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            return "You Lose! Rock beats Scissors!";
        }
        if (computerSelection == 'paper'){
            return "You Win! Scissors beats Paper!";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));