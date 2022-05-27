/*
Generare una griglia di gioco quadrata , in cui ogni cella contiene un
numero incrementale tra quelli compresi tra 1 e 100. Quando l’utente 
clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

const cellsContainer = document.querySelector(".cells-container");

function generateGrid(horizontalCells, verticalCells) {
    const cellsTotal = horizontalCells * verticalCells;

    cellsContainer.style.width = `calc(var(--cells-size) * ${horizontalCells})`;

    for (let i = 1; i <= cellsTotal; i++) {
        
        const cell = document.createElement("div");
        cell.classList.add("cell");
    
        cellsContainer.append(cell);
        cell.append(parseInt(i));

        cell.addEventListener("click", function () {
            this.classList.add("bg-primary");
        })
    }

    return cellsTotal;
}

const cellsTotal = generateGrid(10, 10);