const DefaultColor = '#333333'
const DefaultSize = 24

let currentColor = DefaultColor
let currentSize = DefaultSize

function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const container = document.querySelector('#container');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
clearBtn.onclick = () => drawNewGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value) {
  setCurrentSize(value);
  updateSizeValue(value);
  drawNewGrid();
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

drawGrid(26.6666,24);

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
          square.addEventListener('mouseover', fillColor);
          square.addEventListener('mousedown', fillColor);
        })
    }
}

function fillColor(e) {
  if(e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = currentColor;
}

function drawNewGrid() {
    numberOfSquares = currentSize;
    
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