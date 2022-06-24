// state
let initialState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners

// update state, maybe with another dozen or so helper functions..
function onBoardClick(event) {
    event.target.innerText = 'O'
     
    event.target.innerText = 'x'
  

  renderState() // show the user the new state
}

const board = document.getElementById('gameBoard');
console.log(board)
board.addEventListener('click', onBoardClick);

