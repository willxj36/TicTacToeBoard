let cells = document.querySelectorAll('.row > div');

for (i = 0; i < cells.length ; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let whoseTurn = [];

function cellClicked () {
    if(event.target.textContent !== "X" && event.target.textContent !== "O") { 
        whoseTurn.push(1);
        if (whoseTurn.length % 2 == 0) {
            event.target.textContent = "X";
        } else {
            event.target.textContent = "O";
        }
    }
}