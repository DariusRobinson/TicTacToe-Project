const cells = document.querySelectorAll(".cell");
//Players and turn settings
const Player1 = "X";
const Player2 = "O";
let turn = Player1;
let isActive = false;
const boardState = Array(cells.length);
boardState.fill(null); //automatically fill all tiles with null value
console.log(boardState);

//Elements

const board = document.getElementById("board");
const resetButton = document.getElementById("resetButton");
console.log(board);

//Storing board spot in variable to call for win check...

const square1 = document.getElementById("0-0");
const square2 = document.getElementById("0-1");
const square3 = document.getElementById("0-2");
//^^Row 1
const square4 = document.getElementById("1-0");
const square5 = document.getElementById("1-1");
const square6 = document.getElementById("1-2");
//^^ Row 2
const square7 = document.getElementById("2-0");
const square8 = document.getElementById("2-1");
const square9 = document.getElementById("2-2");
//^^Row 3---
const winMessage = document.getElementById("you-Win");
const playAgainBox = document.getElementById("Game-over-box");
const winnerText = document.getElementById("WinnerIsText");

//Event listener for game board click

cells.forEach((Cell) => Cell.addEventListener("click", cellClick));

//ROW WIN CHECKER>>>
function winnerCheck() {
  let everythingFilled = boardState.every((Cell) => Cell !== null);
  //ROW 1
  if (
    square1.innerText !== "" &&
    square1.innerText === "X" &&
    square1.innerText === square2.innerText &&
    square2.innerText === square3.innerText
  ) {
    return gameOverX(`${square1.innerText} Wins!!`);
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square2.innerText &&
    square2.innerText === square3.innerText
  ) {
    return gameOverO(`${square1.innerText} Wins!!`);
  }
  //ROW 2
  else if (
    square4.innerText !== "" &&
    square4.innerText === "X" &&
    square4.innerText === square5.innerText &&
    square5.innerText === square6.innerText
  ) {
    return gameOverX(`${square4.innerText} Wins!!!`);
  } else if (
    square4.innerText !== "" &&
    square4.innerText === "O" &&
    square4.innerText === square5.innerText &&
    square5.innerText === square6.innerText
  ) {
    return gameOverO(`${square4.innerText} Wins!!`);
  }
  //ROW 3
  else if (
    square7.innerText !== "" &&
    square7.innerText === "X" &&
    square7.innerText === square8.innerText &&
    square8.innerText === square9.innerText
  ) {
    return gameOverX(`${square7.innerText} Wins!!!`);
  } else if (
    square7.innerText !== "" &&
    square7.innerText === "O" &&
    square7.innerText === square8.innerText &&
    square8.innerText === square9.innerText
  ) {
    return gameOverO(`${square7.innerText} Wins!!!`);
  }

  // COLUMN WIN CHECKERS>>>
  //COLUMN 1
  else if (
    square1.innerText !== "" &&
    square1.innerText === "X" &&
    square1.innerText === square4.innerText &&
    square1.innerText === square7.innerText
  ) {
    return gameOverX(`${square1.innerText} Wins!!!`);
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square4.innerText &&
    square1.innerText === square7.innerText
  ) {
    return gameOverO(`${square1.innerText} Wins!!!`);
  }
  //COLUMN 2
  else if (
    square2.innerText !== "" &&
    square2.innerText === "X" &&
    square2.innerText === square5.innerText &&
    square2.innerText === square8.innerText
  ) {
    return gameOverX(`${square2.innerText} Wins!!!`);
  } else if (
    square2.innerText !== "" &&
    square2.innerText === "O" &&
    square2.innerText === square5.innerText &&
    square2.innerText === square8.innerText
  ) {
    return gameOverO(`${square2.innerText} Wins!!!`);
  }
  //COLUMN 3
  else if (
    square3.innerText !== "" &&
    square3.innerText === "X" &&
    square3.innerText === square6.innerText &&
    square3.innerText === square9.innerText
  ) {
    return gameOverX(`${square3.innerText} Wins!!!`);
  } else if (
    square3.innerText !== "" &&
    square3.innerText === "O" &&
    square3.innerText === square6.innerText &&
    square3.innerText === square9.innerText
  ) {
    return gameOverO(`${square3.innerText} Wins!!!`);
  }
  //Angle 1
  else if (
    square1.innerText !== "" &&
    square1.innerText === "X" &&
    square1.innerText === square5.innerText &&
    square1.innerText === square9.innerText
  ) {
    return gameOverX(`${square1.innerText} Wins!!!`);
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square5.innerText &&
    square1.innerText === square9.innerText
  ) {
    return gameOverO(`${square1.innerText} Wins!!!`);
  }
  //ANGLE 2
  else if (
    square3.innerText !== "" &&
    square3.innerText === "X" &&
    square3.innerText === square5.innerText &&
    square3.innerText === square7.innerText
  ) {
    return gameOverX(`${square3.innerText} Wins!!!`);
  } else if (
    square3.innerText !== "" &&
    square3.innerText === "O" &&
    square3.innerText === square5.innerText &&
    square3.innerText === square7.innerText
  ) {
    return gameOverO(`${square3.innerText} Wins!!!`);
  }
  //Draw Screen
  else if (everythingFilled) {
    return gameOverFinal(null);
  }
}
const gameEnd = document.getElementById("Game-over-box");
//GAME OVER FUNCTIONS
function gameOverX() {
  let text = "X";
  if (winnerText !== null) {
    text = `The Winner is ${text}!!!`;
  }
  winnerText.innerText = text;
  gameEnd.className = "visible";
}
function gameOverO() {
  let text = "O";
  if (winnerText !== null) {
    text = `The Winner is ${text}!!!`;
  }
  winnerText.innerText = text;
  gameEnd.className = "visible";
}
function gameOverFinal() {
  let text = "...DRAW...";
  if (winnerText !== null) {
    text = `${text}`;
  }
  winnerText.innerText = text;

  gameEnd.className = "visible";
}

function cellClick(event) {
  const Cell = event.target;
  const cellNumber = Cell.dataset.index;
  if (Cell.innerText != "") {
    return;
  }

  if (turn === Player1) {
    Cell.innerText = Player1;
    boardState[cellNumber - 1] = Player1;
    winnerCheck();
    turn = Player2;
  } else {
    Cell.innerText = Player2;
    boardState[cellNumber - 1] = Player2;
    winnerCheck(); //having trouble getting my win check to work so commenting out the game over function...
    turn = Player1;
  }
}
// function resetClick(){
//   document.getElementById('resetButton').element.addEventListener(click, reset);

// }
