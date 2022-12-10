const container = document.querySelector('#container');

drawGrid(40,16);

const button = document.querySelector('.button');
button.addEventListener('click', drawNewGrid);

function drawGrid(squareLength,numberOfSquares) {
    for(let i = 0; i < numberOfSquares**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${squareLength}px`;
        square.style.width = `${squareLength}px`;
    
        container.appendChild(square);

        const squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
        square.addEventListener('mouseenter', fillColor);
        })
    }
}

function fillColor() {
    this.style.background = 'black';
}

function drawNewGrid() {
    let square = prompt("Enter the number of squares per side limit (1-100)", 16);
    
    if(!(square <= 100) || !square) return;
    let numberOfSquares = parseInt(square);
    
    let squareLength = 640/numberOfSquares;
    console.log(squareLength);

    deleteAllChidNodes(container);

    drawGrid(squareLength,numberOfSquares);
}

function deleteAllChidNodes(parentNode) {
    let child = parentNode.lastElementChild;
    while (child) {
        parentNode.removeChild(child);
        child = parentNode.lastElementChild;
    }
}