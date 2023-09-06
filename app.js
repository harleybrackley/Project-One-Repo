// Always make sure everything is connected!
console.log('Tic-Tac-Toe!');


// Global variables - games quares, gameboard, reset button, text box, winning, counts


const gameSquares = document.querySelectorAll(".game-square");
const gameBoard = document.querySelector('.game-board');
const resetButton = document.querySelector('.reset-button');
const gameText = document.getElementById('game-text')
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

let currentPlayer = 'X';
let picks = 0;

const countO = 0;
const countX = 0;
const countTie = 0;

let winCountO = 0;
let winCountX = 0;
let tieCountX = 0


// Event listeners

for (let square of gameSquares){
    square.addEventListener('click', handleGameSquares)
}
resetButton.addEventListener('click', handleReset)

// Functions - Event Handlers handle click, check win, check draw, reset game

function handleGameSquares() {
    
}
function handleReset() {

}
function checkDraw() {

}

function checkWin() {
    
}