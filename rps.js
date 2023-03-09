//Prompt User for rock, paper or sceissors
//Randomly generate r, p or s for computer
//Compare user vs Computer choice, print appropriate message

let userScore = 0;
let pcScore = 0;

const result = document.getElementById('result');
const user = document.getElementById('user');
const pc = document.getElementById('pc');
const final = document.getElementById('final');



const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    result.textContent = playRound(rock.id,getComputerChoice())
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    result.textContent = playRound(paper.id,getComputerChoice())
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    result.textContent = playRound(scissors.id,getComputerChoice())
});

const restart = document.getElementById('restart');
restart.addEventListener('click', () => {
    rock.removeAttribute("hidden");
    paper.removeAttribute("hidden");
    scissors.removeAttribute("hidden");
    restart.setAttribute("hidden", "hidden");
    userScore = 0;
    user.textContent = userScore;
    pcScore = 0;
    pc.textContent = pcScore;
    final.textContent = "";
    result.textContent = "";
});



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
            pc.textContent = ++pcScore;
            displayWinner(userScore, pcScore)
            return "You Lose! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            user.textContent = ++userScore;
            displayWinner(userScore, pcScore)
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            user.textContent = ++userScore;
            displayWinner(userScore, pcScore)
            return "You Win! Paper beats Rock!";
        }
        if (computerSelection == 'scissors'){
            pc.textContent = ++pcScore;
            displayWinner(userScore, pcScore)
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            pc.textContent = ++pcScore;
            displayWinner(userScore, pcScore)
            return "You Lose! Rock beats Scissors!";
        }
        if (computerSelection == 'paper'){
            user.textContent = ++userScore;
            displayWinner(userScore, pcScore)
            return "You Win! Scissors beats Paper!";
        }
    }
}

function displayWinner(userScore, pcScore){
    if (userScore == 5 || pcScore == 5){
        if (userScore == pcScore){
            final.textContent = "Final result is Tie!"
        } else if (userScore > pcScore){
            final.textContent = "You are the Winner!"
        } else {
            final.textContent = "You are the Loser!"
        }
        hide();
    }
}

function hide(){
    rock.setAttribute("hidden", "hidden");
    paper.setAttribute("hidden", "hidden");
    scissors.setAttribute("hidden", "hidden");
    restart.removeAttribute("hidden");
}


