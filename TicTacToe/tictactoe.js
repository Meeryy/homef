const size = 25;
const winCount = 4;
let currentPlayer = "X";
let board = [];

// Pole
const createBoard = () => {
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


const handleClick = (event) => {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        cell.innerText = currentPlayer;
            checkWin(row,col); // Tady je problem, nestrida hrace
            swapPlayer();//pokud jsou prohozeny pouze strida hrace, ale nedela checkwin 
    }
};

// Swap player
const swapPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWin();
};

// Directions
const checkWin = (row, col) => {
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

// Reset
const resetGame = () => {
    board = [];
    currentPlayer = "X";
    document.getElementById("board").innerHTML = "";
    createBoard();
};

createBoard();
