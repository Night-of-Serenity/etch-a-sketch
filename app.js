const gridContainer = document.querySelector(".grid-container");
const gridLength = document.querySelector(".grid-length");
const btnApply = document.querySelector(".btn-apply");
let length = gridLength.value;
console.log(length);


function createGrid(length=16) {
    for (let i = 0; i < length ** 2 ; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        // console.count(box);
    }
    console.log(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${length},auto)`;
}
createGrid(length);