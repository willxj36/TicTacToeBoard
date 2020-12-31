let cells = document.querySelectorAll('.row > div');

for (i = 0; i < cells.length ; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let whoseTurn = [];

function cellClicked () {
    if(result.textContent === 'X Wins!!' || result.textContent === 'O Wins!!' || result.textContent === "Draw!!") {
        for(i = 0 ; i < cells.length ; i++) {
            cells[i].textContent = "";
        }
        result.textContent = "";
        whoseTurn.length = 0;
    } else if(event.target.textContent !== "X" && event.target.textContent !== "O") { 
        whoseTurn.push(1);
        if (whoseTurn.length % 2 == 1) {
            event.target.textContent = "X";
        } else {
            event.target.textContent = "O";
        }
    }    
    checkRow();
    checkCol();
    checkDiag();
    checkDraw();
}

let result = document.querySelector('.result');

function checkRow() {
    for(i = 0 ; i < 8 ; i+=3) {
        if(cells[i].textContent === "X" && cells[i+1].textContent === "X" && cells[i+2].textContent === "X") {
            result.textContent = 'X Wins!!';
        } else if(cells[i].textContent === "O" && cells[i+1].textContent === "O" && cells[i+2].textContent === "O") {
            result.textContent = 'O Wins!!';
        } else {
            continue;
        }
    }
}

function checkCol() {
    for(i = 0 ; i < 3 ; i++) {
        if(cells[i].textContent === "X" && cells[i+3].textContent === "X" && cells[i+6].textContent === "X") {
            result.textContent = 'X Wins!!';
        } else if(cells[i].textContent === "O" && cells[i+3].textContent === "O" && cells[i+6].textContent === "O") {
            result.textContent = 'O Wins!!';
        } else {
            continue;
        }
    }
}

function checkDiag() {
    if ((cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X") || (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X")) {
        result.textContent = 'X Wins!!';
    } else if((cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O") || (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O")) {
        result.textContent = 'O Wins!!';
    }
}

function checkDraw() {
    if (whoseTurn.length === 9 && result.textContent == '') {
        result.textContent = 'Draw!!';
    }
}