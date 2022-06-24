// define the starting state of the game 
const initialState = {
 const player1 = "X";
 const  player2 = "O";
  let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
// winning combos to be checked ever time 
  winCombos = [
  [0-0, 0-1, 0-2],
  [1-0, 1-1, 1-2],
  [2-0, 2-1, 2-2],
  [0-0, 1-0, 2-0],
  [0-1, 1-1, 2-1],
  [0-2, 1-2, 2-2],
  [0-0, 1-1, 2-2],
  [0-2, 1-1, 2-0]
 ]
 let cellElement = document.querySelectorAll('td')  
//^^pulling all the table cell elements

 let board = document.getElementById('board')

 

}
// function to begin game and enter names etc...
function buildInitialState() {
  


}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners

// update state, maybe with another dozen or so helper functions..
function onBoardClick(event) {
  
  document.addEventListener('click', (event) => )
  event.target.innerText = 'O';
     
    // event.target.innerText = 'x';
  

  renderState() // show the user the new state
}

const board = document.getElementById('gameBoard');
console.log(board)
board.addEventListener('click', onBoardClick);

