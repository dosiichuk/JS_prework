let playerScore = 0;
let computerScore = 0;
let round = 0;
function playGame(playerInput) {
  clearMessages();
  round += 1;
  //function getMoveName
  function getMoveName(moveId) {
    if (moveId == 1) {
      return "Rock";
    } else if (moveId == 2) {
      return "Paper";
    } else if (moveId == 3) {
      return "Scissors";
    } else {
      return "Unknown";
    }
  }
  //function to toggle winner class
  function winnerToggle(playerScore, computerScore) {
    if (playerScore > computerScore) {
      document.querySelector(".score-span-computer").classList.add("loser");
      document.querySelector(".score-span-player").classList.add("winner");
      document.querySelector(".score-span-computer").classList.remove("winner");
      document.querySelector(".score-span-player").classList.remove("loser");
    } else if (playerScore < computerScore) {
      document.querySelector(".score-span-computer").classList.add("winner");
      document.querySelector(".score-span-player").classList.add("loser");
      document.querySelector(".score-span-computer").classList.remove("loser");
      document.querySelector(".score-span-player").classList.remove("winner");
    }
  }

  //function displayResults
  function displayResult(playerMove, computerMove) {
    if (computerMove == playerMove) {
      return "Draw";
    } else if (
      (computerMove == "Paper" && playerMove == "Rock") ||
      (computerMove == "Scissors" && playerMove == "Paper") ||
      (computerMove == "Rock" && playerMove == "Scissors")
    ) {
      computerScore += 1;
      console.log(computerScore);
      document.querySelector(".score-computer").innerHTML = computerScore;
      winnerToggle(playerScore, computerScore);
      return "Computer";
    } else if (playerMove == "Unknown") {
      return "Winner cannot be established";
    } else {
      playerScore += 1;
      document.querySelector(".score-player").innerText = playerScore;
      winnerToggle(playerScore, computerScore);
      return "Player";
    }
  }

  //Establish computer's move

  let randMove = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randMove);

  //Establish player's move
  //let playerInput = prompt("Choose your move: 1: Rock; 2: Paper; 3: Scissors");
  let playerMove = getMoveName(parseInt(playerInput));

  printMessage(`Player move: ${playerMove}`);
  printMessage(`Computer move: ${computerMove}`);
  let winner = displayResult(playerMove, computerMove);

  printMessage(`The winner is: ${winner}`);
}

document.getElementById("play-rock").addEventListener("click", function () {
  clearMessages();
  playGame(1);
});
document.getElementById("play-paper").addEventListener("click", function () {
  clearMessages();
  playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function () {
  clearMessages();
  playGame(3);
});
