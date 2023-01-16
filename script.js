function game() {
  function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
      return "ROCK";
    } else if (randomInt === 1) {
      return "PAPER";
    } else {
      return "SCISSORS";
    }
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      score.innerHTML = "its a tie <br>" + playerScore + ":" + computerScore;
      //return "It's a tie!";
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
      playerScore += 1;
      score.innerHTML =
        "You score a point! Rock beats scissors! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
      computerScore += 1;
      score.innerHTML =
        "Computer scores a point! Paper beats rock! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
      playerScore += 1;
      score.innerHTML =
        "You score a point! Paper beats rock! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
      computerScore += 1;
      score.innerHTML =
        "Computer scores a point! Scissors beats paper! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
      playerScore += 1;
      score.innerHTML =
        "You score a point! Scissors beats paper! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
      computerScore += 1;
      score.innerHTML =
        "Computer scores a point! Rock beats scissors! <br>" +
        playerScore +
        ":" +
        computerScore;
      aiChoice.innerHTML = "Computer choice: </br>" + computerSelection;
    }

    if (playerScore >= 5) {
      //container.style.cssText = "display: none;"
      over.style.cssText = "display: flex;";
      over.textContent =
        "You scored 5 points, you win the game!";
      playAgain.style.cssText = "display: block;";
    }
    if (computerScore >= 5) {
      //container.style.cssText = "display: none;"
      over.style.cssText = "display: flex;";
      over.textContent =
        "Computer scored 5 points, you lose the game!";
      playAgain.style.cssText = "display: block;";
    }
  }

  const score = document.querySelector("#score");

  const aiChoice = document.querySelector(".aiChoice");

  const gameOver = document.querySelector(".gameEnd");

  const over = document.createElement("over");
  over.classList.add("game");
  gameOver.append(over);

  const container = document.querySelector(".container");

  const playAgain = document.querySelector(".playAgain");

  let playerScore = 0;
  let computerScore = 0;

  function reset() {
    playerScore = 0;
    computerScore = 0;
    over.style.cssText = "display: none;";
    playAgain.style.cssText = "display: none;";
  }

  const item1 = document.querySelector("#item1");
  item1.addEventListener("click", function () {
    playRound("ROCK", getComputerChoice());
  });

  const item2 = document.querySelector("#item2");
  item2.addEventListener("click", function () {
    playRound("PAPER", getComputerChoice());
  });

  const item3 = document.querySelector("#item3");
  item3.addEventListener("click", function () {
    playRound("SCISSORS", getComputerChoice());
  });

  playAgain.addEventListener("click", reset);
}
game();
