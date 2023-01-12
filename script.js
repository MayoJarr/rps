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
    const score = document.querySelector('#score');
    let playerScore = 0;
    let computerScore = 0;

    if(playerSelection===computerSelection){
        console.log("tie")
        score.innerHTML = 'its a tie';
        //return "It's a tie!";
     } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        score.innerHTML ="You win! Rock beats scissors!";

        playerScore += 1;
        computerScore -= 1;
     } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        score.innerHTML ="You lose! Paper beats rock!";

        computerScore += 1;
        playerScore -= 1;

     } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        score.innerHTML ="You win! Paper beats rock!";

        playerScore += 1;
        computerScore -= 1;

     } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        score.innerHTML ="You lose! Scissors beats paper!";

        computerScore += 1;
        playerScore -= 1;
     } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        score.innerHTML ="You win! Scissors beats paper!";

        playerScore += 1;
        computerScore -= 1;

     } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        score.innerHTML ="You lose! Rock beats scissors!";

        computerScore += 1;
        playerScore -= 1;
     }
     console.log('playRound started', playerSelection);
}

function game (){
    for (let i = 0; i < 5; i++){
        let playerSelection = choice();
        //getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

const item1 = document.querySelector('#item1');
item1.addEventListener('click', function(){ playRound("ROCK", getComputerChoice()); });

const item2 = document.querySelector('#item2');
item2.addEventListener('click', function(){ playRound("PAPER", getComputerChoice()); });

const item3 = document.querySelector('#item3');
item3.addEventListener('click', function(){ playRound("SCISSORS", getComputerChoice()); });

const items = document.querySelectorAll('.item');

/*items.forEach((items) => {

  items.addEventListener('click', () => {
    console.log('hi');
  });
});*/


