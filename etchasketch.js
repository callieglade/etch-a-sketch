const container = document.querySelector(".container");

let gridItems = [];

for (let col = 0; col < 16; col++) {
    gridItems[col] = [];
    for (let row = 0; row < 16; row++) {
        gridItems[col[row]] = document.createElement("div");
        gridItems[col[row]].classList.add("grid-item");
        container.appendChild(gridItems[col[row]]);
    }
}