const GRID_SIDE_LENGTH = "480px"; 
const MAX_N = 100;

function createGrid(g, n) {
    // create an n x n grid of squares in the flexbox div ("grid") g
    for (let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.classList = "row";

        for (let j = 0; j < n; j++){
            const square = document.createElement("div");
            square.classList = "square";
            row.appendChild(square);
        }

        g.appendChild(row);
    }
}

function clearGrid(g) {
    // g is a flexbox div
    while(g.firstChild){
        g.removeChild(g.firstChild);
    } 
}

function getRandomRGB(){
    // returns a random RGB string: RGB(?,?,?)
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

const grid = document.querySelector("#grid");
grid.style.height = GRID_SIDE_LENGTH;
grid.style.width = GRID_SIDE_LENGTH;

let n = 16;
createGrid(grid, n);

const changeGridButton = document.querySelector("#changeGridButton");
changeGridButton.addEventListener("click", () => {
    let input = +prompt("What's the number of squares per side for the new grid?");
    n = Math.min(input, MAX_N);
    clearGrid(grid);
    createGrid(grid, n);
})


