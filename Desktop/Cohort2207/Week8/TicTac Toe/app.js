console.log("Hello world");
// Create a initial state - kinda like the source of information
// Create a board 
//The game will have two players. Player X and O
//Both players will take turns. After click it will switch to other player 
//Players should not be able to click on the same box.
//Create an alert if they win.
//going to need to add an eventlistener. For everytime you click on the board
// Will create winning options. Should be a total of 8. 3 vertical, 3 horizontal and 2 diagnol. How to implement this logic?


//Building the X Click

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
let runningGame= false

//Elements
const board = document.getElementById("board")
const cells = document.getElementsByClassName("cell")

//Create a for loop so it adds the event listener 
for (let i=0; i< cells.length;i++){
    cells [i].addEventListener ('click', xClick)  
}

//X click function
function xClick (event){
    const target=event.target
    if (target.className.length){
        target.className='playerX'
} 
console.log('our X click works');
}

//O click function
for (let i=0; i< cells.length;i++){
    cells [i].addEventListener ('click', oClick)  
}

function oClick (event){
    const target=event.target
    if (target.className.length){
        target.className='playerO'
} 
console.log('our O click works');
}

//*Winning conditions - Indexes

const winningOptions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

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