// define the starting state of the game using initialState as an Object and they keys being
// player1, player2, board, and count... and corresponding value pairs
//"X"         "O"    [null]      counts even and odd to calculate turns
const initialState = {
  // player1: "X",
  // player2: "O",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
};
// winning combos to be checked ever time
const winCombos = [
  [0 - 0, 0 - 1, 0 - 2],
  [1 - 0, 1 - 1, 1 - 2],
  [2 - 0, 2 - 1, 2 - 2],
  [0 - 0, 1 - 0, 2 - 0],
  [0 - 1, 1 - 1, 2 - 1],
  [0 - 2, 1 - 2, 2 - 2],
  [0 - 0, 1 - 1, 2 - 2],
  [0 - 2, 1 - 1, 2 - 0],
];

const cells = document.querySelectorAll(".cell");
//Players and turn settings
const Player1 ="X";
const Player2 ="O";
let turn = Player1;


const boardState = Array(cells.length);
boardState.fill(null); //automatically fill all tiles with null value
console.log(boardState);


//Elements

const board = document.getElementById("board");
const resetButton = document.getElementById("resetButton");
console.log(board);
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
//^^Row 3
const winMessage = document.getElementById("you-Win");
const playAgainBox = document.getElementById("Game-over-box");
const winnerIsText = document.getElementById("WinnerIsText")

//Event listener for game board click



cells.forEach((Cell) => Cell.addEventListener("click", cellClick));

function cellClick(event){
  if (playAgainBox.classList.contains("visible")){
    return;
  }

  const Cell = event.target;
}

















//Stevens code he showed you in the last office hour...

// board.addEventListener("click", (event) => {
//   const cor = event.target.id;

//   // console.log(cor)
//   const row = cor[0];
//   const column = cor[2];
//   initialState.board[row][column] = "";
//   // console.log(initialState.board)
//   // // console.log(cor[0])
//   // console.log(cor[2])

//   if (event.target.innerText === "") {
//     if (initialState.count % 2 === 0) {
//       event.target.innerText = "x";
//       initialState.count++;
//     } else {
//       event.target.innerText = "o";
//       initialState.count++;
//     }
//   }
// });

// const board = document.getElementById('gameBoard');
// console.log(board)
// board.addEventListener('click', onBoardClick);
