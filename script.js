function getComputerChoice(){
    let randomInt=Math.floor(Math.random()*3);
    if(randomInt===0)
    {
        return 'ROCK';
    }
    else if(randomInt===1)
    {
        return 'PAPER';
    }
    else{
        return 'SCISSORS';
    }
}
function playRound(playerSelection, computerSelection)
{
    const score = document.querySelector('#score');

    const gameOver = document.querySelector('.gameEnd');
    const over = document.createElement('over');
    over.classList.add('game');
    gameOver.append(over);

    const container = document.querySelector('.container');

    let gameEnd = false;

    if (computerScore > 5 && playerScore > 5) score.innerHTML = "Reload the page to play again!";

    if(playerSelection===computerSelection){

        score.innerHTML = 'its a tie <br>' + playerScore + ":" + computerScore;
        //return "It's a tie!";

     } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){

        playerScore += 1;
        score.innerHTML ="You win! Rock beats scissors! <br>" + playerScore + ":" + computerScore;

     } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){

        computerScore += 1;
        score.innerHTML ="You lose! Paper beats rock! <br>" + playerScore + ":" + computerScore;

     } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){

        playerScore += 1;
        score.innerHTML ="You win! Paper beats rock! <br>" + playerScore + ":" + computerScore;

     } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){

        computerScore += 1;
        score.innerHTML ="You lose! Scissors beats paper! <br>" + playerScore + ":" + computerScore;

     } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){

        playerScore += 1;
        score.innerHTML ="You win! Scissors beats paper! <br>" + playerScore + ":" + computerScore;

     } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {

        computerScore += 1;
        score.innerHTML ="You lose! Rock beats scissors! <br>" + playerScore + ":" + computerScore;
     }

     if (playerScore >= 5 || computerScore >= 5){
        gameEnd = true;
     }
     
    if (playerScore >= 5) {
        //container.style.cssText = "display: none;"
        over.style.cssText = "display: flex;";
        over.innerHTML = "You scored 5 points, you win the game! <br> Reload the page to play again!";
    }
    if (computerScore >= 5) {
        //container.style.cssText = "display: none;"
        over.style.cssText = "display: flex";
        over.innerHTML = "Computer scored 5 points, you lose the game! <br> Reload the page to play again!";
    }
     
}
let playerScore = 0;
let computerScore = 0;

const item1 = document.querySelector('#item1');
item1.addEventListener('click', function(){ playRound("ROCK", getComputerChoice()); });

const item2 = document.querySelector('#item2');
item2.addEventListener('click', function(){ playRound("PAPER", getComputerChoice()); });

const item3 = document.querySelector('#item3');
item3.addEventListener('click', function(){ playRound("SCISSORS", getComputerChoice()); });
