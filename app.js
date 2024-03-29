const cells = document.querySelectorAll(".cell");
//Players and turn settings
const Player1 = "X";
const Player2 = "O";
let turn = Player1;
let isActive = false;
const boardState = Array(cells.length);
boardState.fill(null); //automatically fill all tiles with null value


//Elements
const nameButton = document.getElementById("btn");
const Oplayer = document.getElementById("Oplayer");
const Xplayer = document.getElementById("Xplayer");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const board = document.getElementById("board");
const resetButton = document.getElementById("resetButton");
const gameEnd = document.getElementById("Game-over-box");

let playerXBar = p1.value;
let playerOBar = p2.value;

//Reset button && Name Bars
resetButton.addEventListener("click", resetClick);
function resetClick() {
  cells.forEach((Cell) => (Cell.innerText = ""));
  gameEnd.className = "hidden";
  boardState.fill(null);
   p1.value = ``;
   p2.value = ``;
}

nameButton.addEventListener("click", NameBars);
function NameBars() {
  Xplayer.innerText = p1.value;
  Oplayer.innerText = p2.value;
}

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
    return gameOverX();
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square2.innerText &&
    square2.innerText === square3.innerText
  ) {
    return gameOverO();
  }
  //ROW 2
  else if (
    square4.innerText !== "" &&
    square4.innerText === "X" &&
    square4.innerText === square5.innerText &&
    square5.innerText === square6.innerText
  ) {
    return gameOverX();
  } else if (
    square4.innerText !== "" &&
    square4.innerText === "O" &&
    square4.innerText === square5.innerText &&
    square5.innerText === square6.innerText
  ) {
    return gameOverO();
  }
  //ROW 3
  else if (
    square7.innerText !== "" &&
    square7.innerText === "X" &&
    square7.innerText === square8.innerText &&
    square8.innerText === square9.innerText
  ) {
    return gameOverX();
  } else if (
    square7.innerText !== "" &&
    square7.innerText === "O" &&
    square7.innerText === square8.innerText &&
    square8.innerText === square9.innerText
  ) {
    return gameOverO();
  }

  // COLUMN WIN CHECKERS>>>
  //COLUMN 1
  else if (
    square1.innerText !== "" &&
    square1.innerText === "X" &&
    square1.innerText === square4.innerText &&
    square1.innerText === square7.innerText
  ) {
    return gameOverX();
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square4.innerText &&
    square1.innerText === square7.innerText
  ) {
    return gameOverO();
  }
  //COLUMN 2
  else if (
    square2.innerText !== "" &&
    square2.innerText === "X" &&
    square2.innerText === square5.innerText &&
    square2.innerText === square8.innerText
  ) {
    return gameOverX();
  } else if (
    square2.innerText !== "" &&
    square2.innerText === "O" &&
    square2.innerText === square5.innerText &&
    square2.innerText === square8.innerText
  ) {
    return gameOverO();
  }
  //COLUMN 3
  else if (
    square3.innerText !== "" &&
    square3.innerText === "X" &&
    square3.innerText === square6.innerText &&
    square3.innerText === square9.innerText
  ) {
    return gameOverX();
  } else if (
    square3.innerText !== "" &&
    square3.innerText === "O" &&
    square3.innerText === square6.innerText &&
    square3.innerText === square9.innerText
  ) {
    return gameOverO();
  }
  //Angle 1
  else if (
    square1.innerText !== "" &&
    square1.innerText === "X" &&
    square1.innerText === square5.innerText &&
    square1.innerText === square9.innerText
  ) {
    return gameOverX();
  } else if (
    square1.innerText !== "" &&
    square1.innerText === "O" &&
    square1.innerText === square5.innerText &&
    square1.innerText === square9.innerText
  ) {
    return gameOverO();
  }
  //ANGLE 2
  else if (
    square3.innerText !== "" &&
    square3.innerText === "X" &&
    square3.innerText === square5.innerText &&
    square3.innerText === square7.innerText
  ) {
    return gameOverX();
  } else if (
    square3.innerText !== "" &&
    square3.innerText === "O" &&
    square3.innerText === square5.innerText &&
    square3.innerText === square7.innerText
  ) {
    return gameOverO();
  }
  //Draw Screen
  else if (everythingFilled) {
    return gameOverFinal(null);
  }
}

//GAME OVER FUNCTIONS
function gameOverX() {
  let text = "X";
  if (winnerText !== null) {
    text = `The Winner is ${p1.value}!!!`;
  }
  winnerText.innerText = text;
  gameEnd.className = "visible";
}
function gameOverO() {
  let text = "O";
  if (winnerText !== null) {
    text = `The Winner is ${p2.value}!!!`;
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
    Oplayer.innerHTML=`${p2.value}`
    Xplayer.innerText=`It is ${p1.value} turn...`;
    Cell.innerText = Player1;
    boardState[cellNumber - 1] = Player1;
    winnerCheck();
    turn = Player2;
  } else {
    Xplayer.innerHTML=`${p1.value}`
    Oplayer.innerText=`It is ${p2.value} turn...`
    Cell.innerText = Player2;
    boardState[cellNumber - 1] = Player2;
    winnerCheck();
    turn = Player1;
  }
}


