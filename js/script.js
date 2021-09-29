function playGame(playerInput) {
  clearMessages();
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
  //function displayResults
  function displayResult(playerMove, computerMove) {
    if (computerMove == playerMove) {
      return "Draw";
    } else if (
      (computerMove == "Paper" && playerMove == "Rock") ||
      (computerMove == "Scissors" && playerMove == "Paper") ||
      (computerMove == "Rock" && playerMove == "Scissors")
    ) {
      return "Computer";
    } else if (playerMove == "Unknown") {
      return "Winner cannot be established";
    } else {
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
