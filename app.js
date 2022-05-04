const gridContainer = document.querySelector(".grid-container");
const gridLength = document.querySelector(".grid-length");
const btnApply = document.querySelector(".btn-apply");
const gridSize = document.querySelector(".grid-size");
const gridColor = document.querySelector(".color-pick");
const btnEraser = document.querySelector(".btn-eraser");
const btnColor = document.querySelector(".color-mode");
const btnClear = document.querySelector(".btn-clear");
const btnRainbow = document.querySelector(".rainbow-mode");

btnApply.addEventListener('click', resetGrid);
gridLength.addEventListener('change',changeLength);
gridColor.addEventListener('change',getColor);
btnEraser.addEventListener('click',getEraser);
btnColor.addEventListener('click',getColor);
btnClear.addEventListener('click',resetGrid);
btnRainbow.addEventListener('click',getRainbow);


let color = "black"

// Create drawing grid
function createGrid(length) {
    for (let i = 0; i < length ** 2 ; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${length},auto)`;

    const gridBoxs = getGridboxs();
    gridBoxs.forEach(node => {
        node.addEventListener("mouseenter",paintBoxs);
    })    
}

// Remove old drawing grid
function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getLength() {
    return gridLength.value;
}

function resetGrid() {
    removeGrid(gridContainer);
    createGrid(getLength());
}

// Update text for grid size on webpage
function changeLength() {
    gridSize.textContent = `${getLength()} x ${getLength()}`;
}

// Get nodelist of all grid
function getGridboxs() {
    return document.querySelectorAll(".grid-container>div");
}

// Painting grid
function paintBoxs() {
    this.style.backgroundColor = `${color}`;
}

// Color picking mode
function getColor() {
    removeRainbow(); // Cancel rainbow random color mode
    color = gridColor.value;
}

// Eraser mode
function getEraser() {
    removeRainbow(); // Cancel rainbow random color mode
    color = 'white';
}

// Rainbow random color drawing mode
function getRainbow() {
    const gridBoxs = getGridboxs();
    gridBoxs.forEach(node => node.addEventListener('mouseenter',randomColor));
}

// Generate random hexadecimal color code
function randomColor() {
    color = `#${Math.round(Math.random()*(0xffffff)).toString(16)}`;  
}

// Cancel rainbow mode
function removeRainbow() {
    const gridBoxs = getGridboxs();
    gridBoxs.forEach(node => node.removeEventListener('mouseenter',randomColor));
}


createGrid(16);



