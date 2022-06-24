// define the starting state of the game using initialState as an Object and they keys being
// player1, player2, board, and count... and corresponding value pairs
//"X"         "O"    [null]      counts even and odd to calculate turns
const initialState = {
  player1: "X",
  player2: "O",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
};
// winning combos to be checked ever time
winCombos = [
  [0 - 0, 0 - 1, 0 - 2],
  [1 - 0, 1 - 1, 1 - 2],
  [2 - 0, 2 - 1, 2 - 2],
  [0 - 0, 1 - 0, 2 - 0],
  [0 - 1, 1 - 1, 2 - 1],
  [0 - 2, 1 - 2, 2 - 2],
  [0 - 0, 1 - 1, 2 - 2],
  [0 - 2, 1 - 1, 2 - 0],
];
let cellElement = document.querySelectorAll("td");
//^^pulling all the table cell elements

let board = document.getElementById("board");

let resetButton = document.getElementById("resetButton");

let winMessage = document.getElementById("you-Win");

// function to begin game and enter names etc...
function buildInitialState() {}



// render
function renderState() {}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners

board.addEventListener("click", (event) => {
  if (event.target.innerText === "") {
    if (initialState.count % 2 === 0) {
      event.target.innerText = "x";
      initialState.count++;
    } else {
      event.target.innerText = "o";
      initialState.count++;
    }
  }
});

// const board = document.getElementById('gameBoard');
// console.log(board)
// board.addEventListener('click', onBoardClick);
