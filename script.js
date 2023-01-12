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
function getPlayerChoice(){
    let playerSelection = prompt("Type your choice: ");
    return playerSelection.toUpperCase();
}
function playRound(playerSelection, computerSelection)
{
    if(playerSelection===computerSelection){
        return "It's a tie!";
     } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        return "You win! Rock beats scissors!";
     } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        return"You lose! Paper beats rock!";
     } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        return "You win! Paper beats rock!";
     } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        return "You lose! Scissors beats paper!";
     } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        return "You win! Scissors beats paper!";
     } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return "You lose! Rock beats scissors!";
     }
}

function game (){
    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

