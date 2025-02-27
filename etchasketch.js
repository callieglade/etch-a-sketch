const container = document.querySelector(".container");

let gridItems = [];

for (let col = 0; col < 16; col++) {
    gridItems[col] = [];
    for (let row = 0; row < 16; row++) {
        gridItems[col[row]] = document.createElement("div");
        gridItems[col[row]].classList.add("grid-item");
        gridItems[col[row]].style.border = '1px solid black';
        gridItems[col[row]].addEventListener('mouseenter', function(e) {
            e.target.classList.add("hover");
        });
        gridItems[col[row]].addEventListener('mouseleave', function(e) {
            setTimeout(() => {
                e.target.classList.remove("hover");
            }, 500);
        });
        container.appendChild(gridItems[col[row]]);
    }
}