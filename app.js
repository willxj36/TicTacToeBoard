let cells = document.querySelectorAll('.row > div');

for (i = 0; i < cells.length ; i++) {
    cells[i].addEventListener('click', cellClicked);
}

let whoseTurn = [];

function cellClicked () {
    if(event.target.textContent !== "X" && event.target.textContent !== "O") { 
        whoseTurn.push(1);
        if (whoseTurn.length % 2 == 1) {
            event.target.textContent = "X";
        } else {
            event.target.textContent = "O";
        }
    }
}

function checkRow() {
    for(i = 1 ; i < 3 ; i++) {
        for(x = i ; x < 8 ; x+=3) {
            if(cells[x].textContent === "X" && cells[x+1].textContent === "X" && cells[x+2].textContent === "X") {
                //placeholder for result of if true
            }
        }
    }
}