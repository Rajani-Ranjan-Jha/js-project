// var x=document.getElementsByClassName('child')
// const setZero= ()=>{
//     for (let index = 0; index < x.length; index++) {
//         x[index].innerText=''

//     }

// }
// function me(){
//     for (let index = 0; index < x.length; index++) {
//         x[index].addEventListener('click',()=>{
//             x[index].innerText=''
//         })
//     }
// }

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const statusDisplay = document.getElementById('status');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell, index) {
    document.querySelector('.btn').style.display = 'block'
    if (board[index] !== '' || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer;
    // Apply color based on the current player
    if (currentPlayer === 'X') {
        cell.classList.add('red');
    } else {
        cell.classList.add('blue');
    }

    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusDisplay.innerHTML = 'Game ended in a draw!';
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    document.querySelector('.btn').style.display = 'none'

    board = ['', '', '', '', '', '', '', '', ''];
    // currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    // currentPlayer = 'X';
    gameActive = true;
    statusDisplay.innerHTML = '';

    const cells = document.querySelectorAll('.child');
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('red', 'blue');
    });
}