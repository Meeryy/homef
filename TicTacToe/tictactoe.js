const size = 25;
const winCount = 4;
let currentPlayer = "X";
let board = [];

// Pole
function createBoard () {
    const boardElement = document.getElementById("board");
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleClick);
            board[i][j] = "";
            boardElement.appendChild(cell);
        }
    }
};


function handleClick (event){
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        cell.innerText = currentPlayer;
        if (checkWin(row, col)) {
            alert(currentPlayer + " wins!");
            resetGame();
        } else if (!checkRemainingMoves()) {
            alert("It's a draw!");
            resetGame();
        } else {
            swapPlayer();
        }
    }
};


// Swap player
function swapPlayer () {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
};

// Directions
function checkWin (row, col) {
    const directions = [
        [-1, 0],  
        [-1, 1],  
        [0, 1],   
        [1, 1],   
        [1, 0],  
        [1, -1],  
        [0, -1],  
        [-1, -1]  
    ];

    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];
        let count = 1;
        let r = row;
        let c = col;

        while (count < winCount) {
            r += x;
            c += y;

            if (r < 0 || r >= size || c < 0 || c >= size)
                break;
            if (board[r][c] !== currentPlayer)
                break;

            count++;
        }

        r = row;
        c = col;

        while (count < winCount) {
            r -= x;
            c -= y;

            if (r < 0 || r >= size || c < 0 || c >= size)
                break;
            if (board[r][c] !== currentPlayer)
                break;

            count++;
        }

        if (count === winCount) {
            alert(currentPlayer + " wins!");
            resetGame();
            return;
        }
    }
};
//remaining cells
function checkRemainingMoves (){
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === "") {
          return true;
        }
      }
    }
    alert(currentPlayer + "wins the round")
    return resetGame();
  };
  




// Reset
function resetGame () {
    board = [];
    currentPlayer = "X";
    document.getElementById("board").innerHTML = "";
    createBoard();
};

createBoard();
