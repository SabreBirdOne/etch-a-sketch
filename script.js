const GRID_SIDE_LENGTH = "480px"; 

function createGrid(g, n) {
    // create an n x n grid of squares in the flexbox div g
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

const grid = document.querySelector("#grid");
grid.style.height = GRID_SIDE_LENGTH;
grid.style.width = GRID_SIDE_LENGTH;

createGrid(grid, 16);