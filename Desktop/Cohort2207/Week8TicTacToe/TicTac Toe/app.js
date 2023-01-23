console.log("Hello world");
// Create a initial state - kinda like the source of information
// Create a board
//The game will have two players. Player X and O
//Both players will take turns. After click it will switch to other player
//Players should not be able to click on the same box.
//Create an alert if they win.
//going to need to add an eventlistener. For everytime you click on the board
// Will create winning options. Should be a total of 8. 3 vertical, 3 horizontal and 2 diagnol. How to implement this logic?

// look into arrow functions

// *Attempt 2
//This is our initial state
const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  PlayerX: "X",
  PlayerO: "O",
  CurrentPlayer: this.PlayerX,
  CurrentPlayerIndex: 0,
};

//Elements
const board = document.getElementById("board");
const cells = document.getElementsByClassName("cell");
const playerX = document.getElementById("x");
const playerO = document.getElementById("o");
const playerId = document.getElementById("playerId");
console.log(playerId.innerText);
//* Adding Event Listeners
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", changeTurn);
}

//Changing turns function
function changeTurn() {
  if (playerId.innerText === "x") {
    playerId.innerText = "o";
  } else {
    playerId.innerText = "x";
  }
}

//when you click on the empty cell will update the text of the cell. Make sure that it is with the appropriate letter

//check if this move was a winning move
//Will change active player - reference changeTurn()

function moveChange(event) {
  let target = event.target;
  target.innerText = playerId.innerText;

  console.log("anything");
}

// moveChange();

board.onclick = moveChange;

//*Changing turn function

// function clickEvent(event) {
//   const target = event.target;
//   if (target.className === null) {
//     // how can i say when this is empty?
//     target.className = gameState.PlayerX;
//     console.log("playerX click");
//   } else {
//     target.className = gameState.PlayerO;
//     console.log("playerO click");
//   }
// }

// if (gameState.CurrentPlayerIndex === 0) {
// }

// function xClick (xEvent){
//     const oTarget=xEvent.target
//     if (oTarget.className.length){
//         oTarget.className='playerX'
// }
// console.log('our X click works');
// }

//Winning conditions - Indexes
const winningOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//DOM selectors- Example

// const boardElement = document.querySelector ('#board')
// console.log(board);
// for (let i=0; i<gameState.board.length; i++){
//     const card = gameState.board[i]

//     console.log("card", card);

//     const cellElement = document.createElement('div')
//     boardElement.appendChild(cellElement)
// }

// RenderState
// function renderState ( ){

// }
