// Always make sure everything is connected!
console.log('Tic-Tac-Toe!');


// Global variables


const gameSquares = document.querySelectorAll(".game-square");
const gameBoard = document.querySelector('.game-board');
const restartButton = document.querySelector('.restart-button');
const winningCombos = [
    [6, 7, 8],
    [3, 4, 5],
    [0, 1, 2],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 4, 6],
    [0, 4, 8],
]


let currentPlayer = 'X'
let gameBoardValue = ['', '', '', '', '', '', '', '', '',]

//Event listeners


for (let gameSquare of gameSquares) {
    gameSquare.addEventListener('click', handleGameSquares)
}

// Functions - handle click, check win, check draw, reset game

function handleGameSquares() {
    console.log('Howdy');
}

// function checkDraw() {
//     let gameBoardValue = ['']
// }

// function checkWin() {

    
// }


// function handleReset () {
    
//     let gameBoardValue = ['', '', '', '', '', '', '', '', '',]
// }