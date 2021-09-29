//Establish computer's move
let computerMove;
let randMove = Math.floor(Math.random() * 3 + 1);
if (randMove == 1) {
  computerMove = "Rock";
} else if (randMove == 2) {
  computerMove = "Paper";
} else {
  computerMove = "Scissors";
}
//Establish player's move
let playerInput = prompt("Choose your move: 1: Rock; 2: Paper; 3: Scissors");

let playerMove;
if (playerInput == "1") {
  playerMove = "Rock";
} else if (playerInput == "2") {
  playerMove = "Paper";
} else if (playerInput == "3") {
  playerMove = "Scissors";
} else {
  playerMove = "Unknown";
}
console.log(`Player move: ${playerMove}`);
console.log(`Computer move: ${computerMove}`);
let winner;
//check the winner
if (computerMove == playerMove) {
  winner = "Draw";
} else if (
  (computerMove == "Rock" && playerMove == "Paper") ||
  (computerMove == "Scissors" && playerMove == "Paper") ||
  (computerMove == "Rock" && playerMove == "Scissors")
) {
  winner = "Computer";
} else if ((playerMove = "Unknown")) {
  winner = "Winner cannot be established";
} else {
  winner = "Player";
}
console.log(`The winner is: ${winner}`);
