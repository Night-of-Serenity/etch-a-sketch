const gridContainer = document.querySelector(".grid-container");
const gridLength = document.querySelector(".grid-length");
const btnApply = document.querySelector(".btn-apply");
const gridSize = document.querySelector(".grid-size");

btnApply.addEventListener('click', recreateGrid);
gridLength.addEventListener('change',changeLength);

function createGrid(length) {
    for (let i = 0; i < length ** 2 ; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${length},auto)`;

    let gridBoxs = document.querySelectorAll(".grid-container div");
    gridBoxs = getGridboxs();
    console.log(gridBoxs);
    gridBoxs.forEach(node => {
        node.addEventListener("mouseenter",paintBoxs);
    })    
}

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function getLength() {
    return gridLength.value;
}

function recreateGrid() {
    removeGrid(gridContainer);
    createGrid(getLength());
}

function changeLength() {
    gridSize.textContent = `${getLength()} x ${getLength()}`;
}

function getGridboxs() {
    return document.querySelectorAll(".grid-container>div");
}

function paintBoxs() {
    this.style.backgroundColor = `black`;
}


createGrid(16);



