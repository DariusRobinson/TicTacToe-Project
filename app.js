// define the starting state of the game using initialState as an Object and they keys being
// player1, player2, board, and count... and corresponding value pairs
//"X"         "O"    [null]      counts even and odd to calculate turns
// const initialState = {
//   // player1: "X",
//   // player2: "O",
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   count: 0,
// };

//^^Original initial State may come back to on my resubmission so im not gonna take it out of the code...

// winning combos to be checked every time
const winCombos = [
  { combo: [1, 2, 3] },
  { combo: [4, 5, 6] },
  { combo: [7, 8, 9] },
  { combo: [1, 4, 7] },
  { combo: [2, 5, 8] },
  { combo: [3, 6, 9] },
  { combo: [1, 5, 9] },
  { combo: [3, 5, 7] },
];

const cells = document.querySelectorAll(".cell");
//Players and turn settings
const Player1 = "X";
const Player2 = "O";
let turn = Player1;

const boardState = Array(cells.length);
boardState.fill(null); //automatically fill all tiles with null value
console.log(boardState);

//Elements

const board = document.getElementById("board");
const resetButton = document.getElementById("resetButton");
console.log(board);
//Atempted to get each square by storing the index in a variable to call on 

// const square1 = document.getElementById("0-0");
// const square2 = document.getElementById("0-1");
// const square3 = document.getElementById("0-2");
// //^^Row 1
// const square4 = document.getElementById("1-0");
// const square5 = document.getElementById("1-1");
// const square6 = document.getElementById("1-2");
// //^^ Row 2
// const square7 = document.getElementById("2-0");
// const square8 = document.getElementById("2-1");
// const square9 = document.getElementById("2-2");
// //^^Row 3---
const winMessage = document.getElementById("you-Win");
const playAgainBox = document.getElementById("Game-over-box");
const winnerText = document.getElementById("WinnerIsText");

//Event listener for game board click

cells.forEach((Cell) => Cell.addEventListener("click", cellClick));

function cellClick(event) {
  const Cell = event.target;
  const cellNumber = Cell.dataset.index;
  if (Cell.innerText != "") {
    return;
  }

  if (turn === Player1) {
    Cell.innerText = Player1;
    boardState[cellNumber - 1] = Player1;
    turn = Player2;
  } else {
    Cell.innerText = Player2;
    boardState[cellNumber - 1] = Player2;
    turn = Player1;
  }
}
winnerCheck();//having trouble getting my win check to work so commenting out the game over function...
//Check for winner
function winnerCheck() {
  for (const winningCombos of winCombos) {
    const combo = winningCombos.combo;
//trying to get the cell value to eqaul 1-9 because it automatically starts with the index of 0
    const cellValue1 = boardState[combo[0] - 1];
    const cellValue2 = boardState[combo[1] - 1];
    const cellValue3 = boardState[combo[2] - 1];

    console.log(cellValue1);
    if (
      cellValue1 != null &&
      cellValue1 === cellValue2 &&
      cellValue1 === cellValue3
    ) {
      gameOver(cellValue1);
    }
  }
}
//if every tile has innerText then it will return draw in text message...
let everythingFilled = boardState.every ((Cell) => Cell !== null);
if (everythingFilled){
  gameOver(null)
}


//function invocation

