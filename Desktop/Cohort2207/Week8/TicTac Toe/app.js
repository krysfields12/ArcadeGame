console.log("Hello world");
// Create a initial state - kinda like the source of information
// Create a board 
//The game will have two players. Player X and O
//Both players will take turn clicking 
//Players should not be able to click on the same box.

//going to need to add an eventlistener. For everytime you click on the board
// Will create winnin options. Should be a total of 8

//Building the X Click

//*Attempt 1
//This is our initial state 
// const gameState = {
//     board:[
//         [null,null,null],
//         [null,null,null],
//         [null,null,null]
//     ],
//       PlayerX: "X",
//       PlayerO: "O",     
// }
// let firstTurn = gameState.PlayerX

// // Our Id's
// const board = document.getElementById("board")

// //Creating X click
// function xClick(){
//     const createX = document.createElement(h2, PlayerX);
//     for (let i=0; i < gameState.board.length; i++){
//         const id = document.createElement ("id");
//         createX.appendChild(id)
// }
// board.appendChild (createX)
// console.log("our click works");
// }

// const cell = document.getElementsByClassName("cell")
// cell.addEventListener ('click', xClick)

// *Attempt 2

//This is our initial state
const gameState = {
    board:[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],
      PlayerX: "X",
      PlayerO: "O",
}
let firstPlayer = gameState.PlayerX

//Elements
const board = document.getElementById("board")
const cell = document.getElementsByClassName("cell")

//Xclick function
cell.addEventListener ('click', xClick)

function xClick (event){
    const target=event.target
    if (target.className.length){
        target.className=''
}else{
    target.className = 'playerX'
}
console.log("X click works");
}


//*Attempt 3 
// const gameState = {
//     board:[
//         [null,null,null],
//         [null,null,null],
//         [null,null,null]
//     ],
//       PlayerX: "X",
//       PlayerO: "O",
//       firstTurn: PlayerX
// }

// // //*Creating the click that will mark the X

// const cells = document.querySelectorAll(".cell") 
// const cellsTwo = document.getElementsByTagName
// cells.addEventListener ('click', cellClick)

// function cellClick(event){


// }




// const clickForX = document.getElementsByClassName('cell')
//  ('click', xClick)
//     console.log("its working");


// firstClick = document.getElementsByClassName("cell").click{
//     console.log("X click is working");
//}
// //Building the O click
// function oClick (event){
//     console.log("O click is working");
// }

//*Creating the startover button

// startOver.addEventListener ('click', startOver)

// const startOver = document.querySelectorAll("".startOver")
// function startOver (event) {
//     document.getElementById ("myCheck").click()
//     console.log("startOver click works");
// }











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