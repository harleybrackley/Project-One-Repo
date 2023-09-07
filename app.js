// Always make sure everything is connected!
console.log('Tic-Tac-Toe!');


// Global variables - games quares, gameboard, reset button, text box, winning, counts


const gameSquares = document.querySelectorAll(".game-square");
const gameBoard = document.querySelector('.game-board');
const resetButton = document.querySelector('.reset-button');
const gameText = document.querySelector('.game-text')
const roundCounter = document.querySelector('.round-count')

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
let playerTurns = 0;
let totalRounds = 0;

const countO = document.querySelector('.o-count');
const countX = document.querySelector('.x-count');
const countTie = document.querySelector('.tie-count');

let winCountO = 0;
let winCountX = 0;
let tieCount = 0


// Event listeners



for (let square of gameSquares){
    square.addEventListener('click', handleGameSquares)
}
resetButton.addEventListener('click', handleReset)

// Functions - Event Handlers handle click, check win, check draw, reset game

// click box -> mark box -> check win/tie -> swap turns


function handleGameSquares(evt) {
    let chosenSquare = evt.target;
    if (chosenSquare.innerText === ""){
        chosenSquare.innerText = currentPlayer;
        playerTurns++;
        checkWin(currentPlayer);
        if(playerTurns === 9) {
            gameText.innerHTML = 'Tie Game!'
            tieCount++
            countTie.innerHTML = tieCount
            totalRounds++
            roundCounter.innerHTML = totalRounds;
        }
        if (currentPlayer === 'X'){
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }
        
    } 
}

// check against winning combos array 

function checkWin(player) {
    for (let i = 0; i < winningCombos.length; i++) {
        let winGame = winningCombos[i];
        if(gameSquares[winGame[0]].innerHTML === player 
            && gameSquares[winGame[1]].innerHTML === player 
            && gameSquares[winGame[2]].innerHTML === player) {
                gameText.innerHTML = `Congrats! Player ${player} wins!!`
                gameSquares.forEach((gameSquare)=>{gameSquare.disabled = true})
                totalRounds++
                roundCounter.innerHTML = totalRounds;
            if (player === 'X'){
                winCountX++
                countX.innerHTML = winCountX
            } else if (player === 'O') {
                winCountO++
                countO.innerHTML = winCountO
            }
        }
    }
}

function handleReset() {
    gameSquares.forEach(function(gameSquare){
        gameSquare.disabled = false
        gameSquare.innerText = ""

    })
    currentPlayer = 'X';
    playerTurns = 0;
    gameText.innerText = "";
}