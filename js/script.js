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
    (computerMove == "Rock" && playerMove == "Paper") ||
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
let playerInput = prompt("Choose your move: 1: Rock; 2: Paper; 3: Scissors");
let playerMove = getMoveName(parseInt(playerInput));

console.log(`Player move: ${playerMove}`);
console.log(`Computer move: ${computerMove}`);
let winner = displayResult(playerMove, computerMove);

console.log(`The winner is: ${winner}`);

//code to be deleted
//identify computer move
// if (playerInput == "1") {
//   playerMove = "Rock";
// } else if (playerInput == "2") {
//   playerMove = "Paper";
// } else if (playerInput == "3") {
//   playerMove = "Scissors";
// } else {
//   playerMove = "Unknown";
// }

//check the winner
// if (computerMove == playerMove) {
//   winner = "Draw";
// } else if (
//   (computerMove == "Rock" && playerMove == "Paper") ||
//   (computerMove == "Scissors" && playerMove == "Paper") ||
//   (computerMove == "Rock" && playerMove == "Scissors")
// ) {
//   winner = "Computer";
// } else if ((playerMove = "Unknown")) {
//   winner = "Winner cannot be established";
// } else {
//   winner = "Player";
// }
